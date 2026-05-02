"use client";

import Image from "next/image";
import { useState } from "react";

interface Slide {
  src: string;
  alt: string;
}

export default function Carousel({ slides, label }: { slides: Slide[]; label: string }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === slides.length - 1 ? 0 : i + 1));

  const slide = slides[current];

  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "16/6", background: "var(--bg-section)", borderRadius: 12, overflow: "hidden", border: "1px solid var(--border)" }}>

      {/* Image or placeholder */}
      {slide.src ? (
        <Image src={slide.src} alt={slide.alt} fill style={{ objectFit: "cover" }} />
      ) : (
        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>[ {slide.alt} ]</span>
        </div>
      )}

      {/* Section label tag */}
      <span style={{
        position: "absolute", top: "1rem", left: "1rem",
        background: "white", color: "var(--text-primary)",
        fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.08em",
        padding: "0.3rem 0.75rem", borderRadius: 100, border: "1px solid var(--border)",
      }}>
        {label}
      </span>

      {/* Slide counter */}
      <span style={{
        position: "absolute", top: "1rem", right: "1rem",
        background: "rgba(0,0,0,0.45)", color: "white",
        fontSize: "0.7rem", fontWeight: 600,
        padding: "0.3rem 0.75rem", borderRadius: 100,
      }}>
        {slide.alt}
      </span>

      {/* Prev / Next arrows */}
      {slides.length > 1 && (
        <>
          <button onClick={prev} aria-label="ก่อนหน้า" style={{
            position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.9)", border: "1px solid var(--border)",
            borderRadius: "50%", width: 40, height: 40, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.15s",
          }}>
            <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="var(--text-primary)" strokeWidth={2}>
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button onClick={next} aria-label="ถัดไป" style={{
            position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.9)", border: "1px solid var(--border)",
            borderRadius: "50%", width: 40, height: 40, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.15s",
          }}>
            <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="var(--text-primary)" strokeWidth={2}>
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </>
      )}

      {/* Dot indicators */}
      {slides.length > 1 && (
        <div style={{
          position: "absolute", bottom: "1rem", left: "50%", transform: "translateX(-50%)",
          display: "flex", gap: "0.4rem",
        }}>
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} aria-label={`ภาพที่ ${i + 1}`} style={{
              width: i === current ? 20 : 8, height: 8,
              borderRadius: 100, border: "none", cursor: "pointer",
              background: i === current ? "white" : "rgba(255,255,255,0.5)",
              transition: "all 0.2s",
              padding: 0,
            }} />
          ))}
        </div>
      )}
    </div>
  );
}
