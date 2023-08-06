import { useState, useEffect, useMemo } from "react";

const useBreakpoint = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const breakpoint = useMemo(() => {
    if (windowWidth < 640) {
      return "sm";
    } else if (windowWidth < 768) {
      return "md";
    } else if (windowWidth < 1024) {
      return "lg";
    } else {
      return "xl";
    }
  }, [windowWidth]);

  return breakpoint;
};

export default useBreakpoint;
