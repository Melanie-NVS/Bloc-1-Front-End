# Bloc 1 – Projet Front-End : Cuisine Collab

## Présentation du projet

Cuisine Collab est un site web statique de partage de recettes de cuisine réalisé dans le cadre du **Bloc 1 – Développement Front-End de sites et applications web**.

Le projet a été développé uniquement avec :
- HTML5
- SCSS/CSS3
- JavaScript (ES6+)

L'objectif est de créer une interface moderne, responsive et accessible permettant aux utilisateurs de naviguer parmi différentes recettes de cuisine.

Le site ne possède pas de base de données ni de back-end : toutes les fonctionnalités sont développées côté front-end.

---

# Fonctionnalités du site

## Accueil
- Présentation du site
- Affichage dynamique des recettes chargées via `fetch()` depuis un fichier JSON
- Navigation principale responsive

## Recherche
- Barre de recherche de recettes
- Filtrage par type de plat (accordéon interactif)
- Système de tri dynamique (Récent, Entrée, Plat, Dessert)
- Pagination dynamique

## Recette
- Affichage détaillé d'une recette (ingrédients, étapes, commentaires)
- Navigation rapide par ancres (`#etapes`, `#ingredients`, `#commentaires`)
- Données structurées Schema.org pour le référencement

## Favoris
- Ajout visuel de recettes en favoris avec une icône cœur (toggle)

## Connexion
- Formulaire de connexion avec validation HTML5

## Inscription
- Formulaire d'inscription avec validation HTML5

## Contact
- Formulaire de contact avec validation en temps réel (HTML5)
- Message de confirmation à l'envoi

## Accessibilité
- Police OpenDyslexic activable via un bouton "Aa" dans la navigation
- Navigation complète au clavier avec style `:focus-visible`
- `aria-label` sur tous les éléments interactifs (boutons icônes, liens, notes)
- `aria-hidden="true"` sur les icônes décoratives
- Balises sémantiques HTML5 (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`)

---

# Pages du projet

| Page | Description |
|---|---|
| `index.html` | Page d'accueil avec recettes et vidéos |
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
- Google Fonts (Inter, Poppins, Allura)
- OpenDyslexic (accessibilité)

## Outils
- Visual Studio Code
- Git & GitHub
- Live Server (extension VSCode)
- Node.js + npm (pour compiler le SCSS)

---

# SCSS – Installation et utilisation

## Qu'est-ce que SCSS ?

SCSS (Sassy CSS) est un **préprocesseur CSS** qui étend les possibilités du CSS classique en ajoutant :
- des **variables** (`$orange`, `$font1`…)
- des **règles imbriquées** (nesting)
- des **fichiers partiels** (découpage du code en plusieurs fichiers `_nomFichier.scss`)
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

## Structure SCSS du projet

```txt
styles/
│
├── _settings.scss          → Variables globales (couleurs, polices, accessibilité)
│
├── components/
│   ├── _button.scss        → Styles des boutons
│   └── _socials.scss       → Styles des réseaux sociaux
│
├── layout/
│   ├── _navBar.scss        → Styles de la navigation
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

> ⚠️ Ne jamais modifier `index.css` directement — ce fichier est généré automatiquement par la compilation SCSS.

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
| Police dyslexiques | OpenDyslexic activable via bouton "Aa" |
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

---

# Structure du projet

```txt
Bloc-1-Front-End/
│
├── assets/
│   ├── fonts/
│   │   └── OpenDyslexic-Regular.otf
│   └── img/
│       └── recettes/
│
├── Javascript/
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
│   │   ├── _carousel.scss
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

> ⚠️ Ne pas ouvrir `index.html` directement dans le navigateur (double-clic) — le `fetch()` ne fonctionnera pas sans serveur local.

---

# Auteur

Projet réalisé par **Mélanie NVS**
Formation Développeur Web & Web Mobile – Bloc 1 Front-End.
