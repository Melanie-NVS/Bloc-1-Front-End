//POUR LE TRI (RECENT, ENTREE, PLAT, DESSERT)
const btn = document.getElementById("btnTri");
const triLabel = document.getElementById("triLabel");
let menuOuvert = false;

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
      });

      menuOuvert = true;
    } else {
      const menu = document.querySelector(".menu");
      if (menu) menu.remove();
      menuOuvert = false;
    }
  });
}

//Ferme si on clique ailleurs
document.addEventListener("click", () => {
  const menu = document.querySelector(".menu"); // récupère le menu
  if (menu) {
    // s'il existe, on le supprime
    menu.remove(); // ferme le menu
    menuOuvert = false; // indique que le menu est fermé
  }
});
// -----------------------------------------------------

//POUR LA LISTE DE TYPE DE PLATS
const btnTypes = document.getElementById("btnTypes");
const listeTypes = document.getElementById("listeTypes");
const iconeToggle = document.getElementById("iconeToggle");

if (btnTypes) {
  btnTypes.addEventListener("click", () => {

  listeTypes.classList.toggle("open");

  if(listeTypes.classList.contains("open")){
    iconeToggle.classList.remove("fa-plus");
    iconeToggle.classList.add("fa-minus");
  } else {
    iconeToggle.classList.remove("fa-minus");
    iconeToggle.classList.add("fa-plus");
  }

});
}
//-------------------------------------------------------

//LISTE LI ACTIVE EN ORANGE
const boutons = document.querySelectorAll("#listeTypes button");

boutons.forEach((bouton) => {
  bouton.addEventListener("click", () => {
    // 1️⃣ on enlève active à tous
    boutons.forEach((b) => b.classList.remove("active"));

    // 2️⃣ on ajoute active au bouton cliqué
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
  navLeft.classList.toggle('open');   // ← important
  navRight.classList.toggle('open');  // ← important
});

// Fermer au clic sur un lien
[navLeft, navRight].forEach(ul => {
  ul.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLeft.classList.remove('open');
      navRight.classList.remove('open');
    });
  });
});