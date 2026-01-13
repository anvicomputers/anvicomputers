/* =====================================================
   MASTER DATA – ANVI COMPUTER
   🔥 SINGLE SOURCE OF TRUTH 🔥
===================================================== */

const MASTER_DATA = [

  /* ================= FORMS ================= */
  {
    type: "form",
    title: "CUET UG 2026",
    icon: "🎓",
    link: "Forms/cuet-ug-2026.html",
    notify: true,
    notice: "CUET UG 2026 registration open"
  },


  /* ================= SERVICES ================= */
  {
    type: "service",
    title: "PAN Card Services",
    iconType: "image",
    icon: "images/pvc/pan.png",
    link: "Services/pan.html",
    notify: true,
    notice: "PAN correction available"
  },
  {
    type: "service",
    title: "GST Services",
    icon: "🧾",
    link: "Services/gst.html",
    notify: true,
    notice: "GST Registration & Return Filing available"
  },
  {
	type: "service",
	title: "PVC Card Printing",
	icon: "🪪",
	link: "Services/pvc-card.html",
	notify: true,
	notice: "🪪 All PVC & Plastic Card Printing Available"
  },

  /* ================= PRODUCTS ================= */
  {
    type: "product",
    title: "HP Laptop",
    icon: "💻",
    link: "Products/laptop.html",
    price: 45000,
    category: "laptop",
    notify: true,
    notice: "Laptop & accessories available"
  },

];
/* =====================================================
   AUTO-GENERATED LISTS (DO NOT EDIT)
===================================================== */

const formsList    = MASTER_DATA.filter(i => i.type === "form");
const servicesList = MASTER_DATA.filter(i => i.type === "service");
const productsList = MASTER_DATA.filter(i => i.type === "product");

/* ================= NOTIFICATIONS ================= */

const mobileNotifications = MASTER_DATA
  .filter(i => i.notify)
  .map(i => ({
    text: `${i.icon} ${i.notice || i.title}`,
    link: i.link
  }));

/* ================= HEADER NOTICE (DESKTOP) ================= */

const noticeItems = mobileNotifications;

/* ================= FOOTER LINKS ================= */

const footerLinks = [
  { title: "Home", url: "index.html" },
  { title: "About", url: "about.html" },
  { title: "Contact", url: "contactus.html" },
  { title: "Payment", url: "payment.html" }
];
