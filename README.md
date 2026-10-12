# AZ-104 Studio ☁️

Un terrain d'entraînement personnel pour préparer **Microsoft Azure Administrator (AZ-104)** : comprendre un service, le manipuler, puis vérifier si tu saurais le choisir dans un scénario d'examen. Les termes Azure restent en **anglais** ; les explications sont en **français**.

> 🎯 L'objectif : pouvoir expliquer *pourquoi* une réponse est correcte, et dans quel autre scénario une mauvaise option deviendrait la bonne.

## ▶️ Ouvrir l'application

**En ligne, à partager :** [Ouvrir AZ-104 Studio](https://hajarmezouar.github.io/az104-revision/). Les mises à jour de `app/` sur `main` sont publiées automatiquement par GitHub Pages.

**Hors connexion :** depuis WSL, dans ce dépôt :

```bash
explorer.exe app/index.html
```

Ou double-clique sur `app/index.html` dans l'Explorateur Windows. L'application locale fonctionne **hors connexion** ; les liens Microsoft Learn demandent Internet. Aucune installation de dépendances n'est nécessaire.

Si tu viens de récupérer une mise à jour, lance `git pull` avant d'ouvrir le fichier.

## 🧭 Choisis ton parcours

| Partie | Ce que tu y fais | Bon moment pour l'utiliser |
|---|---|---|
| **Modules AZ-104** | Parcours les six learning paths Microsoft : prérequis puis cinq domaines de l’examen | Apprendre un domaine ou combler une lacune |
| **Questions** | Réponds aux 489 questions des six tests ; les 201 occurrences de captures ont été rapprochées exactement des questions des DOCX | Tester le contenu historique |
| **Banque vérifiée** | Travaille les 500 questions du ZIP, dans une section et une progression séparées, avec le lien Microsoft Learn associé | Réviser par domaine officiel |
| **Cartes mémoire** | 40 rappels courts à retourner | Réviser pendant 10 minutes |
| **Labs guidés** | Réalise cinq ateliers Azure avec commandes, vérification, défi et nettoyage | Transformer une règle en geste concret |
| **Progression** | Retrouve scores, erreurs, trophées et sauvegarde JSON | Décider quoi revoir ensuite |

**Une session utile de 30 à 45 min :** choisis une compétence dans un module → fais les questions liées → note pourquoi tu t'es trompée → réalise le lab correspondant → reviens aux mêmes questions quelques jours plus tard.

## 🗺️ Les six parcours Microsoft Learn

Le cours AZ-104T00-A présente six parcours : un parcours de prérequis, puis les cinq domaines ci-dessous. Le parcours de prérequis couvre le contexte Azure, Cloud Shell, Azure CLI, Azure PowerShell et Resource Manager ; il n’a pas de pondération séparée à l’examen.

Les domaines suivent le [guide officiel AZ-104](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-104) (objectifs depuis le 17 avril 2026).

| Domaine officiel | Pondération | Exemples à savoir expliquer |
|---|---:|---|
| Manage Azure identities and governance | 20–25 % | Entra ID, Azure RBAC, Azure Policy, locks, budgets |
| Implement and manage storage | 15–20 % | SAS, Storage firewall, LRS/ZRS/GRS, Blob et Azure Files |
| Deploy and manage Azure compute resources | 20–25 % | ARM/Bicep, VM, VMSS, containers, App Service |
| Implement and manage virtual networking | 15–20 % | VNet, peering, NSG, UDR, endpoints, DNS, Load Balancer |
| Monitor and maintain Azure resources | 10–15 % | Metrics, logs, alerts, Backup et Site Recovery |

Le cours local suit maintenant les **28 modules actuellement listés par Microsoft Learn**, parcours par parcours : 2 modules de prérequis, 6 d’identité/gouvernance, 4 de stockage, 5 de compute, 8 de réseau et 3 de monitoring/backup. Les introductions, exercices, contrôles de connaissances et résumés ont été parcourus dans le flux de chaque module ; le site condense les unités substantielles en **114 points de révision orientés examen**. Chaque module renvoie vers sa page Microsoft Learn.

Le détail de la couverture se trouve dans [la revue du cursus](audits/curriculum-review.md).

Les cases « Compris » servent à confirmer que tu peux expliquer la notion et réaliser le geste, pas seulement reconnaître son nom.

## 🧪 Labs et ressources publiques

Commence par le [guide des cinq labs](labs/README.md). Le lab Compute contient un [template Bicep à examiner et déployer](labs/03-bicep/main.bicep). Certains labs créent du Storage facturable : vérifie l'abonnement, la région et le coût affiché avant de lancer les commandes ; le nettoyage est indiqué dans chaque atelier.

Pour aller plus loin sans recopier des contenus externes :

- [Programme officiel AZ-104 et objectifs détaillés](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-104)
- [Learning paths Microsoft Learn pour AZ-104](https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/)
- [Practice Assessment Microsoft](https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/) — repère tes lacunes par domaine
- [Labs officiels MicrosoftLearning](https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/) et leur [dépôt GitHub](https://github.com/MicrosoftLearning/AZ-104-MicrosoftAzureAdministrator)
- [Exemples Bicep de la documentation Azure](https://github.com/Azure/azure-docs-bicep-samples)
- [Azure Quickstart Templates](https://github.com/Azure/azure-quickstart-templates) — lis le template et estime les ressources avant de déployer

## 🏅 Scores et sauvegarde

Les versions en ligne et locale conservent chacune leur progression dans leur propre navigateur/origine. Pour passer de l'une à l'autre, exporte le JSON dans **Progression**, puis importe-le dans l'autre version. La version GitHub Pages est mise à jour automatiquement après un `git push` qui modifie `app/` sur `main`.

10 XP sont accordés une seule fois quand ta réponse correspond au **corrigé fourni**. Bronze : 100 XP · Silver : 300 XP · Gold : 600 XP. Les scores, séries, cases des modules et étapes des labs restent sur ce navigateur. Dans **Progression**, télécharge une sauvegarde JSON pour pouvoir les restaurer après changement de navigateur ou effacement des données locales.

## 🔎 Vérifier les informations

Les questions, les corrigés et les notes servent de supports de révision. Vérifiez les réponses et les informations par vous-même dans la [documentation officielle Microsoft](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-104) avant de vous y fier.

Les **489 questions** et leurs corrigés viennent des six DOCX fournis. La correspondance des **201 occurrences d’images** a été vérifiée exhaustivement contre la structure des DOCX, sans décalage détecté. Cela ne valide pas automatiquement les réponses et explications : la première question contient d’ailleurs une référence Storage hors sujet, remplacée par la bonne source Resource Guard dans l’analyse détaillée.

Les **500 questions** de la section « Banque vérifiée » viennent des cinq classeurs du ZIP (100 par domaine). Leur structure, leurs identifiants, l’index de réponse et le domaine `learn.microsoft.com` des sources ont été contrôlés. Le lien associé reste à relire si une fonctionnalité Azure évolue. Le rapport détaillé se trouve dans [l’audit des questions](audits/question-audit.md).

Les [documents sources](sources/) et [fiches individuelles](questions/) sont conservés pour corriger les éventuelles erreurs. Avant de rendre ce dépôt public, vérifie les droits de redistribution des DOCX et des questions qu'ils contiennent.
