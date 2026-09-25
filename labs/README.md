# AZ-104 — labs guidés

Ouvre `app/index.html` puis l’onglet **Labs guidés**. Les cinq labs de l’application couvrent chacun un domaine du [guide officiel AZ-104 (objectifs en vigueur depuis le 17 avril 2026)](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-104). Le parcours enregistre localement les étapes cochées et les inclut dans l’export JSON de l’onglet Progression.

| Lab | Sujet | Durée indicative | Ressources |
|---|---|---:|---|
| 1 | RBAC, tags, resource lock | 25 min | Resource group |
| 2 | StorageV2, LRS, Blob soft delete | 30 min | Storage account |
| 3 | ARM/Bicep, what-if, deployment | 30 min | Storage account ; [template](03-bicep/main.bicep) |
| 4 | VNet, subnet, NSG | 30 min | VNet, NSG |
| 5 | Activity Log, metrics, alert logic | 20 min | Lecture seule |

Avant une création, vérifie l’abonnement (`az account show -o table`) et la région. Les labs 2 et 3 créent un compte Storage facturable ; le lab 4 ne déploie aucune VM. Les commandes de nettoyage figurent dans chaque lab et ne s’exécutent pas automatiquement. La réussite d’un lab dépend de sa vérification, pas seulement de l’exécution de la commande.

## Autres ressources publiques utiles

- [MicrosoftLearning AZ-104 — labs officiels](https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/) : couvre d’autres opérations de l’examen, notamment Entra, Azure Policy, VM, Azure Files et Site Recovery. Certaines activités exigent une capacité ou un abonnement qui peut ne pas être disponible avec Azure for Students.
- [Dépôt source MicrosoftLearning](https://github.com/MicrosoftLearning/AZ-104-MicrosoftAzureAdministrator) : consignes et fichiers des labs officiels.
- [Microsoft Learn — cinq learning paths AZ-104](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-104) : cours et documentation par domaine.
- [Microsoft Practice Assessment](https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/) : questions gratuites pour mesurer les lacunes ; note les thèmes ratés avant de revoir les fiches.
- [Azure Bicep samples](https://github.com/Azure/azure-docs-bicep-samples) et [Azure Quickstart Templates](https://github.com/Azure/azure-quickstart-templates) : exemples à lire et adapter, en contrôlant coût et région avant déploiement.

Ces dépôts ne reçoivent pas l’accès à ce dépôt privé et leur contenu n’est pas copié ici : les liens servent de références externes.
