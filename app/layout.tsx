import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TD39 Home — รับเหมาก่อสร้างครบวงจร",
  description: "สร้างบ้าน รีโนเวท ตรวจบ้าน ครบจบในที่เดียว โปร่งใส ไม่ทิ้งงาน คุมงบได้จริง",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
