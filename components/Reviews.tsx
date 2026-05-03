const reviews = [
  {
    text: "ทีมงานดูแลดีมาก งานตรงแบบ ไม่บานปลาย แจ้งความคืบหน้าตลอด ไม่ต้องตามเองเลย ประทับใจมากค่ะ",
    name: "คุณกนกวรรณ",
    job: "ลูกค้าสร้างบ้าน — รังสิต",
    initial: "ก",
    avatarBg: "var(--accent-green-light)",
    avatarColor: "var(--accent-green)",
  },
  {
    text: "ตรวจบ้านละเอียดมาก คุ้มสุดๆ ช่วยประหยัดเงินได้เยอะก่อนโอน ขอบคุณทีม TD39 มากครับ",
    name: "คุณวิชัย",
    job: "ลูกค้าตรวจบ้าน — ลาดพร้าว",
    initial: "ว",
    avatarBg: "var(--accent-blue-light)",
    avatarColor: "var(--accent-blue)",
  },
];

export default function Reviews() {
  return (
    <section className="section-pad" style={{ padding: "5.5rem 4rem", background: "var(--bg-section)" }}>
      <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent-green)", marginBottom: "0.75rem" }}>
        รีวิวลูกค้า
      </div>
      <h2 style={{ fontFamily: "'IBM Plex Sans Thai', sans-serif", fontSize: "2rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.3, letterSpacing: "-0.02em" }}>
        เสียงจากคนที่ผ่านมาแล้ว
      </h2>

      <div className="reviews-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem", marginTop: "3rem" }}>
        {reviews.map((r) => (
          <div key={r.name} style={{ background: "white", border: "1px solid var(--border)", borderRadius: 12, padding: "2rem" }}>
            <div style={{ color: "var(--accent-orange)", fontSize: "0.8rem", marginBottom: "0.75rem", letterSpacing: 2 }}>★★★★★</div>
            <p style={{ fontSize: "0.95rem", color: "var(--text-primary)", lineHeight: 1.85, marginBottom: "1.5rem" }}>
              &ldquo;{r.text}&rdquo;
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: r.avatarBg, color: r.avatarColor,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.8rem", fontWeight: 700, flexShrink: 0,
              }}>
                {r.initial}
              </div>
              <div>
                <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-primary)" }}>{r.name}</div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>{r.job}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
