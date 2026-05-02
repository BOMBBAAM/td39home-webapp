import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ padding: "5.5rem 4rem", background: "var(--bg)" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
        <div>
          <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent-green)", marginBottom: "0.75rem" }}>
            ผลงานจริง
          </div>
          <h2 style={{ fontFamily: "'IBM Plex Sans Thai', sans-serif", fontSize: "2rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.3, letterSpacing: "-0.02em" }}>
            ทุกภาพคือหน้างานจริง ไม่มีแต่ง
          </h2>
        </div>
        <p style={{ maxWidth: 280, fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
          Before / After จากโปรเจกต์จริง ลูกค้าจริง ทั่วกรุงเทพและปริมณฑล
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginTop: "3rem" }}>
        {siteConfig.portfolio.map((item, i) => (
          <div key={i} className="hover-border" style={{
            gridColumn: item.span2 ? "span 2" : undefined,
            aspectRatio: item.span2 ? "16/9" : "4/3",
            background: "var(--bg-section)",
            border: "1px solid var(--border)", borderRadius: 10,
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative", overflow: "hidden", transition: "border-color 0.2s",
          }}>
            <span style={{
              position: "absolute", top: "0.75rem", left: "0.75rem",
              background: "white", color: "var(--text-primary)",
              fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.08em",
              padding: "0.25rem 0.65rem", borderRadius: 100, border: "1px solid var(--border)",
            }}>
              {item.tag}
            </span>

            {item.src ? (
              <Image src={item.src} alt={item.alt} fill style={{ objectFit: "cover" }} />
            ) : (
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", textAlign: "center", lineHeight: 1.6, padding: "0 1rem" }}>
                [ {item.alt} ]
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
