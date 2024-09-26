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

## 🛠️ Installation Steps:

### 1. Initialisation de la base de données + seeding

Sur votre logiciel de gestion de base de données exécuter successivement les requêtes contenues dans les fichiers :
- db.creation.sql
- animal_creation.sql
- person_fulfil.sql
- animal_fulfil.sql

### 2. Configurer les variables d'environnements

Créer votre fichier .env dans à la source de votre dossier 'tkorp_test_back', sous cette forme :
HOST=<br>
PORT_DB=<br>
USERNAME_DB=<br>
PASSWORD=<br>
DB_NAME=<br>
PORT_SERVER=

### 3. Lancer les serveurs

#### Backend (NestJS)
  Sur le terminal, placez-vous dans le dossier 'tkorp_test_back' et lancez :
```
npm run start
```

#### Frontend (NextJS)
  Sur le terminal, placez-vous dans le dossier 'tkorp_test_front' et lancez :
```
npm run dev
```

### 4. Accéder à l'application

Accédez à l'application via `http://localhost:8000`.
  
## 💻 Built with

Technologies used in the project:

*   NestJS
*   TypeORM
*   NextJS


## Réponses aux questions :
○ Quel animal est le plus vieux ?
Rocky, le lapin (21/09/2009)

○ Quelle espèce est la mieux représentée ? (Le plus d’entité de cette espèce)
179 oiseaux

○ Quelle personne possède le plus d’animaux ?
Ex aequo Michael Taylor (id: 208), Sarah White (268) et Sophia Brown (18)

○ Quelle personne possède le plus de chats ?
Sarah White

○ Qui possède l’animal le plus lourd ? Comment s’appelle cet animal et quel est
son poids ?
Emma Smith (209) avec un chien (Chloe) pesant 49937g

○ Qui possède le groupe d’animaux le plus lourd ? Quel est le poids total de ce
groupe d’animaux ?
Sophia Brown avec un groupe pesant 172152g
