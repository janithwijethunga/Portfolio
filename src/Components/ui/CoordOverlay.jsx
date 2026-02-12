import { useEffect, useState } from "react";

export default function CoordOverlay() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[10000]">
      {/* vertical line */}
      <div
        className="absolute top-0 bottom-0 w-px bg-white/30"
        style={{ left: pos.x }}
      />
      {/* horizontal line */}
      <div
        className="absolute left-0 right-0 h-px bg-white/30"
        style={{ top: pos.y }}
      />

      {/* label */}
      <div
        className="absolute rounded-md bg-black/70 px-2 py-1 text-xs text-white"
        style={{ left: pos.x + 12, top: pos.y + 12 }}
      >
        x: {pos.x} &nbsp; y: {pos.y}
      </div>
    </div>
  );
}
