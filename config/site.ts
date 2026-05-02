// ─────────────────────────────────────────────
// SITE CONFIG — edit this file to update contact
// info and portfolio images across the whole site
// ─────────────────────────────────────────────

export const siteConfig = {
  name: "TD39HOME",

  // ── Contact ──────────────────────────────────
  contact: {
    lineId: "ID: thitisak2544",
    lineUrl: "https://line.me/ti/p/~@td39home",
    phone: "081-621-9269",
    phoneUrl: "tel:0816219269",
    location: "กรุงเทพและปริมณฑล",
  },

  // ── Stats ─────────────────────────────────────
  stats: [
    { value: "200+", label: "โปรเจกต์ที่ผ่านมา", color: "green" as const },
    { value: "10+",  label: "ปีประสบการณ์",      color: "orange" as const },
    { value: "98%",  label: "ลูกค้าพึงพอใจ",      color: "blue" as const },
  ],

  // ── Portfolio images ──────────────────────────
  // To add images: put files in /public/images/ and set src to "/images/filename.jpg"
  // Leave src as "" to show a placeholder box instead
  portfolio: {

    // Carousel — ตัวอย่างบ้าน 1, 2, 3 ...
    house: [
      { src: "/images/build-after.jpg", alt: "ตัวอย่างบ้าน 1" },
      { src: "", alt: "ตัวอย่างบ้าน 2" },
      { src: "", alt: "ตัวอย่างบ้าน 3" },
    ],

    // Before & After side by side
    renovate: {
      before: { src: "/images/reno-before.jpg", alt: "รีโนเวท — Before" },
      after:  { src: "/images/reno-after.jpg",  alt: "รีโนเวท — After" },
    },

    // Full-width single image
    inspect: { src: "/images/home-check.jpg", alt: "ตรวจบ้าน" },

    // Carousel — ออกแบบ 3D
    design3d: [
      { src: "/images/3d-home.jpg", alt: "ออกแบบ 3D — 1" },
      { src: "", alt: "ออกแบบ 3D — 2" },
      { src: "", alt: "ออกแบบ 3D — 3" },
    ],
  },
};
