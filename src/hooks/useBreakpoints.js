import { useState, useEffect } from "react";
import useWindowDimensions from "./useWindowDimensions";

function useBreakpoints() {
  const tailwindcssBrakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
  };

  const [Breakpoint, setBreakpoint] = useState(null);
  const windowDimensions = useWindowDimensions();

  useEffect(() => {
    //Zerowanie wartości,
    //jeżeli nie wystąpił breakpoint, wartość null pozostanie i będzie zwórcona
    setBreakpoint(null);
    for (const [breakpointName, breakpointWidth] of Object.entries(
      tailwindcssBrakpoints
    )) {
      if (breakpointWidth <= windowDimensions.width)
        setBreakpoint(breakpointName);
    }
  }, [windowDimensions]);

  return Breakpoint;
}

export default useBreakpoints;
