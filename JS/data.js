/* =====================================================
   📌 DATA.JS RULEBOOK – ANVI COMPUTER
   SINGLE SOURCE OF TRUTH FOR WEBSITE
===================================================== */

/*
──────────────────────────────────────────────────────
🔒 STRICT RULES (DO NOT BREAK)
──────────────────────────────────────────────────────

1. MASTER_DATA is the ONLY place to add:
   - Forms
   - Services
   - Products

2. NEVER hardcode cards anywhere else.
   Home page, notifications, filters are AUTO-GENERATED.

3. Folder Structure (FIXED):
   - Forms/     → All form pages
   - Services/  → All service pages
   - Products/  → All product pages

4. Each item MUST have:
   - type   → "form" | "service" | "product"
   - title  → Display name
   - link   → Correct relative path

──────────────────────────────────────────────────────
🎨 ICON RULES (VERY IMPORTANT)
──────────────────────────────────────────────────────

🔹 OPTION A: EMOJI ICON (Recommended)
   ✔ Use when simple icon is enough

   Example:
   {
     icon: "🪪"
   }

   ✔ Emoji will appear:
     - On home cards
     - In notification marquee

🔹 OPTION B: IMAGE ICON (For branded services)
   ✔ Use ONLY when you want image icon

   Example:
   {
     iconType: "image",
     icon: "images/pvc/pan.png"
   }

   ⚠ IMPORTANT:
   - iconType MUST be "image"
   - icon MUST be image path
   - DO NOT use emoji in notice if iconType = image

❌ NEVER do this:
   notice: "🪪 PAN correction available"

✔ Correct:
   icon: "🪪"
   notice: "PAN correction available"

──────────────────────────────────────────────────────
📢 NOTIFICATION RULES
──────────────────────────────────────────────────────

1. To show item in notification bar:
   notify: true

2. Notification text comes from:
   notice → if provided
   title  → if notice is missing

3. Emoji in notification:
   - Comes ONLY from icon (emoji type)
   - Image icons NEVER show emoji

──────────────────────────────────────────────────────
🛍 PRODUCT RULES
──────────────────────────────────────────────────────

Products MAY include:
   - price
   - category

Example:
{
  type: "product",
  title: "HP Laptop",
  icon: "💻",
  price: 45000,
  category: "laptop"
}

──────────────────────────────────────────────────────
⚠ COMMON MISTAKES (AVOID)
──────────────────────────────────────────────────────

❌ Using image path as icon without iconType
❌ Adding emoji inside notice
❌ Editing auto-generated lists
❌ Adding cards manually in HTML

──────────────────────────────────────────────────────
✅ SAFE CHECKLIST BEFORE SAVE
──────────────────────────────────────────────────────

✔ iconType present if icon is image
✔ emoji only inside icon
✔ notice is clean text
✔ correct folder path
✔ notify true only when needed

──────────────────────────────────────────────────────
🚀 RESULT
──────────────────────────────────────────────────────

✔ Clean notifications
✔ No duplicate emoji
✔ No image-path text
✔ Fully automatic system
✔ Scalable for 100+ items

==================================================== */


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
    notice: "All PVC & Plastic Card Printing Available"
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
  }

];

/* =====================================================
   AUTO-GENERATED LISTS (DO NOT EDIT)
===================================================== */

const formsList    = MASTER_DATA.filter(i => i.type === "form");
const servicesList = MASTER_DATA.filter(i => i.type === "service");
const productsList = MASTER_DATA.filter(i => i.type === "product");

/* =====================================================
   NOTIFICATIONS (FIXED & SMART)
===================================================== */

const mobileNotifications = MASTER_DATA
  .filter(i => i.notify)
  .map(i => {
    let prefix = "";

    /* ✅ Use emoji ONLY if icon is emoji */
    if (!i.iconType && typeof i.icon === "string" && !i.icon.includes("/")) {
      prefix = i.icon + " ";
    }

    return {
      text: `${prefix}${i.notice || i.title}`,
      link: i.link
    };
  });

/* ================= HEADER NOTICE (DESKTOP) ================= */

const noticeItems = mobileNotifications;

/* ================= FOOTER LINKS ================= */

const footerLinks = [
  { title: "Home", url: "index.html" },
  { title: "About", url: "about.html" },
  { title: "Contact", url: "contactus.html" },
  { title: "Payment", url: "payment.html" }
];
