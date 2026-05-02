const plans = [
  {
    label: "ยอดนิยม",
    service: "สร้างบ้าน",
    desc: "ออกแบบ + ก่อสร้างครบวงจร รวมวัสดุและค่าแรง",
    from: "เริ่มต้น",
    amount: "xxx,xxx ฿",
    note: "ขึ้นอยู่กับพื้นที่และวัสดุที่เลือก",
    featured: true,
  },
  {
    label: "บริการ",
    service: "รีโนเวท / ต่อเติม",
    desc: "ปรับปรุงบ้านเก่า เพิ่มพื้นที่ เปลี่ยนโฉมใหม่",
    from: "เริ่มต้น",
    amount: "xx,xxx ฿",
    note: "ขึ้นอยู่กับขอบเขตงาน",
    featured: false,
  },
  {
    label: "บริการ",
    service: "ตรวจบ้าน / คอนโด",
    desc: "ตรวจครบ มีรายงาน ก่อนตัดสินใจโอน",
    from: "เริ่มต้น",
    amount: "1,500 ฿",
    note: "ราคาเดียว ไม่มีค่าใช้จ่ายเพิ่ม",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: "5.5rem 4rem", background: "var(--bg)" }}>
      <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent-green)", marginBottom: "0.75rem" }}>
        ราคา
      </div>
      <h2 style={{ fontFamily: "'IBM Plex Sans Thai', sans-serif", fontSize: "2rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.3, marginBottom: "1rem", letterSpacing: "-0.02em" }}>
        โปร่งใส ไม่มีบวกเพิ่มทีหลัง
      </h2>
      <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: 560 }}>
        ราคาที่เห็นคือราคาจริง ไม่มีค่าใช้จ่ายซ่อนในสัญญา
      </p>

      <div style={{
        display: "inline-flex", alignItems: "center", gap: "0.5rem",
        background: "var(--accent-green-light)", border: "1px solid rgba(59,125,78,0.2)",
        color: "var(--accent-green)", padding: "0.6rem 1.2rem", borderRadius: 8,
        fontSize: "0.82rem", fontWeight: 500, marginTop: "3rem",
      }}>
        <span style={{ width: 6, height: 6, background: "var(--accent-green)", borderRadius: "50%", display: "inline-block", flexShrink: 0 }} />
        ขอใบเสนอราคาฟรี ไม่มีค่าใช้จ่าย ไม่มีข้อผูกมัด
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginTop: "1rem" }}>
        {plans.map((p) => (
          <div key={p.service} className={p.featured ? undefined : "hover-border"} style={{
            background: "white",
            border: p.featured ? "2px solid var(--accent-green)" : "1px solid var(--border)",
            borderRadius: 12, padding: "2rem 1.75rem",
            transition: "border-color 0.2s",
          }}>
            <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent-green)", marginBottom: "0.5rem" }}>{p.label}</div>
            <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>{p.service}</div>
            <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>{p.desc}</div>
            <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "1.25rem" }}>{p.from}</div>
            <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "2rem", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.03em", margin: "0.25rem 0 0.5rem" }}>{p.amount}</div>
            <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>{p.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
