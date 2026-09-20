# Étiqélec Smart

Version web mobile d'**Étiqélec**, logiciel d'étiquetage pour tableau électrique — créé et designé par AistudioPress.

🔗 **Application en ligne : https://pat4636.github.io/etiqelec/**

## Pourquoi ce dépôt existe

Ce dépôt héberge uniquement la version smartphone de l'application (`index.html`), en HTTPS via GitHub Pages. Cet hébergement est nécessaire pour deux fonctionnalités que Chrome bloque sur un fichier ouvert en local (`file://`) :

- **Installation complète sur l'écran d'accueil** (« Ajouter à l'écran d'accueil » depuis Chrome) : l'application s'ouvre alors en plein écran, sans aucune barre de navigateur, comme une vraie application.
- **Partage natif** (bouton « Partager » de l'application) : menu de partage du système (SMS, e-mail, WhatsApp, Messenger...) pour envoyer directement le PDF des étiquettes généré.

## Fonctionnement

- Application entièrement autonome : tout le code (y compris les bibliothèques utilisées pour l'export PDF) est inclus dans le fichier `index.html`, aucune dépendance externe ni requête réseau au chargement.
- `sw.js` est un service worker minimal, présent uniquement pour satisfaire les critères d'installation de Chrome (l'application fonctionne déjà hors-ligne par elle-même).
- Fonctionne aussi hors-ligne une fois ouverte au moins une fois.

## Mise à jour

Pour publier une nouvelle version : remplacer `index.html` par la version à jour d'`EtiqelecSmart-v1.1.1.html` (renommé) dans ce dépôt — le site se met à jour automatiquement en quelques dizaines de secondes.

## Version bureau (Windows)

La version bureau (avec exécutable Windows) est un projet séparé, non hébergée ici — elle n'a pas besoin d'être en ligne puisqu'elle s'installe directement comme application Windows.
