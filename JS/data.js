/* =====================================================
   DATA CONFIG – ANVI COMPUTER
   Single source of truth for:
   - Forms
   - Services
   - Header notices
   - Footer links
===================================================== */

/* ================= FORMS ================= */
const formsList = [
    {
        title: "CUET UG 2026",
        icon: "🎓",
        link: "Forms/cuet-ug-2026.html",
        notice: "🎓 CUET UG 2026 registration open"
    },
    {
        title: "CUET PG 2026",
        icon: "🎓",
        link: "Forms/cuet-pg-2026.html",
        notice: "🎓 CUET PG 2026 admission open"
    }
];

/* ================= SERVICES ================= */
const servicesList = [
    {
        title: "PAN Card Services",
        icon: "💳",
        link: "Services/pan.html",
        notice: "💳 PAN correction available"
    },
    {
        title: "Ticket Booking",
        icon: "🎟️",
        link: "Services/ticket.html",
        notice: "🎟️ Ticket booking open"
    },
	{
        title: "GST Services",
        icon: "🧾",
        link: "Services/gst.html",
        notice: "🧾 GST Registration & Return Filing available"
    }
];

/* ================= BUILD NOTICES ================= */
const noticeItems = [
    ...formsList.map(item => ({
        text: item.notice,
        link: item.link
    })),
    ...servicesList.map(item => ({
        text: item.notice,
        link: item.link
    }))
];

/* ================= FOOTER QUICK LINKS ================= */
const footerLinks = [
    { title: "Home", url: "index.html" },
    { title: "About", url: "about.html" },
    { title: "Contact", url: "contactus.html" },
    { title: "Payment", url: "payment.html" }
];

/* ================= PRODUCTS ================= */
const productsList = [
  {
    title: "HP Laptop",
    icon: "💻",
    link: "Products/laptop.html",
    price: 45000,
    category: "laptop"
  },
  {
    title: "Canon Printer",
    icon: "🖨️",
    link: "Products/printer.html",
    price: 8500,
    category: "printer"
  },
  {
    title: "Wireless Mouse",
    icon: "🖱️",
    link: "Products/mouse.html",
    price: 499,
    category: "accessory"
  }
];
