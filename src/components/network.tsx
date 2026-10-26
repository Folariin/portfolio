"use client";
import { useEffect, useRef } from "react";
const labels = [
  "Java",
  "TypeScript",
  "SQL",
  "React",
  "Spring Boot",
  "HCI",
  "Distributed Systems",
];
export function Network() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const pointer = useRef({ x: -1000, y: -1000 });
  useEffect(() => {
    const el = canvas.current;
    if (!el) return;
    const ctx = el.getContext("2d");
    if (!ctx) return;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0,
      visible = true,
      width = 600,
      height = 600,
      time = 0;
    const nodes = Array.from({ length: 64 }, (_, i) => {
      const angle = i * 2.399963;
      const radius = Math.sqrt((i + 1) / 64) * 235;
      return {
        x: 300 + Math.cos(angle) * radius,
        y: 290 + Math.sin(angle) * radius * 0.88,
        phase: i * 1.7,
      };
    });
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.scale(width / 600, height / 600);
      const points = nodes.map((n) => ({
        x: n.x + Math.sin(time * 0.22 + n.phase) * 9,
        y: n.y + Math.cos(time * 0.18 + n.phase) * 9,
      }));
      for (let i = 0; i < points.length; i++) {
        const a = points[i];
        for (let j = i + 1; j < points.length; j++) {
          const b = points[j],
            d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d > 104) continue;
          ctx.strokeStyle = `rgba(128,82,255,${0.13 + (1 - d / 104) * 0.28})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
          if ((i + j) % 13 === 0) {
            const t = (time * 0.08 + i * 0.1) % 1;
            ctx.fillStyle = "#b499ff";
            ctx.beginPath();
            ctx.arc(
              a.x + (b.x - a.x) * t,
              a.y + (b.y - a.y) * t,
              1.3,
              0,
              Math.PI * 2,
            );
            ctx.fill();
          }
        }
        const near =
          Math.hypot(a.x - pointer.current.x, a.y - pointer.current.y) < 95;
        ctx.fillStyle =
          i % 17 === 0
            ? "#ffb829"
            : near
              ? "#ffffff"
              : i % 4 === 0
                ? "#b399ff"
                : "#8052ff";
        ctx.beginPath();
        ctx.arc(a.x, a.y, near ? 3 : i % 4 === 0 ? 2.2 : 1.4, 0, Math.PI * 2);
        ctx.fill();
        if (near || i % 17 === 0) {
          ctx.strokeStyle = near ? "#8052ff66" : "#ffb82933";
          ctx.beginPath();
          ctx.arc(a.x, a.y, 7, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
      ctx.restore();
    }
    function loop() {
      if (!visible || document.hidden || motion.matches) return;
      time += 1 / 60;
      draw();
      frame = requestAnimationFrame(loop);
    }
    function restart() {
      cancelAnimationFrame(frame);
      draw();
      if (visible && !document.hidden && !motion.matches)
        frame = requestAnimationFrame(loop);
    }
    const resize = new ResizeObserver((entries) => {
      width = entries[0].contentRect.width;
      height = entries[0].contentRect.height;
      const dpr = Math.min(devicePixelRatio, 2);
      el.width = width * dpr;
      el.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    });
    const observer = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      restart();
    });
    resize.observe(el);
    observer.observe(el);
    motion.addEventListener("change", restart);
    document.addEventListener("visibilitychange", restart);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      observer.disconnect();
      motion.removeEventListener("change", restart);
      document.removeEventListener("visibilitychange", restart);
    };
  }, []);
  return (
    <div
      className="network"
      role="img"
      aria-label="An animated constellation connecting Java, TypeScript, SQL, React, Spring Boot, HCI, and distributed systems"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        pointer.current = {
          x: ((e.clientX - r.left) / r.width) * 600,
          y: ((e.clientY - r.top) / r.height) * 600,
        };
      }}
      onPointerLeave={() => {
        pointer.current = { x: -1000, y: -1000 };
      }}
    >
      <div className="network-orbit" />
      <canvas ref={canvas} aria-hidden="true" />
      {labels.map((label, i) => (
        <span
          key={label}
          className={`network-label label-${i}`}
          aria-hidden="true"
        >
          {label}
        </span>
      ))}
      <span className="network-caption" aria-hidden="true">
        <i /> IDEAS, CONNECTED.
      </span>
    </div>
  );
}
