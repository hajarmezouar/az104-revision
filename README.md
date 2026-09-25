# AZ-104 Studio ☁️

Un terrain d'entraînement personnel pour préparer **Microsoft Azure Administrator (AZ-104)** : comprendre un service, le manipuler, puis vérifier si tu saurais le choisir dans un scénario d'examen. Les termes Azure restent en **anglais** ; les explications sont en **français**.

> 🎯 L'objectif : pouvoir expliquer *pourquoi* une réponse est correcte, et dans quel autre scénario une mauvaise option deviendrait la bonne.

## ▶️ Ouvrir l'application

**En ligne, à partager :** [Ouvrir AZ-104 Studio](https://az104-study-studio.hajarmezouar617.chatgpt.site). Le dépôt GitHub peut rester privé : seules les pages publiées sont accessibles avec ce lien.

**Hors connexion :** depuis WSL, dans ce dépôt :

```bash
explorer.exe app/index.html
```

Ou double-clique sur `app/index.html` dans l'Explorateur Windows. L'application locale fonctionne **hors connexion** ; les liens Microsoft Learn demandent Internet. Aucune installation de dépendances n'est nécessaire.

Si tu viens de récupérer une mise à jour, lance `git pull` avant d'ouvrir le fichier.

## 🧭 Choisis ton parcours

| Partie | Ce que tu y fais | Bon moment pour l'utiliser |
|---|---|---|
| **Modules AZ-104** | Parcours chaque compétence : *à comprendre*, *comment faire*, *piège*, schéma, cas et fiches | Apprendre un domaine ou combler une lacune |
| **Questions** | Réponds aux 489 questions des six tests ; les 201 occurrences de captures sont liées aux bonnes questions | Tester ce que tu sais vraiment |
| **Cartes mémoire** | 40 rappels courts à retourner | Réviser pendant 10 minutes |
| **Labs guidés** | Réalise cinq ateliers Azure avec commandes, vérification, défi et nettoyage | Transformer une règle en geste concret |
| **Progression** | Retrouve scores, erreurs, trophées et sauvegarde JSON | Décider quoi revoir ensuite |

**Une session utile de 30 à 45 min :** choisis une compétence dans un module → fais les questions liées → note pourquoi tu t'es trompée → réalise le lab correspondant → reviens aux mêmes questions quelques jours plus tard.

## 🗺️ Les cinq modules

Les domaines suivent le [guide officiel AZ-104](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-104) (objectifs depuis le 17 avril 2026).

| Domaine officiel | Pondération | Exemples à savoir expliquer |
|---|---:|---|
| Manage Azure identities and governance | 20–25 % | Entra ID, Azure RBAC, Azure Policy, locks, budgets |
| Implement and manage storage | 15–20 % | SAS, Storage firewall, LRS/ZRS/GRS, Blob et Azure Files |
| Deploy and manage Azure compute resources | 20–25 % | ARM/Bicep, VM, VMSS, containers, App Service |
| Implement and manage virtual networking | 15–20 % | VNet, peering, NSG, UDR, endpoints, DNS, Load Balancer |
| Monitor and maintain Azure resources | 10–15 % | Metrics, logs, alerts, Backup et Site Recovery |

Chaque domaine contient maintenant un **cours par section**, et non une simple liste « à maîtriser ». Les cases « Compris » sont là pour te demander si tu peux expliquer la notion et réaliser le geste, pas seulement reconnaître son nom.

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

Les versions en ligne et locale conservent chacune leur progression dans leur propre navigateur/origine. Pour passer de l'une à l'autre, exporte le JSON dans **Progression**, puis importe-le dans l'autre version. La publication en ligne n'est pas mise à jour automatiquement par un `git push` : une nouvelle version du site doit être déployée.

10 XP sont accordés une seule fois quand ta réponse correspond au **corrigé fourni**. Bronze : 100 XP · Silver : 300 XP · Gold : 600 XP. Les scores, séries, cases des modules et étapes des labs restent sur ce navigateur. Dans **Progression**, télécharge une sauvegarde JSON pour pouvoir les restaurer après changement de navigateur ou effacement des données locales.

## 🔎 Vérifier les informations

Les questions, les corrigés et les notes servent de supports de révision. Vérifiez les réponses et les informations par vous-même dans la [documentation officielle Microsoft](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-104) avant de vous y fier.
