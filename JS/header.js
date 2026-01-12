/* =====================================================
   UNIVERSAL HEADER – ANVI COMPUTER
   Auto loads on all pages
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ---------------------------------------------
       Detect if page is inside a folder
    --------------------------------------------- */
		const inFolder =
		  location.pathname.includes("/Forms/") ||
		  location.pathname.includes("/Services/") ||
		  location.pathname.includes("/Products/");


    const base = inFolder ? "../" : "";

    /* ---------------------------------------------
       Header HTML
    --------------------------------------------- */
    const headerHTML = `
<header class="main-header">
    <div class="header-inner">

        <!-- BRAND -->
        <a href="${base}index.html" class="brand">
            <img src="${base}LOGO.png" class="logo" alt="ANVI COMPUTER">
            <div class="brand-text">
                <span class="brand-name">ANVI COMPUTER</span>
                <span class="brand-tagline">Cyber Café ● Sales & Services</span>
            </div>
        </a>

        <!-- CENTER NOTICE -->
        <div class="header-notice">
            <div class="notice-track" id="noticeTrack"></div>
        </div>

        <!-- NAVIGATION -->
				<nav class="nav">
				  <a href="${base}index.html">Home</a>

				  <a href="${base}index.html?filter=forms">Forms</a>

				  <a href="${base}index.html?filter=services">Services</a>

				  <a href="${base}index.html?filter=products">Shop</a>

				  <a href="${base}about.html">About</a>
				  <a href="${base}contactus.html">Contact</a>
				  <a href="${base}payment.html">Payment</a>
				</nav>



    </div>
</header>
`;

    /* ---------------------------------------------
       Inject header at top of body
    --------------------------------------------- */
    document.body.insertAdjacentHTML("afterbegin", headerHTML);

    /* ---------------------------------------------
       Build Notices from data.js
    --------------------------------------------- */
    const track = document.getElementById("noticeTrack");

    if (!track) return;

    /* If no data, show default text */
    if (typeof noticeItems === "undefined" || noticeItems.length === 0) {
        track.innerHTML = `<span class="notice-item">Welcome to ANVI COMPUTER</span>`;
        return;
    }

    let html = "";

    noticeItems.forEach(item => {
        html += `
            <a href="${base}${item.link}" class="notice-item">
                ${item.text}
            </a>
        `;
    });

    /* Duplicate for smooth infinite scroll */
    track.innerHTML = html + html;
});
