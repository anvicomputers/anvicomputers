// =====================================================
// UNIVERSAL FOOTER - AUTO INJECT ON ALL PAGES
// FIXED FOR: Forms / Services / Products
// =====================================================

function buildFooter() {
  const year = new Date().getFullYear();

  /* ---------------------------------------------
     Detect if page is inside a subfolder
  --------------------------------------------- */
  const isInSubFolder =
    window.location.pathname.includes("/Services/") ||
    window.location.pathname.includes("/Forms/") ||
    window.location.pathname.includes("/Products/");

  const basePath = isInSubFolder ? "../" : "./";

  /* ---------------------------------------------
     Footer HTML
  --------------------------------------------- */
  const footerHTML = `
    <footer class="site-footer">
      <div class="footer-inner">

        <div class="footer-copy">
          © ${year} <strong>ANKUR ENTERPRISES</strong>
        </div>

        <div class="footer-links">
          <a href="${basePath}index.html">Home</a>
          <a href="${basePath}about.html">About</a>
          <a href="${basePath}contactus.html">Contact</a>
          <a href="${basePath}payment.html">Payment</a>
        </div>

        <div class="footer-actions">
          <button id="themeToggle">🌙 Dark</button>
        </div>

      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML("beforeend", footerHTML);

  /* ---------------------------------------------
     Theme toggle
  --------------------------------------------- */
  const btn = document.getElementById("themeToggle");
  if (btn) {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      btn.innerText = document.body.classList.contains("dark-mode")
        ? "☀️ Light"
        : "🌙 Dark";
    });
  }
}

document.addEventListener("DOMContentLoaded", buildFooter);
