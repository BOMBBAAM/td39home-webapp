const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="var(--accent-green)" strokeWidth={1.75}>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    iconBg: "var(--accent-green-light)",
    name: "สร้างบ้าน",
    desc: "ออกแบบ + ก่อสร้างครบวงจร ตั้งแต่วางแผนจนส่งมอบ",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="var(--accent-orange)" strokeWidth={1.75}>
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    iconBg: "var(--accent-orange-light)",
    name: "รีโนเวท / ต่อเติม",
    desc: "เปลี่ยนบ้านเก่าให้เหมือนใหม่ เพิ่มพื้นที่ คุมงบได้",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="var(--accent-blue)" strokeWidth={1.75}>
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    iconBg: "var(--accent-blue-light)",
    name: "ตรวจบ้าน / คอนโด",
    desc: "ตรวจละเอียดทุกจุดก่อนโอน รายงานชัดเจน ป้องกันปัญหา",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="var(--text-secondary)" strokeWidth={1.75}>
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
    iconBg: "var(--bg-section)",
    name: "ออกแบบ",
    desc: "ดีไซน์ตามงบและไลฟ์สไตล์ ทั้ง 2D / 3D",
  },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "5.5rem 4rem", background: "var(--bg-section)" }}>
      <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent-green)", marginBottom: "0.75rem" }}>
        บริการของเรา
      </div>
      <h2 style={{ fontFamily: "'IBM Plex Sans Thai', sans-serif", fontSize: "2rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.3, marginBottom: "1rem", letterSpacing: "-0.02em" }}>
        ทุกอย่างที่บ้านของคุณต้องการ
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginTop: "3rem" }}>
        {services.map((s) => (
          <div key={s.name} className="hover-card" style={{
            background: "white", border: "1px solid var(--border)",
            borderRadius: 12, padding: "1.75rem 1.5rem",
            transition: "border-color 0.2s, box-shadow 0.2s",
          }}>
            <div style={{ width: 40, height: 40, borderRadius: 8, background: s.iconBg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
              {s.icon}
            </div>
            <div style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.5rem" }}>{s.name}</div>
            <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.75 }}>{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
