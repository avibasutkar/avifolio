import React, { useEffect, useState, useRef } from 'react';

export const JarvisCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<{ x: number; y: number }>({ x: -100, y: -100 });
  const ringRef = useRef<{ x: number; y: number }>({ x: -100, y: -100 });
  const targetRef = useRef<{ x: number; y: number }>({ x: -100, y: -100 });
  const dotElementRef = useRef<HTMLDivElement | null>(null);
  const ringElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check if device has fine pointer and does not prefer reduced motion
    const hasMouse = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hasMouse || prefersReducedMotion) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check if hovering over clickable element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = Boolean(
          target.closest('a, button, input, textarea, select, [role="button"], label, .interactive-hover')
        );
        setIsHovered(isClickable);
      }
    };

    const onMouseDown = () => setIsMouseDown(true);
    const onMouseUp = () => setIsMouseDown(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    let animationFrameId: number;

    const animate = () => {
      // Direct position for central dot
      dotRef.current.x = targetRef.current.x;
      dotRef.current.y = targetRef.current.y;

      // Smooth lag / interpolation for outer ring (JARVIS HUD tracking effect)
      ringRef.current.x += (targetRef.current.x - ringRef.current.x) * 0.2;
      ringRef.current.y += (targetRef.current.y - ringRef.current.y) * 0.2;

      if (dotElementRef.current) {
        dotElementRef.current.style.transform = `translate3d(${dotRef.current.x}px, ${dotRef.current.y}px, 0)`;
      }

      if (ringElementRef.current) {
        ringElementRef.current.style.transform = `translate3d(${ringRef.current.x}px, ${ringRef.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!enabled || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Central Precision Target Dot */}
      <div
        ref={dotElementRef}
        className={`fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full pointer-events-none transition-colors duration-200 ${
          isHovered
            ? 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]'
            : 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* Outer Tactical Reticle Ring with 4 HUD Tick Marks */}
      <div
        ref={ringElementRef}
        className={`fixed top-0 left-0 pointer-events-none transition-all duration-300 ease-out ${
          isHovered
            ? 'w-10 h-10 -ml-5 -mt-5 rotate-45 border-amber-400/80'
            : isMouseDown
            ? 'w-6 h-6 -ml-3 -mt-3 border-cyan-300'
            : 'w-8 h-8 -ml-4 -mt-4 border-cyan-400/50'
        }`}
        style={{ willChange: 'transform' }}
      >
        {/* Reticle Circle */}
        <div
          className={`w-full h-full rounded-full border border-dashed transition-all duration-300 ${
            isHovered
              ? 'border-amber-400/70 scale-110 shadow-[0_0_12px_rgba(245,158,11,0.3)]'
              : 'border-cyan-400/40'
          }`}
        />

        {/* Tactical Crosshair / HUD Corner Ticks */}
        <span
          className={`absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-[2px] transition-colors duration-200 ${
            isHovered ? 'bg-amber-400' : 'bg-cyan-400/60'
          }`}
        />
        <span
          className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-[2px] transition-colors duration-200 ${
            isHovered ? 'bg-amber-400' : 'bg-cyan-400/60'
          }`}
        />
        <span
          className={`absolute top-1/2 -left-1 -translate-y-1/2 h-1 w-[2px] transition-colors duration-200 ${
            isHovered ? 'bg-amber-400' : 'bg-cyan-400/60'
          }`}
        />
        <span
          className={`absolute top-1/2 -right-1 -translate-y-1/2 h-1 w-[2px] transition-colors duration-200 ${
            isHovered ? 'bg-amber-400' : 'bg-cyan-400/60'
          }`}
        />
      </div>
    </div>
  );
};

