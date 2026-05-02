// ─────────────────────────────────────────────
// SITE CONFIG — edit this file to update contact
// info and portfolio images across the whole site
// ─────────────────────────────────────────────

export const siteConfig = {
  name: "TD39HOME",

  // ── Contact ──────────────────────────────────
  contact: {
    lineId: "@thitisak2544",
    lineUrl: "https://line.me/ti/p/~@td39home",
    phone: "080-000-0000",
    phoneUrl: "tel:0800000000",
    location: "กรุงเทพและปริมณฑล",
  },

  // ── Stats ─────────────────────────────────────
  stats: [
    { value: "200+", label: "โปรเจกต์ที่ผ่านมา", color: "green" as const },
    { value: "10+", label: "ปีประสบการณ์", color: "orange" as const },
    { value: "98%", label: "ลูกค้าพึงพอใจ", color: "blue" as const },
  ],

  // ── Portfolio images ──────────────────────────
  // Replace the src values with your real image paths under /public
  // e.g. "/images/house-after.jpg"
  // Leave src as "" to show a placeholder box instead
  portfolio: [
    { tag: "สร้างบ้าน — After", src: "", alt: "After — สร้างบ้าน", span2: true },
    { tag: "รีโนเวท — Before", src: "", alt: "Before — รีโนเวท", span2: false },
    { tag: "รีโนเวท — After", src: "", alt: "After — รีโนเวท", span2: false },
    { tag: "ตรวจบ้าน", src: "", alt: "ตรวจบ้าน", span2: false },
    { tag: "ออกแบบ 3D", src: "", alt: "ออกแบบ 3D", span2: false },
  ],
} as const;
