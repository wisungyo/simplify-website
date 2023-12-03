"use client";

import React, { ReactNode, useRef, useState } from "react";

interface HorizontalScrollProps {
  children: ReactNode;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children }) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const startX = useRef<number>(0);
  const scrollLeft = useRef<number>(0);

  const handleMouseDown = (e: any) => {
    setIsDragging(true);
    startX.current = e.pageX - e.currentTarget.offsetLeft;
    scrollLeft.current = e.currentTarget.scrollLeft;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: any) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX.current) * 3;
    e.currentTarget.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <>
      <div
        className={`overflow-x-auto whitespace-nowrap py-2 ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {children}
      </div>
    </>
  );
};

export default HorizontalScroll;
