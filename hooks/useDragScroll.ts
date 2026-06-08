import { useRef, useState, useCallback, useEffect } from "react";

export function useDragScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    // Disable smooth scrolling while dragging to avoid fighting with the manual scroll
    scrollRef.current.style.scrollBehavior = "auto";
    scrollRef.current.style.scrollSnapType = "none";
  }, []);

  const onMouseLeave = useCallback(() => {
    if (!isDragging || !scrollRef.current) return;
    setIsDragging(false);
    // Restore smooth scrolling and snapping
    scrollRef.current.style.scrollBehavior = "smooth";
    scrollRef.current.style.scrollSnapType = "x mandatory";
  }, [isDragging]);

  const onMouseUp = useCallback(() => {
    if (!isDragging || !scrollRef.current) return;
    setIsDragging(false);
    // Restore smooth scrolling and snapping
    scrollRef.current.style.scrollBehavior = "smooth";
    scrollRef.current.style.scrollSnapType = "x mandatory";
  }, [isDragging]);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, scrollLeft, startX]);

  return {
    scrollRef,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onMouseMove,
    isDragging
  };
}
