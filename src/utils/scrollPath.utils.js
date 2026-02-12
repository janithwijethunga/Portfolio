const clamp01 = (t) => Math.max(0, Math.min(1, t));
const lerp = (a, b, t) => a + (b - a) * t;

function catmullRom(p0, p1, p2, p3, t) {
  const t2 = t * t;
  const t3 = t2 * t;

  return {
    x:
      0.5 *
      (2 * p1.x +
        (-p0.x + p2.x) * t +
        (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 +
        (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3),
    y:
      0.5 *
      (2 * p1.y +
        (-p0.y + p2.y) * t +
        (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 +
        (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3),
  };
}

export function buildArcTable(points, samplesPerSeg = 40) {
  const table = [];
  let totalLen = 0;

  const getPoint = (segIndex, t) => {
    const p0 = points[Math.max(0, segIndex - 1)];
    const p1 = points[segIndex];
    const p2 = points[Math.min(points.length - 1, segIndex + 1)];
    const p3 = points[Math.min(points.length - 1, segIndex + 2)];
    return catmullRom(p0, p1, p2, p3, t);
  };

  for (let seg = 0; seg < points.length - 1; seg++) {
    let prev = getPoint(seg, 0);
    for (let i = 1; i <= samplesPerSeg; i++) {
      const t = i / samplesPerSeg;
      const cur = getPoint(seg, t);
      totalLen += Math.hypot(cur.x - prev.x, cur.y - prev.y);
      table.push({ x: cur.x, y: cur.y, len: totalLen });
      prev = cur;
    }
  }

  return { table, totalLen };
}

export function pointAtProgress(arc, p01) {
  const target = arc.totalLen * clamp01(p01);
  const arr = arc.table;
  if (!arr.length) return { x: 0, y: 0, len: 0 };

  let lo = 0,
    hi = arr.length - 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (arr[mid].len < target) lo = mid + 1;
    else hi = mid;
  }

  const curr = arr[lo];
  const prev = arr[Math.max(0, lo - 1)];
  const span = curr.len - prev.len || 1;
  const t = (target - prev.len) / span;

  return { x: lerp(prev.x, curr.x, t), y: lerp(prev.y, curr.y, t), len: target };
}

export function arcTableToPath(arc) {
  if (!arc.table.length) return "";
  let d = `M ${arc.table[0].x} ${arc.table[0].y}`;
  for (let i = 1; i < arc.table.length; i++) d += ` L ${arc.table[i].x} ${arc.table[i].y}`;
  return d;
}

export function tailPathD(arc, fromLen, toLen) {
  const arr = arc.table;
  if (!arr.length) return "";

  const start = Math.max(0, fromLen);
  const end = Math.max(start, toLen);

  let i = 0;
  while (i < arr.length && arr[i].len < start) i++;
  if (i >= arr.length) return "";

  const prev = arr[Math.max(0, i - 1)];
  const curr = arr[i];

  const span = curr.len - prev.len || 1;
  const t = (start - prev.len) / span;

  const sx = lerp(prev.x, curr.x, t);
  const sy = lerp(prev.y, curr.y, t);

  let d = `M ${sx} ${sy}`;

  for (; i < arr.length && arr[i].len <= end; i++) d += ` L ${arr[i].x} ${arr[i].y}`;

  if (i < arr.length) {
    const p0 = arr[Math.max(0, i - 1)];
    const p1 = arr[i];
    const span2 = p1.len - p0.len || 1;
    const t2 = (end - p0.len) / span2;
    d += ` L ${lerp(p0.x, p1.x, t2)} ${lerp(p0.y, p1.y, t2)}`;
  }

  return d;
}
