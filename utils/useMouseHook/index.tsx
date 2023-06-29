import Image from "next/image";
import { useState, useEffect } from "react";

const useMousePosition = (delay = 100) => {
  const [position, setPosition] = useState({
    clientX: 0,
    clientY: 0,
  });

  const updatePosition = (event: any) => {
    const { pageX, pageY, clientX, clientY } = event;

    setTimeout(() => {
      setPosition({
        clientX,
        clientY,
      });
    }, delay);
  };

  useEffect(() => {
    document.addEventListener("mousemove", updatePosition, false);
    document.addEventListener("mouseenter", updatePosition, false);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseenter", updatePosition);
    };
  }, []);

  return position;
};

export default useMousePosition;
