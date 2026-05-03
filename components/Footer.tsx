import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="footer-wrap" style={{
      background: "var(--bg-section)", padding: "2.5rem 4rem",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      borderTop: "1px solid var(--border)",
    }}>
      <div>
        <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)" }}>
          TD39<span style={{ color: "var(--accent-green)" }}>HOME</span>
        </div>
        <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.4rem" }}>
          รับเหมาก่อสร้างครบวงจร {siteConfig.contact.location}
        </div>
      </div>
      <div className="footer-right" style={{ fontSize: "0.75rem", color: "var(--text-muted)", textAlign: "right", lineHeight: 1.8 }}>
        Line: {siteConfig.contact.lineId} &nbsp;|&nbsp; โทร: {siteConfig.contact.phone}<br />
        © 2025 TD39 Home. All rights reserved.
      </div>
    </footer>
  );
}
