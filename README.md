# Gestion d'une Pharmacie – API REST

## 1. Présentation du projet

Ce projet consiste à développer une API REST pour la gestion d'une pharmacie en utilisant Node.js, Express.js et MongoDB.

L'API permet de gérer les médicaments et les utilisateurs avec un système d'authentification sécurisé basé sur JWT.

## 2. Technologies utilisées

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt
- jsonwebtoken
- dotenv

## 3. Structure du projet

- `controllers/` : logique de traitement des requêtes.
- `Models/` : modèles User et Medicament.
- `routes/` : définition des routes.
- `middleware/` : vérification du token JWT.
- `db/` : connexion à MongoDB.
- `index.js` : fichier principal de l'application.

## 4. Installation

Cloner le projet :

```bash
git clone URL_DU_PROJET
```

Installer les dépendances :

```bash
npm install
```

Créer un fichier `.env` à partir de `.env.example` et configurer les variables :

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## 5. Démarrage du serveur

```bash
npm run dev
```

Le serveur démarre sur :

`http://localhost:3000`

## 6. Endpoints de l'API

### Authentification

| Méthode | Route | Description |
|---|---|---|
| POST | /api/users/register | Inscription |
| POST | /api/users/login | Connexion |

### Gestion des médicaments

| Méthode | Route | Description |
|---|---|---|
| POST | /api/products/add | Ajouter un médicament |
| GET | /api/products | Afficher tous les médicaments |
| GET | /api/products/:id | Afficher un médicament |
| PUT | /api/products/:id | Modifier un médicament |
| DELETE | /api/products/:id | Supprimer un médicament |

**Remarque :** Les routes des médicaments sont protégées par JWT. Il faut envoyer le token dans l'en-tête :

`Authorization: Bearer <token>`

## 7. Validation et sécurité

- Vérification des champs obligatoires.
- Vérification du format de l'adresse email.
- Vérification de la longueur du mot de passe.
- Vérification de l'unicité de l'email.
- Cryptage du mot de passe avec bcrypt.
- Authentification avec JWT.
- Protection des routes avec un middleware.

## 8. Tests

Les tests des endpoints sont réalisés avec Postman.

Les fonctionnalités testées comprennent l'inscription, la connexion, la validation des données, l'authentification JWT et les opérations CRUD sur les médicaments.