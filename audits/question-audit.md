# Audit des banques de questions — 12 octobre 2026

## Résultats vérifiés automatiquement

- Banque historique : **489 questions** réparties dans six DOCX.
- Illustrations : **201 occurrences** sur 165 questions, représentant **95 fichiers uniques**.
- Correspondance des illustrations : **201/201** occurrences ont le même contenu binaire et se trouvent sous le même numéro de question dans le DOCX source correspondant. **Aucun décalage détecté.**
- Nouvelle banque ZIP : **500 questions uniques**, soit 100 par domaine officiel.
- Nouvelle banque : **500 identifiants uniques**, **500 énoncés uniques**, index de bonne réponse valide et texte de réponse identique au choix ciblé pour chaque ligne.
- Nouvelle banque : les **161 URL distinctes** utilisent toutes le domaine `learn.microsoft.com`.
- Les cinq classeurs de la nouvelle banque ne contiennent aucune image intégrée.

## Portée de la vérification factuelle

L’intégrité des données et la correspondance image-question ont été vérifiées exhaustivement. Une URL Microsoft Learn n’est toutefois pas, à elle seule, la preuve que chaque phrase d’une explication est exacte ou encore actuelle.

La première question de la banque historique illustre ce risque : la réponse `Resource Guard` est correcte pour Multi-User Authorization, mais le lien fourni dans le DOCX pointe vers les encryption scopes de Storage. L’application affiche donc les explications des DOCX comme des corrigés fournis, et non comme des réponses officielles Microsoft.

Pour la nouvelle banque, l’application montre le titre et le lien Microsoft Learn attachés à chaque question. Les explications doivent être réévaluées si Microsoft modifie le service, les limites ou le comportement décrit.

## Sources de référence

- [Cours AZ-104T00-A](https://learn.microsoft.com/en-us/training/courses/az-104t00)
- [Guide d’étude AZ-104 — compétences mesurées à partir du 17 avril 2026](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-104)
- [Resource Guard et Multi-User Authorization](https://learn.microsoft.com/en-us/azure/backup/multi-user-authorization-concept)
