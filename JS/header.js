/* =====================================================
   UNIVERSAL HEADER – ANVI COMPUTER
===================================================== */

/* ---------- SAFE MOBILE NOTICE BUILDER ---------- */
function buildMobileNoticeSafe(base){
  try{
    if (
      typeof mobileNotifications === "undefined" ||
      !Array.isArray(mobileNotifications) ||
      mobileNotifications.length === 0
    ){
      return "";
    }

    const items = mobileNotifications
      .map(n => `<a href="${base}${n.link}">${n.text}</a>`)
      .join("");

    return `
      <div class="mobile-notice">
        <div class="notice-marquee">
          <div class="notice-track">${items}</div>
          <div class="notice-track">${items}</div>
        </div>
      </div>
    `;
  } catch(e){
    console.error(e);
    return "";
  }
}


/* ---------- HEADER LOAD ---------- */
document.addEventListener("DOMContentLoaded", () => {

  /* Detect subfolder */
  const inFolder =
    location.pathname.includes("/Forms/") ||
    location.pathname.includes("/Services/") ||
    location.pathname.includes("/Products/");

  const base = inFolder ? "../" : "";

  /* ---------- HEADER HTML ---------- */
  const headerHTML = `
<header class="main-header">
  <div class="header-inner">

    <!-- BRAND -->
    <a href="${base}index.html" class="brand">
      <img src="${base}LOGO.png" class="logo" alt="ANVI COMPUTER">
      <div class="brand-text">
        <span class="brand-name">ANVI COMPUTER</span>
        <span class="brand-tagline">Cyber Café • Sales & Services</span>
      </div>
    </a>

    <!-- NAV -->
    <nav class="nav" id="mainNav">
      <a href="${base}index.html">Home</a>
      <a href="${base}index.html?filter=forms">Forms</a>
      <a href="${base}index.html?filter=services">Services</a>
      <a href="${base}index.html?filter=products">Shop</a>
      <a href="${base}about.html">About</a>
      <a href="${base}contactus.html">Contact</a>
      <a href="${base}payment.html">Payment</a>
    </nav>

    <!-- HAMBURGER -->
    <button class="menu-toggle" onclick="toggleMenu()">☰</button>

  </div>

<div class="header-bottom">
  ${buildMobileNoticeSafe(base)}
</div>

</header>

  `;

  /* Inject header */
  document.body.insertAdjacentHTML("afterbegin", headerHTML);
});
console.log("Mobile notices:", window.mobileNotifications);
