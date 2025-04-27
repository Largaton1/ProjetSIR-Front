# 🎟️ Application de Vente de Tickets de Concert en Ligne

Ce projet a été développé par le binôme **Loïc Nassara** & **Cyril Koné**.

## Introduction

Bienvenue ! Voici un petit guide pour explorer le site :

- À votre arrivée sur la page d'accueil, aucun événement ne sera affiché.
- Pour ajouter des événements, vous devez **créer un compte Organisateur**.
- Une fois votre compte créé, cliquez sur **"Ajouter un événement"** dans la barre de menu.
- Après avoir ajouté un événement, vous pourrez le retrouver dans **"Mes événements"**.
- Notez que l'événement ne s'affichera pas immédiatement sur l'accueil, car son statut sera initialement **"En attente"**.

### Validation des événements

- Pour changer le statut d'un événement, vous devez **créer un compte Administrateur**.
- Déconnectez-vous de votre compte Organisateur, puis cliquez sur **"Connexion Admin"** dans la barre de menu.
- Une fois connecté en tant qu'Administrateur :
  - Accédez à **"Liste des événements"**.
  - Modifiez le statut de l'événement depuis les actions disponibles.
  - Tous les statuts sauf **"En attente"** rendront l'événement visible sur la page d'accueil.

Merci pour votre utilisation et bonne navigation !

---

## 🛠️ Serveur de développement

Pour démarrer un serveur de développement local, exécutez :

```bash
ng serve
