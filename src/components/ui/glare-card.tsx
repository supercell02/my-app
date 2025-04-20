import { cn } from "@/lib/utils";
import { useRef } from "react";

interface GlareCardProps {
  children: React.ReactNode;
  className?: string;
  buttonLink?: string;
  buttonText?: string;
  bgColor?: string;
  textColor?: string;
  hoverColor?: string;
}

export const GlareCard = ({
  children,
  className,
  buttonLink = "#",
  buttonText = "Visit",
  bgColor = "bg-slate-950",
  textColor = "text-white",
  hoverColor = "hover:bg-slate-800",
}: GlareCardProps) => {
  const isPointerInside = useRef(false);
  const refElement = useRef<HTMLDivElement>(null);
  const state = useRef({
    glare: { x: 50, y: 50 },
    background: { x: 50, y: 50 },
    rotate: { x: 0, y: 0 },
  });

  const updateStyles = () => {
    const el = refElement.current;
    if (!el) return;
    const { glare, rotate, background } = state.current;
    el.style.setProperty("--m-x", `${glare.x}%`);
    el.style.setProperty("--m-y", `${glare.y}%`);
    el.style.setProperty("--r-x", `${rotate.x}deg`);
    el.style.setProperty("--r-y", `${rotate.y}deg`);
    el.style.setProperty("--bg-x", `${background.x}%`);
    el.style.setProperty("--bg-y", `${background.y}%`);
    el.style.setProperty("--opacity", `1`);
  };

  const resetStyles = () => {
    const el = refElement.current;
    if (!el) return;
    el.style.setProperty("--r-x", `0deg`);
    el.style.setProperty("--r-y", `0deg`);
    el.style.setProperty("--opacity", `0`);
    el.style.setProperty("--duration", "300ms");
  };

  return (
    <div
      ref={refElement}
      style={{
        "--m-x": "50%",
        "--m-y": "50%",
        "--r-x": "0deg",
        "--r-y": "0deg",
        "--bg-x": "50%",
        "--bg-y": "50%",
        "--duration": "300ms",
        "--opacity": "0",
        "--radius": "1.5rem",
        "--foil-size": "100%",
        "--easing": "ease",
      } as React.CSSProperties}
      className="relative isolate [contain:layout_style] [perspective:800px] transition-transform duration-[var(--duration)] ease-[var(--easing)] will-change-transform w-[320px] [aspect-ratio:17/21]"
      onPointerMove={(event) => {
        const rotateFactor = 0.4;
        const rect = event.currentTarget.getBoundingClientRect();
        const position = {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        };
        const percentage = {
          x: (100 / rect.width) * position.x,
          y: (100 / rect.height) * position.y,
        };
        const delta = {
          x: percentage.x - 50,
          y: percentage.y - 50,
        };

        const { background, rotate, glare } = state.current;
        background.x = 50 + percentage.x / 4 - 12.5;
        background.y = 50 + percentage.y / 3 - 16.67;
        rotate.x = -(delta.x / 3.5) * rotateFactor;
        rotate.y = (delta.y / 2) * rotateFactor;
        glare.x = percentage.x;
        glare.y = percentage.y;

        updateStyles();
      }}
      onPointerEnter={() => {
        isPointerInside.current = true;
        setTimeout(() => {
          if (isPointerInside.current) {
            refElement.current?.style.setProperty("--duration", "0s");
          }
        }, 100);
      }}
      onPointerLeave={() => {
        isPointerInside.current = false;
        resetStyles();
      }}
    >
      <div className="relative h-full grid origin-center [transform:rotateY(var(--r-x))_rotateX(var(--r-y))] rounded-[var(--radius)] border border-slate-800 overflow-hidden transition-transform duration-[var(--duration)] ease-[var(--easing)]">
        {/* Interactive background foil + glare */}
        <div
          className="absolute inset-0 z-0 pointer-events-none mix-blend-color-dodge opacity-[var(--opacity)] will-change-transform"
          style={{
            backgroundBlendMode: "hue, hue, hue, overlay",
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                rgb(255,119,115) 5%,
                rgba(255,237,95,1) 10%,
                rgba(168,255,95,1) 15%,
                rgba(131,255,247,1) 20%,
                rgba(120,148,255,1) 25%,
                rgb(216,117,255) 30%,
                rgb(255,119,115) 35%
              ),
              radial-gradient(
                farthest-corner circle at var(--m-x) var(--m-y),
                rgba(255,255,255,0.6) 10%,
                rgba(255,255,255,0.1) 90%
              )
            `,
            backgroundPosition: "var(--bg-x) var(--bg-y)",
            backgroundSize: "200% 200%",
            backgroundRepeat: "no-repeat",
            clipPath: "inset(0 0 0 0 round var(--radius))",
            transition: "opacity 0.3s ease",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end h-full p-4 gap-4">
          <div className={cn(bgColor, textColor, "rounded-xl p-4", className)}>
            {children}
            <a
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "mt-4 inline-block px-4 py-2 text-sm rounded-md border border-white/20 transition-all",
                hoverColor
              )}
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
