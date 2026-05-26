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

  // ── PROJET 4 ──────────────────────────────────────────────
  {
    title: "NeonCity Builder",
    genre: "Simulation · Solo · Unity",
    year: "2022",
    desc: "City builder cyberpunk avec simulation économique et système de factions à réputation dynamique. Chaque décision urbaine impacte les relations entre 5 factions, créant des situations émergentes uniques. Projet personnel de R&D sur les systèmes complexes.",
    tags: ["Unity", "Simulation", "Economy Design", "Faction System", "Emergent Design"],
    image: null,
    emoji: "🏙️",
    bg: "linear-gradient(135deg, #1a1a00, #3d3d00, #7a7a00)",
    links: [
      { label: "itch.io ↗", href: "#" },
      { label: "Devlog ↗",  href: "#" }
    ]
  }

  // ── AJOUTE TES PROCHAINS PROJETS ICI ──────────────────────
  // N'oublie pas la virgule après le } du projet précédent !
  // Exemple :
  // ,{
  //   title: "Mon Nouveau Jeu",
  //   genre: "FPS · Équipe · Unreal",
  //   year: "2025",
  //   desc: "Description complète pour la modale...",
  //   tags: ["Unreal", "FPS", "Level Design"],
  //   image: "images/monjeU.png",  // ou null + emoji
  //   emoji: "🎯",
  //   bg: "linear-gradient(135deg, #1a0000, #3d0000, #7a0000)",
  //   links: [{ label: "itch.io ↗", href: "https://..." }]
  // }

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
