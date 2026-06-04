# Bloc 1 – Projet Front-End : Cuisine Collab

## Présentation du projet

Cuisine Collab est un site web de partage de recettes de cuisine réalisé dans le cadre du **Bloc 1 – Développement Front-End de sites et applications web**.

Le projet a été développé uniquement avec :
- HTML5
- SCSS/CSS3
- JavaScript (ES6+)

L'objectif est de créer une interface moderne, responsive et accessible permettant aux utilisateurs de naviguer parmi différentes recettes de cuisine.

Le site ne possède pas de base de données ni de back-end : toutes les fonctionnalités sont développées côté front-end.

---

# Fonctionnalités du site

## Accueil
- Présentation du site avec image d'en-tête
- Affichage dynamique des recettes chargées via `fetch()` depuis un fichier JSON (96 recettes)
- Pagination dynamique avec mémorisation de la page dans l'URL (`?page=`)
- Gestion du bouton retour navigateur (`popstate`)
- Filtrage des recettes par catégorie (`data-categorie`)
- Filtrage par type de plat via accordéon interactif
- Système de tri dynamique (Récent, Entrée, Plat, Dessert)
- Barre de recherche en temps réel par titre de recette
- Section vidéos
- Formulaire d'abonnement newsletter
- Navigation principale responsive avec menu hamburger

## Page Recherche
- Affichage de 12 recettes par page avec pagination dynamique
- Filtrage par catégorie, type de plat et recherche combinables
- Tri dynamique des résultats

## Page Recette
- Affichage détaillé d'une recette (image, description, ingrédients, étapes, commentaires)
- Navigation rapide par ancres (`#etapes`, `#ingredients`, `#commentaires`)
- Données structurées Schema.org (`Recipe`) pour le référencement Google
- Section "Autres recettes que vous aimerez"

## Favoris
- Ajout visuel de recettes en favoris avec une icône cœur (toggle plein/vide)

## Connexion & Inscription
- Formulaires avec validation HTML5
- Champs `type="email"` et attributs `required` et `minlength`

## Contact
- Formulaire de contact avec validation HTML5
- Message de confirmation à l'envoi

## Accessibilité
- Police OpenDyslexic activable via un bouton "Aa" dans la navigation (toggle avec état visuel actif)
- Navigation complète au clavier avec style `:focus-visible` sur tous les éléments interactifs
- `aria-label` sur tous les éléments interactifs (boutons icônes, liens réseaux sociaux, notes)
- `aria-hidden="true"` sur les icônes décoratives (Font Awesome)
- Balises sémantiques HTML5 (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`)
- Informations importantes non transmises uniquement par la couleur

---

# Pages du projet

| Page | Description |
|---|---|
| `index.html` | Page d'accueil avec recettes, vidéos et abonnement |
| `search.html` | Recherche et filtrage de recettes |
| `recipe.html` | Détail complet d'une recette |
| `signIn.html` | Connexion utilisateur |
| `signUp.html` | Inscription utilisateur |
| `contact.html` | Formulaire de contact |

---

# Technologies utilisées

## Front-End
- HTML5
- CSS3
- SCSS (préprocesseur CSS)
- JavaScript ES6+

## Librairies
- Font Awesome 7 (icônes)
- Google Fonts : Inter, Poppins, Allura (hébergées en local en WOFF2)
- OpenDyslexic (accessibilité dyslexie)

## Outils
- Visual Studio Code
- Git & GitHub
- Live Server (extension VSCode)
- Node.js + npm (compilation SCSS)

---

# SCSS – Installation et utilisation

## Qu'est-ce que SCSS ?

SCSS (Sassy CSS) est un **préprocesseur CSS** qui étend les possibilités du CSS classique en ajoutant :
- des **variables** (`$orange`, `$font1`, `$font2`…)
- des **règles imbriquées** (nesting)
- des **fichiers partiels** (découpage en plusieurs fichiers `_nomFichier.scss`)
- des **mixins** et fonctions réutilisables

Le navigateur ne comprend pas le SCSS directement — il faut le **compiler en CSS**.

## Prérequis

Avoir **Node.js** installé sur votre machine.
Vérifier avec :

```bash
node -v
npm -v
```

Si ce n'est pas installé, téléchargez Node.js sur [https://nodejs.org](https://nodejs.org)

## Installation de Sass

Dans le terminal, à la racine du projet :

```bash
npm install -g sass
```

Vérifier l'installation :

```bash
sass --version
```

## Compiler le SCSS manuellement

```bash
sass styles/index.scss styles/index.css
```

## Compiler automatiquement (mode watch)

Ce mode surveille les fichiers SCSS et recompile automatiquement à chaque modification :

```bash
sass --watch styles/index.scss styles/index.css
```

Laisser ce terminal ouvert pendant le développement.

> ⚠️ Ne jamais modifier `index.css` directement — ce fichier est généré automatiquement par la compilation SCSS.

## Structure SCSS du projet

```txt
styles/
│
├── _settings.scss          → Variables globales (couleurs, polices, focus, dyslexie)
│
├── components/
│   ├── _button.scss        → Styles des boutons
│   └── _socials.scss       → Styles des réseaux sociaux
│
├── layout/
│   ├── _navBar.scss        → Styles de la navigation + menu hamburger
│   └── _footer.scss        → Styles du footer
│
├── pages_scss/
│   ├── _home.scss          → Styles de la page d'accueil
│   ├── _recipe.scss        → Styles de la page recette
│   ├── _search.scss        → Styles de la page recherche
│   ├── _contact.scss       → Styles de la page contact
│   ├── _signIn.scss        → Styles de la page connexion
│   └── _signUp.scss        → Styles de la page inscription
│
├── index.scss              → Fichier principal qui importe tous les partiels
└── index.css               → Fichier compilé (ne pas modifier directement)
```

---

# Responsive Design

Le site s'adapte à tous les écrans grâce aux media queries :

| Breakpoint | Appareils ciblés |
|---|---|
| ≤ 480px | Mobile |
| ≤ 768px | Petite tablette |
| ≤ 1024px | Tablette |
| > 1024px | Desktop |

Un menu hamburger est intégré pour les écrans mobiles (≤ 744px).

---

# Accessibilité (RGAA / WCAG)

| Critère | Implémentation |
|---|---|
| Balises sémantiques | `header`, `nav`, `main`, `section`, `article`, `aside`, `footer` |
| Textes alternatifs | Attributs `alt` sur toutes les images |
| Police dyslexiques | OpenDyslexic activable via bouton "Aa" (toggle avec état actif en orange) |
| Navigation clavier | Style `:focus-visible` sur tous les éléments interactifs |
| Lecteurs d'écran | `aria-label` sur boutons icônes, `aria-hidden` sur icônes décoratives |
| Contraste des couleurs | Textes lisibles sur tous les fonds |
| Infos non transmises uniquement par couleur | Messages textuels accompagnent les indicateurs visuels |

---

# SEO – Référencement naturel

| Critère | Implémentation |
|---|---|
| Balises `<title>` | Uniques et descriptives sur chaque page |
| Balises `<meta description>` | Présentes sur chaque page |
| Balises canoniques | `<link rel="canonical">` sur chaque page |
| Hiérarchie des titres | `h1` → `h2` → `h3` respectée |
| Attributs `alt` | Présents sur toutes les images |
| Schema.org | Données structurées `Recipe` sur `recipe.html` |
| Favicon | Intégré sur toutes les pages |
| Ancres intra-page | `#etapes`, `#ingredients`, `#commentaires` sur `recipe.html` |
| Balises sémantiques | `article`, `aside`, `nav`, `section` |
| Navigation entre pages | Liens fonctionnels sur toutes les pages |
| Optimisation performances | Images WebP compressées, polices WOFF2, preload Font Awesome |

---

# Tests effectués

| Test | Outil |
|---|---|
| Validation HTML | Validateur W3C |
| Validation CSS | Validateur W3C CSS |
| Performance & accessibilité | Google Lighthouse |
| Responsive design | Chrome DevTools |
| Navigation clavier | Test manuel (Tab, Entrée, Espace) |
| Compatibilité navigateurs | Chrome, Firefox, Edge |
| Police OpenDyslexic | Test manuel bouton "Aa" |
| Fetch JSON | Test avec Live Server |
| Filtres et pagination | Test manuel sur toutes les catégories |

---

# Structure du projet

```txt
Bloc-1-Front-End/
│
├── assets/
│   ├── fonts/
│   │   ├── Allura-Regular.woff2
│   │   ├── Inter_18pt-Regular.woff2
│   │   ├── OpenDyslexic-Regular.woff2
│   │   └── Poppins-Regular.woff2
│   └── img/
│       ├── buffetcrush.webp
│       ├── femme.webp
│       ├── homme.webp
│       ├── woman.webp
│       └── recettes/         → 96 images de recettes
│
├── javascript/
│   └── index.js
│
├── pages_html/
│   ├── contact.html
│   ├── recipe.html
│   ├── search.html
│   ├── signIn.html
│   └── signUp.html
│
├── styles/
│   ├── components/
│   │   ├── _button.scss
│   │   └── _socials.scss
│   ├── layout/
│   │   ├── _navBar.scss
│   │   └── _footer.scss
│   ├── pages_scss/
│   │   ├── _home.scss
│   │   ├── _recipe.scss
│   │   ├── _search.scss
│   │   ├── _contact.scss
│   │   ├── _signIn.scss
│   │   └── _signUp.scss
│   ├── _settings.scss
│   ├── index.scss
│   └── index.css
│
├── recettes.json
├── favicon.ico
├── index.html
└── README.md
```

---

# Installation et lancement du projet

## 1. Cloner le dépôt

```bash
git clone https://github.com/Melanie-NVS/Bloc-1-Front-End.git
cd Bloc-1-Front-End
```

## 2. Installer Sass (si pas déjà installé)

```bash
npm install -g sass
```

## 3. Compiler le SCSS en mode watch

```bash
sass --watch styles/index.scss styles/index.css
```

## 4. Lancer le projet

Utiliser l'extension **Live Server** sur Visual Studio Code :
- Clic droit sur `index.html`
- Sélectionner **Open with Live Server**

> ⚠️ Ne pas ouvrir `index.html` directement dans le navigateur (double-clic) — le `fetch()` ne fonctionnera pas sans serveur local. L'URL doit commencer par `http://127.0.0.1` et non `file://`.

---

# Auteur

Projet réalisé par **Mélanie NVS**
Formation Développeur Web & Web Mobile – Bloc 1 Front-End.
