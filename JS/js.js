/* =====================================================
   GLOBAL JAVASCRIPT – ANVI COMPUTER
   Handles:
   - WhatsApp
   - Search
   - Home Cards (Forms / Services / Products)
   - Menu Filtering
   - Card Flip (Mobile)
===================================================== */

"use strict";

/* ================= WHATSAPP ================= */

const WHATSAPP = "917007159332";

function openWhatsApp(msg = "Hello, I need help.") {
  const url =
    "https://wa.me/" +
    WHATSAPP +
    "?text=" +
    encodeURIComponent(msg);
  window.open(url, "_blank");
}

/* ================= SEARCH ================= */
/* Works on index.html only */

function searchItems() {
  const input = document.getElementById("search");
  const cards = document.querySelectorAll("#autoCards .card");

  if (!input || !cards.length) return;

  const q = input.value.toLowerCase();

  cards.forEach(card => {
    const txt = card.innerText.toLowerCase();
    card.style.display = txt.includes(q) ? "flex" : "none";
  });
}

/* ================= HOME CARD CREATOR ================= */

function createHomeCard(item, type) {
  return `
    <div class="card ${type}">
      <div class="card-icon">${item.icon || "📦"}</div>
      <h3>${item.title}</h3>

      ${item.price ? `<p><b>₹ ${item.price}</b></p>` : ""}

      <a href="${item.link}" class="card-btn">View</a>
    </div>
  `;
}

/* ================= LOAD & FILTER HOME CARDS ================= */

function loadHomeCards(filter = "all") {
  const box = document.getElementById("autoCards");
  if (!box) return;

  let html = "";

  /* ---------- FORMS ---------- */
  if ((filter === "all" || filter === "forms") && typeof formsList !== "undefined") {
    formsList.forEach(item => {
      html += createHomeCard(item, "forms");
    });
  }

  /* ---------- SERVICES ---------- */
  if ((filter === "all" || filter === "services") && typeof servicesList !== "undefined") {
    servicesList.forEach(item => {
      html += createHomeCard(item, "services");
    });
  }

  /* ---------- PRODUCTS / SHOP ---------- */
  if ((filter === "all" || filter === "products") && typeof productsList !== "undefined") {
    productsList.forEach(item => {
      html += createHomeCard(item, "products");
    });
  }

  /* ---------- EMPTY STATE ---------- */
  box.innerHTML = html || `
    <div class="card">
      <h3>No items found</h3>
      <p>Please try another filter.</p>
    </div>
  `;
}


/* ================= PAGE FADE-IN EFFECT ================= */

window.addEventListener("load", () => {
  const main = document.querySelector("main.content");
  if (!main) return;

  main.style.opacity = "0";
  main.style.transform = "translateY(15px)";

  setTimeout(() => {
    main.style.transition = "0.6s";
    main.style.opacity = "1";
    main.style.transform = "translateY(0)";
  }, 50);
});

/* ================= CARD FLIP (MOBILE SUPPORT) ================= */

document.addEventListener("click", e => {
  const card = e.target.closest(".card-flip");
  if (!card) return;
  card.classList.toggle("active");
});

function changeImage(el){
  const main = document.getElementById("mainProductImage");
  if(main) main.src = el.src;
}
/* ================= APPLY FILTER FROM URL ================= */

function applyFilterFromURL() {
  const params = new URLSearchParams(window.location.search);
  const filter = params.get("filter");

  if (filter) {
    loadHomeCards(filter);
  } else {
    loadHomeCards("all");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  applyFilterFromURL();
});
/* ================= THUMB ARROW SLIDER ================= */

let thumbIndex = 0;

function scrollThumbs(direction){
  const track = document.getElementById("thumbTrack");
  if (!track) return;

  const thumbs = track.children.length;
  const visible = 4;         // number of visible thumbs
  const thumbHeight = 80;    // image + gap

  const maxIndex = thumbs - visible;

  thumbIndex += direction;

  if (thumbIndex < 0) thumbIndex = 0;
  if (thumbIndex > maxIndex) thumbIndex = maxIndex;

  track.style.transform = `translateY(-${thumbIndex * thumbHeight}px)`;
}

/* Main image switch */
function changeImage(el){
  const main = document.getElementById("mainProductImage");
  if(main) main.src = el.src;
}
/* ================= MOBILE HAMBURGER MENU ================= */

function toggleMenu(){
  const nav = document.getElementById("mainNav");
  if(!nav) return;
  nav.classList.toggle("open");
}
