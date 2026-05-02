import Image from "next/image";
import Carousel from "@/components/Carousel";
import { siteConfig } from "@/config/site";

const { portfolio } = siteConfig;

function SectionLabel({ text }: { text: string }) {
  return (
    <div style={{
      display: "inline-block",
      background: "white", color: "var(--text-primary)",
      fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.08em",
      padding: "0.3rem 0.75rem", borderRadius: 100,
      border: "1px solid var(--border)", marginBottom: "0.75rem",
    }}>
      {text}
    </div>
  );
}

function Placeholder({ alt }: { alt: string }) {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>[ {alt} ]</span>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ padding: "5.5rem 0", background: "var(--bg)" }}>

      {/* Section header */}
      <div style={{ padding: "0 4rem", marginBottom: "3rem" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent-green)", marginBottom: "0.75rem" }}>
              ผลงานจริง
            </div>
            <h2 style={{ fontFamily: "'IBM Plex Sans Thai', sans-serif", fontSize: "2rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.3, letterSpacing: "-0.02em" }}>
              ทุกภาพคือหน้างานจริง ไม่มีแต่ง
            </h2>
          </div>
          <p style={{ maxWidth: 280, fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
            Before / After จากโปรเจกต์จริง ลูกค้าจริง ทั่วกรุงเทพและปริมณฑล
          </p>
        </div>
      </div>

      {/* ① สร้างบ้าน — full-width carousel */}
      <div style={{ padding: "0 4rem", marginBottom: "1.5rem" }}>
        <SectionLabel text="สร้างบ้าน" />
        <Carousel slides={portfolio.house} label="สร้างบ้าน" />
      </div>

      {/* ② รีโนเวท — before / after side by side */}
      <div style={{ padding: "0 4rem", marginBottom: "1.5rem" }}>
        <SectionLabel text="รีโนเวท / ต่อเติม" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          {(["before", "after"] as const).map((side) => {
            const item = portfolio.renovate[side];
            return (
              <div key={side} style={{
                aspectRatio: "4/3", position: "relative", borderRadius: 12, overflow: "hidden",
                background: "var(--bg-section)", border: "1px solid var(--border)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{
                  position: "absolute", top: "1rem", left: "1rem", zIndex: 1,
                  background: "white", color: "var(--text-primary)",
                  fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.08em",
                  padding: "0.3rem 0.75rem", borderRadius: 100, border: "1px solid var(--border)",
                }}>
                  {side === "before" ? "Before" : "After"}
                </span>
                {item.src
                  ? <Image src={item.src} alt={item.alt} fill style={{ objectFit: "cover" }} />
                  : <Placeholder alt={item.alt} />
                }
              </div>
            );
          })}
        </div>
      </div>

      {/* ③ ตรวจบ้าน — full width */}
      <div style={{ padding: "0 4rem", marginBottom: "1.5rem" }}>
        <SectionLabel text="ตรวจบ้าน / คอนโด" />
        <div style={{
          width: "100%", aspectRatio: "21/6", position: "relative", borderRadius: 12, overflow: "hidden",
          background: "var(--bg-section)", border: "1px solid var(--border)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          {portfolio.inspect.src
            ? <Image src={portfolio.inspect.src} alt={portfolio.inspect.alt} fill style={{ objectFit: "cover" }} />
            : <Placeholder alt={portfolio.inspect.alt} />
          }
        </div>
      </div>

      {/* ④ ออกแบบ 3D — full-width carousel */}
      <div style={{ padding: "0 4rem" }}>
        <SectionLabel text="ออกแบบ 3D" />
        <Carousel slides={portfolio.design3d} label="ออกแบบ 3D" />
      </div>

    </section>
  );
}
