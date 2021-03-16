# SimpleApp

Le projet a été généré avec [Angular CLI](https://github.com/angular/angular-cli) version 11.1.4.
Ce projet m'a permis d'appréhender les bases d'Angular autour d'une application, simple, de gestion d'articles.

Afin d'y parvenir j'ai suivi le [cours](https://slides.com/orangefire/deck-1-3-5) de Tony Amirault : [https://slides.com/orangefire/deck-1-3-5](https://slides.com/orangefire/deck-1-3-5)

## Informations

Un fichier docker-compose vous permet de pouvoir faire tourner le logiciel dans un environnement de développement sécurisé.

### Aide

Pour mener à bien ce projet j'ai bénéficier des conseils avisés de `Tony Lim`

## Pré-requis

Docker

## Installation

* Téléchargement du dossier git
```bash
$ cd chemin/projet/simple-app/
$ docker-compose build
```

* Lancement des conteneurs
```bash
$ docker-compose up -d front
$ docker-compose up -d db
```

* /!\ ATTENDRE quelques secondes, le temps que les services se lancent 

* Lancement de l'application (dans un navigateur)
`
http://localhost:4200/
`

## Utilisation

* [Lecture des articles](#lecture-des-articles)
* [Lecture d'un article](#lecture-dun-article)
* [Création d'un article](#création-dun-article)

### Lecture des articles

```
http://localhost:4200/articles
```

A travers cette page il est possible de voir les articles publiés ainsi que d'accéder au site de l'auteur en cliquant dessus.
Cette page possède un formulaire pour créer un nouvel article.
Un bouton de suppression est positionné dans chaque article afin de le supprimer de la base. L'événement est déclenché depuis la page de l'article vers cette page de liste qui va s'occuper de supprimer l'article au travers d'un service.
En cliquant sur le titre d'un article nous sommes redirigé vers une page dédiée à l'article. L'événement est déclenché depuis la page de création d'article vers cette page de liste qui va s'occuper d'ajouter l'article au travers d'un service.

### Lecture d'un article

```
http://localhost:4200/article/{id}
```

Cette page est dédiée à l'article dont l'id est passé en paramètre dans l'url.
Un bouton de suppression est positionné dans l'article afin de le supprimer de la base. Une fois l'article supprimé l'utilisateur est redirigé vers la liste des articles.

### Création d'un article

```
http://localhost:4200/article/create
```

Cette page permet de créer un nouvel article. Une fois l'article créé l'utilisateur est redirigé vers la page de l'article.