"use client";

import { useState, ReactNode, cloneElement, isValidElement } from "react";
import { createPortal } from "react-dom";

interface TooltipProps {
  content: string;
  children: ReactNode;
}

export default function Tooltip({ content, children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      {isValidElement(children)
        ? cloneElement(children as any, {
            onMouseEnter: () => setIsVisible(true),
            onMouseLeave: () => setIsVisible(false),
            onMouseMove: handleMouseMove,
          })
        : children}

      {isVisible &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="animate-in fade-in pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-full pb-3 drop-shadow-sm duration-200"
            style={{ left: coords.x, top: coords.y }}
          >
            <div className="bg-fg text-bg rounded-md px-2.5 py-1.5 text-xs font-medium tracking-wide">
              {content}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
