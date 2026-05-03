import { siteConfig } from "@/config/site";

const statColor: Record<string, string> = {
  green:  "var(--accent-green)",
  orange: "var(--accent-orange)",
  blue:   "var(--accent-blue)",
};

export default function Hero() {
  return (
    <div className="hero-wrap" style={{ padding: "7rem 4rem 6rem", textAlign: "center", background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>

      <div className="anim-1" style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        background: "var(--accent-green-light)", color: "var(--accent-green)",
        fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em",
        padding: "0.35rem 0.9rem", borderRadius: 100, marginBottom: "1.75rem",
        border: "1px solid rgba(59,125,78,0.2)",
      }}>
        <span style={{ width: 6, height: 6, background: "var(--accent-green)", borderRadius: "50%", display: "inline-block" }} />
        รับเหมาก่อสร้างครบวงจร
      </div>

      <h1 className="anim-2 hero-h1" style={{
        fontFamily: "'IBM Plex Sans Thai', sans-serif",
        fontSize: "3rem", fontWeight: 700, lineHeight: 1.2,
        color: "var(--text-primary)", marginBottom: "1.25rem", letterSpacing: "-0.02em",
      }}>
        สร้างบ้าน รีโนเวท ตรวจบ้าน<br />ครบจบในที่เดียว
      </h1>

      <p className="anim-3" style={{
        fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.75,
        maxWidth: 520, margin: "0 auto 2.5rem",
      }}>
        โปร่งใส ไม่ทิ้งงาน คุมงบได้จริง มีทีมมืออาชีพดูแลทุกขั้นตอน ตั้งแต่เริ่มจนส่งมอบ
      </p>

      <div className="anim-4 hero-actions" style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
        <a href="#contact" className="hero-btn" style={{
          background: "var(--text-primary)", color: "white",
          border: "none", padding: "0.85rem 1.75rem",
          fontFamily: "'IBM Plex Sans Thai', sans-serif", fontSize: "0.9rem", fontWeight: 600,
          cursor: "pointer", borderRadius: 8, textDecoration: "none", display: "inline-block",
        }}>
          ขอใบเสนอราคาฟรี
        </a>
        <a href={siteConfig.contact.lineUrl} target="_blank" rel="noopener noreferrer" className="hero-btn" style={{
          background: "white", color: "var(--text-primary)",
          border: "1px solid var(--border-dark)", padding: "0.85rem 1.75rem",
          fontFamily: "'IBM Plex Sans Thai', sans-serif", fontSize: "0.9rem", fontWeight: 500,
          cursor: "pointer", borderRadius: 8, textDecoration: "none", display: "inline-block",
        }}>
          แอดไลน์ปรึกษาฟรี
        </a>
      </div>

      <div className="anim-5 hero-stats" style={{
        display: "flex", gap: 0, marginTop: "4rem",
        border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden",
        background: "white", maxWidth: 600, marginLeft: "auto", marginRight: "auto",
      }}>
        {siteConfig.stats.map((stat, i) => (
          <div key={i} className="hero-stat-item" style={{
            flex: 1, padding: "1.5rem 2rem", textAlign: "center",
            borderRight: i < siteConfig.stats.length - 1 ? "1px solid var(--border)" : "none",
          }}>
            <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "1.8rem", fontWeight: 700, color: statColor[stat.color], letterSpacing: "-0.03em" }}>
              {stat.value}
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.3rem" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
