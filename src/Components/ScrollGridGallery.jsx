import { useRef, useEffect } from "react";
import { animate, scroll } from "motion";

const ScrollGridGallery = ({ images, centerImage, title, subtitle }) => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const layerRefs = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !sectionRef.current || !imageRef.current)
      return;

    const section = sectionRef.current;
    const centerEl = imageRef.current;
    const layers = layerRefs.current.filter(Boolean);

    const imageAnimation = scroll(
      animate(centerEl, {
        width: { easing: [0.65, 0, 0.35, 1] },
        height: { easing: [0.42, 0, 0.58, 1] },
      }),
      { target: section, offset: ["start start", `80% end`] },
    );

    const scaleEasings = [
      [0.42, 0, 0.58, 1],
      [0.76, 0, 0.24, 1],
      [0.87, 0, 0.13, 1],
    ];

    const layerAnimations = layers.map((layer, i) => {
      const endOffset = `${Math.max(0.2, 0.8 - i * 0.05)} end`;

      const fadeAnim = scroll(
        animate(
          layer,
          { opacity: [0, 0, 1] },
          { offset: [0, 0.55, 1], easing: [0.61, 1, 0.88, 1] },
        ),
        { target: section, offset: ["start start", endOffset] },
      );

      const scaleAnim = scroll(
        animate(
          layer,
          { scale: [0, 0, 1] },
          { offset: [0, 0.3, 1], easing: scaleEasings[i] },
        ),
        { target: section, offset: ["start start", endOffset] },
      );

      return [fadeAnim, scaleAnim];
    });

    return () => {
      imageAnimation?.stop?.();
      layerAnimations.forEach((arr) => arr?.forEach((a) => a?.stop?.()));
    };
  }, []);

  const layer1Images = images.slice(0, 6);
  const layer2Images = images.slice(6, 12);
  const layer3Images = images.slice(12, 14);

  const Tile = ({ img }) => (
    <div className=" flex rounded-2xl border border-neutral-200 py-4 shadow-soft dark:border-neutral-800 dark:bg-neutral-900/70  items-center justify-center gap-3 text-center">
      <span className="flex  items-center justify-center rounded-2xl bg-white  shadow-sm dark:bg-neutral-900">
        <img src={img.src} alt={img.name} className="h-20 w-16 object-contain" />
      </span>
      <div>
        <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          {img.name}
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Professional
        </p>
      </div>
    </div>
  );

  console.log(images);
  return (
    <div
      ref={sectionRef}
      className="bg-transparent overflow-clip [--scroll-grid-gap:clamp(10px,7.35vw,80px)]"
    >
      <section className="min-h-[360vh] w-full">
        <div className="min-h-screen w-full flex items-center justify-center sticky top-0 overflow-hidden">
          <div className="grid grid-cols-5 grid-rows-3 w-4/5 gap-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto max-[600px]:grid-cols-3">
            {/* Layer 1 */}
            <div
              ref={(el) => (layerRefs.current[0] = el)}
              className="grid col-span-full row-span-full [grid-template-columns:subgrid] [grid-template-rows:subgrid] w-full h-full"
            >
              {layer1Images.map((img, idx) => (
                <div
                  key={`layer1-${idx}`}
                  style={{ gridColumn: idx % 2 === 0 ? 1 : 5 }}
                >
                  <Tile img={img} />
                </div>
              ))}
            </div>

            {/* Layer 2 */}
            <div
              ref={(el) => (layerRefs.current[1] = el)}
              className="grid col-span-full row-span-full [grid-template-columns:subgrid] [grid-template-rows:subgrid]"
            >
              {layer2Images.map((img, idx) => (
                <div
                  key={`layer2-${idx}`}
                  style={{
                    gridColumn: idx % 2 === 0 ? "2" : "4",
                  }}
                >
                  <Tile img={img} />
                </div>
              ))}
            </div>

            {/* Layer 3 */}
            <div
              ref={(el) => (layerRefs.current[2] = el)}
              className="grid col-span-full row-span-full [grid-template-columns:subgrid] [grid-template-rows:subgrid]"
            >
              {layer3Images.map((img, idx) => (
                <div
                  key={`layer3-${idx}`}
                  style={{
                    gridColumn: "3",
                    gridRow: idx === 0 ? "1" : "-1",
                  }}
                >
                  <Tile img={img} />
                </div>
              ))}
            </div>

            {/* Center */}
            <div
              className="relative z-[2] w-full h-full"
              style={{ gridRow: "2", gridColumn: "3" }}
            >
              <div
                ref={imageRef}
                className="w-full h-full  rounded-2xl flex items-center justify-center text-center"
              >
                <div className="text-2xl font-semibold text-white">
                  My Stack
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollGridGallery;
