
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
git clone https://github.com/arwasaadi56-rgb/gestion-pharmacie-api.git
```

Accéder au dossier :

```bash
cd gestion-pharmacie-api
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

| Méthode | Route | Description | Accès |
|---|---|---|---|
| POST | `/api/users/register` | Inscription | Public |
| POST | `/api/users/login` | Connexion | Public |

### Gestion des médicaments

| Méthode | Route | Description | Accès |
|---|---|---|---|
| POST | `/api/products/add` | Ajouter un médicament | Protégé |
| GET | `/api/products` | Afficher tous les médicaments | Public |
| GET | `/api/products/:id` | Afficher un médicament par ID | Public |
| PUT | `/api/products/:id` | Modifier un médicament | Protégé |
| DELETE | `/api/products/:id` | Supprimer un médicament | Protégé |

### Authentification des routes protégées

Pour accéder aux routes protégées, il faut envoyer le token JWT dans l'en-tête HTTP :

```http
Authorization: Bearer <token>
```

## 7. Validation et sécurité

- Vérification des champs obligatoires.
- Vérification du format de l'adresse email.
- Vérification de la longueur minimale du mot de passe.
- Vérification de l'unicité de l'email.
- Cryptage du mot de passe avec bcrypt.
- Authentification avec JWT.
- Vérification du token avec un middleware.
- Vérification de la validité de l'identifiant du médicament.
- Protection des routes sensibles.

## 8. Tests

Les tests des endpoints sont réalisés avec Postman.

Les fonctionnalités testées comprennent :

- Inscription d'un utilisateur.
- Refus d'une adresse email déjà utilisée.
- Connexion avec des informations valides et invalides.
- Accès avec un token valide.
- Refus d'un token manquant ou invalide.
- Ajout, affichage, modification et suppression des médicaments.
- Gestion des identifiants invalides et des médicaments introuvables.

## 9. Conclusion

Ce projet nous a permis de mettre en pratique le développement d'une API REST avec Node.js, Express.js et MongoDB, ainsi que la gestion des utilisateurs, des médicaments et la sécurisation des routes avec JWT.
