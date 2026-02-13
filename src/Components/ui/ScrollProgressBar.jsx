import { useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollPathPoints } from "../../data/scrollPathPoints";
import {
  buildArcTable,
  pointAtProgress,
  arcTableToPath,
  tailPathD,
} from "../../utils/scrollPath.utils";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollDotPoints({
  points = scrollPathPoints,

  // dot / tail
  dotSize = 12,
  tailPx = 120,
  gapPx = 50,
  tailStroke = 3,

  // debug
  showPoints = false,
  showPath = false,

  // ✅ speed control: 1 = normal, >1 slower, <1 faster
  scrollFactor = 2,
}) {
  const dotRef = useRef(null);
  const [tailD, setTailD] = useState("");

  const arc = useMemo(
    () => (points?.length >= 2 ? buildArcTable(points, 60) : null),
    [points],
  );

  const debugPathD = useMemo(() => (arc ? arcTableToPath(arc) : ""), [arc]);

  useLayoutEffect(() => {
    if (!dotRef.current || !arc) return;

    const getScrollDistance = () =>
      Math.max(1, document.documentElement.scrollHeight - window.innerHeight);

    const st = ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",

      // ✅ speed control (ONLY): bigger = slower, smaller = faster
      end: () => `+=${getScrollDistance() * scrollFactor}`,

      scrub: true,
      onUpdate: (self) => {
        const p = pointAtProgress(arc, self.progress);

        // dot position
        gsap.set(dotRef.current, { x: p.x, y: p.y });

        // tail with a GAP before the dot
        const tailEnd = Math.max(0, p.len - gapPx);
        const tailStart = Math.max(0, tailEnd - tailPx);
        setTailD(tailEnd > tailStart ? tailPathD(arc, tailStart, tailEnd) : "");
      },
    });

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      st.kill();
    };
  }, [arc, tailPx, gapPx, scrollFactor]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[0]">
      <svg className="h-full w-full">
        {/* debug path */}
        {showPath && debugPathD && (
          <path
            d={debugPathD}
            fill="none"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}

        {/* debug points */}
        {showPoints &&
          points.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r="4"
              fill="rgba(255,255,255,0.6)"
            />
          ))}

        {/* tail */}
        <path
          d={tailD}
          fill="none"
          stroke="rgba(255,255,255)"
          strokeWidth={tailStroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: "drop-shadow(0 0 10px rgba(34,197,94,0.55))" }}
        />

        {/* dot */}
        <circle
          ref={dotRef}
          r={dotSize / 2}
          fill="rgb(255 255 255)"
          style={{ filter: "drop-shadow(0 0 14px rgba(34,197,94,0.9))" }}
        />
      </svg>
    </div>
  );
}
