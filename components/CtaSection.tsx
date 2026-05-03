import { siteConfig } from "@/config/site";

export default function CtaSection() {
  return (
    <div id="contact" className="section-pad" style={{ padding: "6rem 4rem", background: "var(--text-primary)", textAlign: "center" }}>
      <h2 style={{ fontSize: "2.2rem", fontWeight: 700, color: "white", marginBottom: "0.75rem", letterSpacing: "-0.02em", lineHeight: 1.3 }}>
        ยังไม่รู้จะเริ่มยังไง?<br />ปรึกษาฟรี ไม่มีค่าใช้จ่าย
      </h2>
      <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.6)", marginBottom: "2.5rem", lineHeight: 1.8 }}>
        ทีมงานพร้อมตอบทุกคำถาม ตั้งแต่งบประมาณจนถึงไทม์ไลน์งาน<br />
        ไม่ต้องรีบตัดสินใจ แค่คุยก่อนได้เลย
      </p>
      <div className="cta-btns" style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
        <a href={siteConfig.contact.lineUrl} target="_blank" rel="noopener noreferrer" className="cta-btn" style={{
          background: "#06C755", color: "white", border: "none", padding: "0.85rem 2rem",
          fontFamily: "'IBM Plex Sans Thai', sans-serif", fontSize: "0.9rem", fontWeight: 700,
          cursor: "pointer", borderRadius: 8, textDecoration: "none", display: "inline-block",
        }}>
          แอดไลน์ {siteConfig.contact.lineId}
        </a>
        <a href={siteConfig.contact.phoneUrl} className="cta-btn" style={{
          background: "rgba(255,255,255,0.1)", color: "white",
          border: "1px solid rgba(255,255,255,0.2)", padding: "0.85rem 2rem",
          fontFamily: "'IBM Plex Sans Thai', sans-serif", fontSize: "0.9rem", fontWeight: 500,
          cursor: "pointer", borderRadius: 8, textDecoration: "none", display: "inline-block",
        }}>
          โทรเลย {siteConfig.contact.phone}
        </a>
      </div>
    </div>
  );
}
