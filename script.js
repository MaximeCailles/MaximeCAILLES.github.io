/* ============================================================
   script.js — Portfolio Game Designer
   ============================================================

   💡 AJOUTER UN NOUVEAU PROJET :
   ─────────────────────────────
   1. Copie un bloc { ... } dans le tableau `projects` ci-dessous
   2. Remplis tous les champs
   3. Dans index.html, copie une <div class="card"> et change
      le numéro dans onclick="openModal(X)" pour qu'il corresponde
      à la position de ton projet dans ce tableau (commence à 0)
   C'est tout !

   ============================================================ */

const projects = [

  // ── Figdrasil
  {
    title: "Figdrasil",
    genre: "Duel tactique - Jeu de société",
    year: "2025",
    desc: "Jeu de sociéte pour deux joueurs. Incarnez des héros fruités pour prendre le controle de champs de bataille. Chaque héro possède ses propres pouvoirs, ses stratégies et ses forces.",
    tags:  ["Jeu de société","Character Design","Game Design","Prototypage","Equilibrage"],
    image: "files/figdrasil-logo.png",
    bg: "linear-gradient(135deg, #1a1a00, #3d3d00, #7a7a00)",
    links: [
      { label: "Prototype en ligne", href: "https://screentop.gg/@Benderking/Figdrasil" },
    ]
  },

  {
  title: "Toys R Me",
    genre: "Casse-tête - Die & Retry",
    year: "2026",
    desc: "Controlez Luc, le fils de Lucifer en personne, à la recherche de son doudou pour s'endormir. Transférez votre âme de jouent en jouet aux différents pouvoirs pour attendre votre objectif.",
    tags:  ["Game Jam","Game Design","UI Design","Programmation"],
    image: "files/ToysRMe.png",
    bg: "linear-gradient(135deg, #1a1a00, #3d3d00, #7a7a00)",
    links: [
      { label: "Lien Itch.io", href: "https://maxcailles.itch.io/toysrme" },
    ]
  }




];

/* ============================================================
   MODAL — ouverture / fermeture
   (tu n'as pas besoin de modifier cette partie)
   ============================================================ */

function openModal(index) {
  const p = projects[index];
  if (!p) return;

  document.getElementById('modalGenre').textContent = p.genre;
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalDesc').textContent  = p.desc;

  // Image ou placeholder emoji
  const imgContainer = document.getElementById('modalImgContainer');
  if (p.image) {
    imgContainer.innerHTML = `<img class="modal-img" src="${p.image}" alt="${p.title}">`;
  } else {
    imgContainer.innerHTML = `<div class="modal-img-placeholder" style="background:${p.bg}">${p.emoji}</div>`;
  }

  // Tags
  document.getElementById('modalTags').innerHTML =
    p.tags.map(t => `<span class="tag">${t}</span>`).join('');

  // Liens
  document.getElementById('modalLinks').innerHTML =
    p.links.map(l => `<a href="${l.href}" class="btn btn-ghost" target="_blank">${l.label}</a>`).join('');

  document.getElementById('modalBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e.target === document.getElementById('modalBackdrop')) {
    _closeModal();
  }
}

function closeModalBtn() {
  _closeModal();
}

function _closeModal() {
  document.getElementById('modalBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

// Fermeture avec la touche Échap
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') _closeModal();
});

/* ============================================================
   CURSEUR PERSONNALISÉ
   ============================================================ */
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
  // Léger délai pour l'anneau
  setTimeout(() => {
    cursorRing.style.left = e.clientX + 'px';
    cursorRing.style.top  = e.clientY + 'px';
  }, 80);
});

/* ============================================================
   RÉVÉLATION AU SCROLL
   ============================================================ */
const reveals  = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));
