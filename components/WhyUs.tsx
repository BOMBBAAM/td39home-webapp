const reasons = [
  {
    title: "ไม่ทิ้งงาน มีสัญญาชัดเจน",
    desc: "ทุกโปรเจกต์มีสัญญาระบุขอบเขตงาน ราคา และเวลา ไม่มีคำว่า \"รอก่อนนะ\"",
  },
  {
    title: "แจ้งความคืบหน้าตลอด",
    desc: "อัปเดตงานทุกสัปดาห์ มีรูปหน้างานส่งให้ ไม่ต้องโทรถามเอง",
  },
  {
    title: "คุมงบได้จริง",
    desc: "ใบเสนอราคาโปร่งใส ถ้างบจะบวกต้องแจ้งและอนุมัติก่อนทุกครั้ง",
  },
  {
    title: "มีประกันงาน",
    desc: "รับประกันคุณภาพหลังส่งมอบ มีปัญหาจากงานของเรา แจ้งได้เลย แก้ให้ฟรี",
  },
];

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke="var(--accent-green)" strokeWidth={2.5}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function WhyUs() {
  return (
    <section className="section-pad" style={{ padding: "5.5rem 4rem", background: "var(--bg-section)" }}>
      <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent-green)", marginBottom: "0.75rem" }}>
        ทำไมต้องเลือกเรา
      </div>
      <h2 style={{ fontFamily: "'IBM Plex Sans Thai', sans-serif", fontSize: "2rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.3, letterSpacing: "-0.02em" }}>
        คำมั่นสัญญาจาก TD39
      </h2>

      <div className="why-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem", marginTop: "3rem" }}>
        {reasons.map((r) => (
          <div key={r.title} className="hover-border" style={{
            background: "white", border: "1px solid var(--border)",
            borderRadius: 12, padding: "1.75rem",
            display: "flex", gap: "1rem", alignItems: "flex-start",
            transition: "border-color 0.2s",
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: 6,
              background: "var(--accent-green-light)", flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center", marginTop: "0.1rem",
            }}>
              <CheckIcon />
            </div>
            <div>
              <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.4rem" }}>{r.title}</div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.75 }}>{r.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
