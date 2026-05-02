import Image from "next/image";

export default function Nav() {
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "1rem 4rem",
      background: "rgba(250,250,248,0.95)",
      borderBottom: "1px solid var(--border)",
    }}>
      <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
        <Image
          src="/logo.png"
          alt="TD39 Home logo"
          width={240}
          height={80}
          style={{ objectFit: "contain", height: 80, width: "auto" }}
          priority
        />
        <span style={{
          fontFamily: "'IBM Plex Sans', sans-serif",
          fontSize: "1.1rem", fontWeight: 700, letterSpacing: "-0.01em",
          color: "var(--text-primary)",
        }}>
          TD39<span style={{ color: "var(--accent-green)" }}>HOME</span>
        </span>
      </a>

      <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
        {[
          { label: "บริการ",  href: "#services" },
          { label: "ผลงาน",  href: "#portfolio" },
          { label: "ราคา",   href: "#pricing" },
          { label: "ติดต่อ", href: "#contact" },
        ].map((link) => (
          <li key={link.href}>
            <a href={link.href} className="nav-link">{link.label}</a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="nav-cta" style={{
        background: "var(--text-primary)", color: "white",
        border: "none", padding: "0.55rem 1.25rem",
        fontFamily: "'IBM Plex Sans Thai', sans-serif", fontSize: "0.82rem", fontWeight: 600,
        cursor: "pointer", borderRadius: "6px", textDecoration: "none",
        transition: "opacity 0.15s",
      }}>
        ขอใบเสนอราคา
      </a>
    </nav>
  );
}
