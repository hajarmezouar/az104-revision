# Révision AZ-104

Six examens blancs fournis, 489 questions indexées. Les réponses d’origine ne sont **pas encore vérifiées**. Ne mémorisez pas un corrigé sans contrôler le service Azure et les conditions de l’énoncé.

## Utilisation

1. Ouvrir [l’index](index.md) ou filtrer [le catalogue](catalogue.csv).
2. Répondre avant de lire « corrigé fourni ».
3. Vérifier la réponse dans la documentation Microsoft Learn et compléter « Analyse vérifiée ».
4. Reporter les erreurs dans [erreurs-a-revoir.md](erreurs-a-revoir.md).
5. Rassembler les règles récurrentes dans `themes/` selon le [guide officiel AZ-104](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-104).

Les figures des questions restent dans les DOCX d’origine. Pour une question qui dépend d’une capture, lire le document original avant de valider la réponse.

## Qualité

Chaque question demande : réponse justifiée, raison de rejet des autres options, mini scénario où chacune serait valable, schéma utile, lien Microsoft Learn précis. Si l’énoncé manque de données ou si le corrigé est contestable, noter l’incertitude au lieu d’inventer.

Le dépôt est conçu pour rester privé tant que les droits de redistribution des examens ne sont pas établis.

## Application de révision visuelle

Ouvrir [`app/index.html`](app/index.html) dans le navigateur, même hors connexion. Les captures des 201 occurrences présentes dans les DOCX sont intégrées à la question correspondante (95 fichiers image distincts). L'application contient les 489 questions, l'entraînement interactif, un filtre d'erreurs, 20 fiches visuelles, 40 cartes mémoire et une progression locale.

**Limite actuelle :** une seule question dispose de l'analyse vérifiée détaillée et des scénarios pour chaque autre choix. Les explications des autres questions proviennent des examens fournis et ne sont pas encore validées. Les fiches thématiques sont des notes originales avec exemples et pièges, mais ne couvrent pas encore les 489 cas individuellement. L'application n'envoie aucune donnée à un serveur.

## Modules du programme AZ-104

L'onglet « Modules AZ-104 » suit les cinq domaines du [guide Microsoft Learn (compétences depuis le 17 avril 2026)](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-104) : identités/gouvernance (20–25 %), stockage (15–20 %), calcul/applications (20–25 %), réseaux (15–20 %) et supervision/continuité (10–15 %). Chaque module contient un modèle visuel, les faits à retenir, les raisonnements à maîtriser, les objectifs à couvrir, des fiches originales et trois cas interactifs. Les cas ajoutés sont des exercices originaux ; ils ne prétendent pas être des questions officielles de l'examen.

Pour ouvrir l'application sur Windows après extraction : `C:\Users\Utilisateur\Documents\az104-revision\app\index.html`. Dans WSL, depuis le dépôt : `explorer.exe app/index.html`.

### Langue et retour d'entraînement

Les noms des domaines et les termes Azure restent en anglais ; les explications et les conseils sont en français. Le mode questions affiche une réaction après vérification, une série de bonnes réponses et des XP. Les XP sont attribués une fois par question lorsque la réponse correspond pour la première fois au **corrigé fourni**, qui n'est pas systématiquement vérifié. La progression et les points sont enregistrés uniquement dans le navigateur local.

### Trophées et sauvegarde

Bronze (100 XP), Silver (300 XP) et Gold (600 XP) se débloquent à raison de 10 XP par question conforme au corrigé fourni pour la première fois. La série et le score restent enregistrés dans le navigateur de l'appareil. L'onglet « Progression » permet de télécharger une sauvegarde JSON et de la réimporter après un changement de navigateur ou un effacement des données locales. Les réponses du document source restent à vérifier individuellement ; un trophée ne valide pas l'exactitude scientifique de toutes les questions.
