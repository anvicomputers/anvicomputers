/* =====================================================
   GLOBAL JAVASCRIPT – ANVI COMPUTER
   Handles:
   - WhatsApp
   - Search
   - Home Cards (Forms / Services / Products)
   - Menu Filtering
   - URL Filter Apply
   - Card Flip (Mobile)
   - Product Gallery
   - Hamburger Menu
   - Active Menu Highlight
   - Header Scroll Effects
===================================================== */

"use strict";

/* =====================================================
   WHATSAPP (GLOBAL – ONE PLACE CONTROL)
===================================================== */

const WHATSAPP = "918881666559";

function openWhatsApp(msg = "Hello, I need help.") {
  const url =
    "https://wa.me/" +
    WHATSAPP +
    "?text=" +
    encodeURIComponent(msg);
  window.open(url, "_blank");
}

/* =====================================================
   SEARCH (INDEX PAGE ONLY)
===================================================== */

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

/* =====================================================
   ICON RENDER ENGINE (EMOJI / IMAGE / TEXT)
===================================================== */

function renderIcon(item) {

  /* IMAGE ICON */
  if (item.iconType === "image" && item.icon) {
    return `
      <img
        src="${item.icon}"
        alt="${item.alt || item.title}"
        loading="lazy"
        style="width:48px;height:48px;object-fit:contain;"
      >
    `;
  }

  /* TEXT ICON */
  if (item.iconType === "text") {
    return `<span class="text-icon">${item.icon}</span>`;
  }

  /* DEFAULT → EMOJI */
  return item.icon || "📄";
}

/* =====================================================
   HOME CARD CREATOR
===================================================== */

function createHomeCard(item, type) {
  return `
    <div class="card ${type}">
      <div class="card-icon">
        ${renderIcon(item)}
      </div>
      <h3>${item.title}</h3>

      ${item.price ? `<p><b>₹ ${item.price}</b></p>` : ""}

      <a href="${item.link}" class="card-btn">View</a>
    </div>
  `;
}

/* =====================================================
   LOAD & FILTER HOME CARDS
===================================================== */

function loadHomeCards(filter = "all") {
  const box = document.getElementById("autoCards");
  if (!box) return;

  let html = "";

  if (filter === "all" || filter === "forms") {
    if (typeof formsList !== "undefined") {
      formsList.forEach(item => {
        html += createHomeCard(item, "forms");
      });
    }
  }

  if (filter === "all" || filter === "services") {
    if (typeof servicesList !== "undefined") {
      servicesList.forEach(item => {
        html += createHomeCard(item, "services");
      });
    }
  }

  if (filter === "all" || filter === "products") {
    if (typeof productsList !== "undefined") {
      productsList.forEach(item => {
        html += createHomeCard(item, "products");
      });
    }
  }

  box.innerHTML = html || `
    <div class="card">
      <h3>No items found</h3>
      <p>Please try another filter.</p>
    </div>
  `;
}

/* =====================================================
   APPLY FILTER FROM URL (HOME PAGE)
===================================================== */

function applyFilterFromURL() {
  const params = new URLSearchParams(window.location.search);
  const filter = params.get("filter");
  loadHomeCards(filter || "all");
}

document.addEventListener("DOMContentLoaded", applyFilterFromURL);

/* =====================================================
   PAGE FADE-IN EFFECT
===================================================== */

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

/* =====================================================
   CARD FLIP (MOBILE SUPPORT)
===================================================== */

document.addEventListener("click", e => {
  const card = e.target.closest(".card-flip");
  if (!card) return;
  card.classList.toggle("active");
});

/* =====================================================
   PRODUCT IMAGE CHANGE (SINGLE SOURCE)
===================================================== */

function changeImage(el) {
  const main = document.getElementById("mainProductImage");
  if (main && el && el.src) {
    main.src = el.src;
  }
}

/* =====================================================
   THUMBNAIL ARROW SLIDER
===================================================== */

let thumbIndex = 0;

function scrollThumbs(direction) {
  const track = document.getElementById("thumbTrack");
  if (!track) return;

  const thumbs = track.children.length;
  const visible = 4;
  const thumbHeight = 80;

  const maxIndex = Math.max(0, thumbs - visible);

  thumbIndex += direction;
  thumbIndex = Math.max(0, Math.min(thumbIndex, maxIndex));

  track.style.transform = `translateY(-${thumbIndex * thumbHeight}px)`;
}

/* =====================================================
   MOBILE HAMBURGER MENU
===================================================== */

function toggleMenu() {
  const nav = document.getElementById("mainNav");
  if (!nav) return;
  nav.classList.toggle("open");
}

/* =====================================================
   ACTIVE MENU HIGHLIGHT (SINGLE SOURCE LOGIC)
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav a");
  const path = window.location.pathname;
  const params = new URLSearchParams(window.location.search);
  const filter = params.get("filter");

  links.forEach(link => link.classList.remove("active"));

  links.forEach(link => {
    const href = link.getAttribute("href");

    if (path.endsWith("index.html") && !filter && href === "index.html") {
      link.classList.add("active");
    }

    if (filter && href.includes(`filter=${filter}`)) {
      link.classList.add("active");
    }

    if (!filter && href !== "index.html" && path.includes(href.replace("../", ""))) {
      link.classList.add("active");
    }
  });
});

/* =====================================================
   AUTO-CLOSE MOBILE MENU
===================================================== */

function closeMobileMenu() {
  const nav = document.querySelector(".nav");
  if (nav) nav.classList.remove("open");
}

window.addEventListener("scroll", closeMobileMenu);

document.addEventListener("click", e => {
  if (e.target.closest(".nav a")) {
    closeMobileMenu();
  }
});

/* =====================================================
   HEADER SHRINK ON SCROLL
===================================================== */

window.addEventListener("scroll", () => {
  const header = document.querySelector(".main-header");
  if (!header) return;
  header.classList.toggle("shrink", window.scrollY > 60);
});
