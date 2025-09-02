
import { useEffect, useRef, useState } from "react";

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

export default function CountUp({
  start = 0,
  end = 0,
  duration = 2000,       // ms
  decimals = 0,
  prefix = "",
  suffix = "",
  startOnView = true,     // viewport me aane par start
  once = true,            // sirf ek baar run
  className = "",
}) {
  const [value, setValue] = useState(startOnView ? start : end);
  const [ran, setRan] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const animate = () => {
      if (reduceMotion) {
        setValue(end);
        return;
      }
      const from = start;
      const to = end;
      const t0 = performance.now();

      const tick = (now) => {
        const t = Math.min(1, (now - t0) / duration);
        const current = from + (to - from) * easeOutCubic(t);
        setValue(current);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (!startOnView) {
      animate();
      return;
    }

    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      animate();
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!ran || !once)) {
          animate();
          setRan(true);
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [start, end, duration, startOnView, once, ran]);

  const formatted = `${prefix}${value.toLocaleString(undefined, {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  })}${suffix}`;

  return (
    <span ref={ref} className={className}>
      {formatted}
    </span>
  );
}
