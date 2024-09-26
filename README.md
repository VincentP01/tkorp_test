<h1 align="center" id="title">Owners and Pets</h1>

# Owners and Pets

## Description
Projet Fullstack de création d'une API et d'une interface affichant les données de celle-ci.

## Structure du Projet
```
├───tkorp_test_back
│   ├───dist
│   │   ├───animal
│   │   └───person
│   └───src
│       ├───animal
│       └───person
└───tkorp_test_front
    ├───app
    │   ├───animals
    │   │   └───[id]
    │   ├───fonts
    │   └───owners
    │       └───[id]
    └───components
```

<h2>🛠️ Installation Steps:</h2>

<p>1. Initialisation de la base de données + seeding</p>

Sur votre logiciel de gestion de base de données exécuter successivement les requêtes contenues dans les fichiers :
- db.creation.sql
- animal_creation.sql
- person_fulfil.sql
- animal_fulfil.sql

<p>2. Configurer les variables d'environnements</p>

Créer votre fichier .env dans à la source de votre dossier 'tkorp_test_back', sous cette forme :
HOST=
PORT_DB=
USERNAME_DB=
PASSWORD=
DB_NAME=
PORT_SERVER=

<p>3. Lancer les serveurs</p>

- NestJS
  Sur le terminal, placez-vous dans le dossier 'tkorp_test_back' et lancez :
```
npm run start
```

- NextJS
  Sur le terminal, placez-vous dans le dossier 'tkorp_test_front' et lancez :
```
npm run dev
```

<p>4. Accéder à l'application</p>

Accédez à l'application via `http://localhost:8000`.
  
<h2>💻 Built with</h2>

Technologies used in the project:

*   NestJS
*   TypeORM
*   NextJS
