import React, { useRef, useEffect, useState } from "react";

export function ExampleComponent() {
  const elementRef = useRef(null);
  const [elementPosition, setElementPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      setElementPosition({
        top: rect.top,
        left: rect.left
      });
    }
  }, []);

  return (
    <div>
      <div ref={elementRef} style={{ width: "200px", height: "100px", background: "lightblue" }}>
        This is the element.
      </div>
      <p>Top: {elementPosition.top}px</p>
      <p>Left: {elementPosition.left}px</p>
    </div>
  );
}
