from __future__ import annotations

import argparse
import json
from pathlib import Path

import openpyxl


FIELDS = [
    "question_id", "domain_number", "domain_name", "category", "subtopic",
    "difficulty", "question", "choice_a", "choice_b", "choice_c", "choice_d",
    "num_choices", "correct_choice", "correct_answer_text", "explanation",
    "source_url", "source_title", "tags",
]


def main() -> None:
    parser = argparse.ArgumentParser(description="Convert the AZ-104 XLSX bank to browser data.")
    parser.add_argument("source_dir", type=Path)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()

    questions = []
    for workbook_path in sorted(args.source_dir.glob("domain-*.xlsx")):
        workbook = openpyxl.load_workbook(workbook_path, read_only=True, data_only=True)
        sheet = workbook.active
        rows = sheet.iter_rows(values_only=True)
        headers = list(next(rows))
        if headers != FIELDS:
            raise ValueError(f"Unexpected columns in {workbook_path.name}: {headers}")

        for values in rows:
            record = dict(zip(headers, values))
            choices = [record[f"choice_{letter}"] for letter in "abcd"]
            correct = record["correct_choice"]
            if not isinstance(correct, int) or not 0 <= correct < len(choices):
                raise ValueError(f"Invalid correct_choice in {record['question_id']}")
            if choices[correct] != record["correct_answer_text"]:
                raise ValueError(f"Answer text mismatch in {record['question_id']}")
            if not str(record["source_url"]).startswith("https://learn.microsoft.com/"):
                raise ValueError(f"Non-Microsoft source in {record['question_id']}")

            questions.append({
                "id": record["question_id"],
                "domain": record["domain_number"],
                "domainName": record["domain_name"],
                "subtopic": record["subtopic"],
                "difficulty": record["difficulty"],
                "question": record["question"],
                "choices": choices[: record["num_choices"]],
                "answer": correct,
                "explanation": record["explanation"],
                "sourceUrl": record["source_url"],
                "sourceTitle": record["source_title"],
                "tags": [tag.strip() for tag in str(record["tags"]).split(",") if tag.strip()],
                "sourceFile": workbook_path.name,
            })

    ids = [question["id"] for question in questions]
    stems = [question["question"] for question in questions]
    if len(questions) != 500 or len(set(ids)) != 500 or len(set(stems)) != 500:
        raise ValueError("Expected 500 unique IDs and 500 unique question texts")

    payload = json.dumps(questions, ensure_ascii=False, separators=(",", ":"))
    args.output.write_text(
        "// Generated from sources/question-bank/*.xlsx. Do not edit by hand.\n"
        f"window.AZ104_LEARN_QUESTIONS={payload};\n",
        encoding="utf-8",
    )
    print(f"Wrote {len(questions)} questions to {args.output}")


if __name__ == "__main__":
    main()
