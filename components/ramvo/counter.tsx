"use client";

import { useEffect, useRef, useState } from "react";

export function Counter({ value, label, suffix }: { value: number; label: string; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const observer = new IntersectionObserver((entries) => {
      if (!entries[0]?.isIntersecting) return;
      observer.disconnect();
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setCount(value);
        return;
      }
      const start = performance.now();
      function tick(now: number) {
        const progress = Math.min((now - start) / 1400, 1);
        setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frame = requestAnimationFrame(tick);
      }
      frame = requestAnimationFrame(tick);
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);
  return (
    <div ref={ref} className="stat">
      <b>
        <span>{new Intl.NumberFormat("fa").format(count)}</span>
        <i>{suffix}</i>
      </b>
      <span>{label}</span>
    </div>
  );
}
