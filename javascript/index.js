//POUR LE TRI (RECENT, ENTREE, PLAT, DESSERT)
const btn = document.getElementById("btnTri");
const triLabel = document.getElementById("triLabel");
let menuOuvert = false;
let appliquerFiltreTri = null;

if (btn && triLabel) {
  btn.addEventListener("click", (event) => {
    event.stopPropagation();
    const triDiv = btn.parentElement;

    if (!menuOuvert) {
      const menu = document.createElement("ul");
      menu.classList.add("menu");
      menu.innerHTML = `
        <li data-value="recent">Récent</li>
        <li data-value="entree">Entrée</li>
        <li data-value="plat">Plat</li>
        <li data-value="dessert">Dessert</li>
      `;
      triDiv.appendChild(menu);
      menu.addEventListener("click", (e) => {
        e.stopPropagation();
        const valeur = e.target.dataset.value;
        if (!valeur) return;
        triLabel.textContent = e.target.textContent;
        menu.remove();
        menuOuvert = false;
        if (appliquerFiltreTri) {
          appliquerFiltreTri(valeur);
        }
      });
      menuOuvert = true;
    } else {
      const menu = document.querySelector(".menu");
      if (menu) menu.remove();
      menuOuvert = false;
    }
  });
}

document.addEventListener("click", () => {
  const menu = document.querySelector(".menu");
  if (menu) {
    menu.remove();
    menuOuvert = false;
  }
});

// -----------------------------------------------------
// LISTE DE TYPE DE PLATS
const btnTypes = document.getElementById("btnTypes");
const listeTypes = document.getElementById("listeTypes");
const iconeToggle = document.getElementById("iconeToggle");

if (btnTypes) {
  btnTypes.addEventListener("click", () => {
    listeTypes.classList.toggle("open");
    if (listeTypes.classList.contains("open")) {
      iconeToggle.classList.remove("fa-plus");
      iconeToggle.classList.add("fa-minus");
    } else {
      iconeToggle.classList.remove("fa-minus");
      iconeToggle.classList.add("fa-plus");
    }
  });
}

// LISTE LI ACTIVE EN ORANGE
const boutons = document.querySelectorAll("#listeTypes button");
boutons.forEach((bouton) => {
  bouton.addEventListener("click", () => {
    boutons.forEach((b) => b.classList.remove("active"));
    bouton.classList.add("active");
  });
});

// -------------------------------------------------------
// Formulaire de contact
const form = document.getElementById("contact-form");
const confirmation = document.getElementById("confirmationMessage");

if (form && confirmation) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    confirmation.textContent = "Message envoyé !";
    form.reset();
  });
}

// -------------------------------------------------------
// Menu hamburger
const hamburger = document.querySelector('.hamburger');
const navLeft = document.querySelector('.nav-left');
const navRight = document.querySelector('.nav-right');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLeft.classList.toggle('open');
  navRight.classList.toggle('open');
});

[navLeft, navRight].forEach(ul => {
  ul.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLeft.classList.remove('open');
      navRight.classList.remove('open');
    });
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('nav')) {
    hamburger.classList.remove('open');
    navLeft.classList.remove('open');
    navRight.classList.remove('open');
  }
});

// -------------------------------------------------------
// Bouton dyslexie
const btnDyslexie = document.getElementById('btn-dyslexie');
if (btnDyslexie) {
  btnDyslexie.addEventListener('click', () => {
    document.body.classList.toggle('dyslexic');
    btnDyslexie.classList.toggle('active');
  });
}

// -------------------------------------------------------
// Chargement des recettes via fetch
const estDansSousPage = window.location.pathname.includes('pages_html');
const chemin = estDansSousPage ? '../recettes.json' : './recettes.json';
const prefixeImage = estDansSousPage ? '../' : './';
const recettesParPage = estDansSousPage ? 12 : 9;

const grille = document.querySelector('.grille');

if (grille) {
  fetch(chemin)
    .then(response => response.json())
    .then(recettes => {

      // Lire la page depuis l'URL au chargement
      const params = new URLSearchParams(window.location.search);
      let pageCourante = params.get('page') ? parseInt(params.get('page')) : 1;
      let recettesFiltrees = recettes;

      // -------------------------------------------------------
      // Crée une carte recette
      function creerCarte(recette) {
        const carte = document.createElement('article');
        carte.classList.add('carte-recette');
        carte.dataset.categorie = recette.categorie;

        carte.innerHTML = `
          <div class="image-box">
            <a href="${estDansSousPage ? './recipe.html' : './pages_html/recipe.html'}">
              <img src="${prefixeImage}${recette.image}" alt="${recette.titre}" loading="lazy">
            </a>
            <button class="coeur" aria-label="Ajouter aux favoris">
              <i class="fa-solid fa-heart"></i>
            </button>
          </div>
          <div class="contenu">
            <h3>${recette.titre}</h3>
            <div class="infos">
              <div class="note" aria-label="Note : ${recette.note} sur 5">
                <i class="fa-regular fa-star" aria-hidden="true"></i>
                <span>${recette.note} (${recette.votes})</span>
              </div>
              <span class="auteur">par ${recette.auteur}</span>
            </div>
          </div>
        `;

        return carte;
      }

      // -------------------------------------------------------
      // Affiche les recettes de la page courante
      function afficherPage(scroll = false) {
        grille.innerHTML = '';
        const debut = (pageCourante - 1) * recettesParPage;
        const fin = debut + recettesParPage;

        recettesFiltrees.slice(debut, fin).forEach(recette => {
          grille.appendChild(creerCarte(recette));
        });

        mettreAJourPagination();

        // Mettre à jour l'URL avec le numéro de page
        const newUrl = `${window.location.pathname}?page=${pageCourante}`;
        history.pushState(null, '', newUrl);

        // Scroll uniquement si demandé
        if (scroll) {
          const offsetTop = grille.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }

      // -------------------------------------------------------
      // Met à jour la pagination
      function mettreAJourPagination() {
        const pagesNumbers = document.getElementById('pagesNumbers');
        const prev = document.getElementById('prev');
        const next = document.getElementById('next');

        if (!pagesNumbers) return;

        const totalPages = Math.ceil(recettesFiltrees.length / recettesParPage);
        pagesNumbers.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
          const btnPage = document.createElement('button');
          btnPage.type = 'button';
          btnPage.classList.add('page');
          btnPage.textContent = i;
          if (i === pageCourante) btnPage.classList.add('active');

          btnPage.addEventListener('click', (e) => {
            e.preventDefault();
            pageCourante = i;
            afficherPage(true); // scroll au clic
          });

          pagesNumbers.appendChild(btnPage);
        }

        if (prev) {
          prev.disabled = pageCourante === 1;
          prev.onclick = (e) => {
            e.preventDefault();
            if (pageCourante > 1) {
              pageCourante--;
              afficherPage(true); // scroll au clic
            }
          };
        }

        if (next) {
          next.disabled = pageCourante === totalPages;
          next.onclick = (e) => {
            e.preventDefault();
            if (pageCourante < totalPages) {
              pageCourante++;
              afficherPage(true); // scroll au clic
            }
          };
        }
      }

      // -------------------------------------------------------
      // Applique un filtre
      function appliquerFiltre(liste) {
        recettesFiltrees = liste;
        pageCourante = 1;
        afficherPage(); // pas de scroll au filtre
      }

      // -------------------------------------------------------
      // Gérer le bouton retour du navigateur
      window.addEventListener('popstate', () => {
        const p = new URLSearchParams(window.location.search);
        pageCourante = p.get('page') ? parseInt(p.get('page')) : 1;
        afficherPage();
      });

      // -------------------------------------------------------
      // Affichage initial — pas de scroll
      afficherPage();

      // -------------------------------------------------------
      // Connecte le tri au fetch
      appliquerFiltreTri = (valeur) => {
        if (valeur === 'recent') {
          appliquerFiltre(recettes);
        } else {
          const filtrees = recettes.filter(r => r.categorie === valeur);
          appliquerFiltre(filtrees);
        }
      };

      // -------------------------------------------------------
      // Filtre par recherche
      const inputRecherche = document.querySelector('.input-search input');
      if (inputRecherche) {
        inputRecherche.addEventListener('input', () => {
          const valeur = inputRecherche.value.toLowerCase().trim();
          const filtrees = recettes.filter(r =>
            r.titre.toLowerCase().includes(valeur)
          );
          appliquerFiltre(filtrees);
        });
      }

      // -------------------------------------------------------
      // Filtre par catégorie
      const boutonsFiltres = document.querySelectorAll('#listeTypes button');
      if (boutonsFiltres.length > 0) {
        boutonsFiltres.forEach(bouton => {
          bouton.addEventListener('click', () => {
            const categorie = bouton.textContent.toLowerCase().trim();
            const filtrees = categorie === 'tous'
              ? recettes
              : recettes.filter(r => r.categorie === categorie);
            appliquerFiltre(filtrees);
          });
        });
      }

    })
    .catch(error => {
      console.error('Erreur lors du chargement des recettes :', error);
    });
}