import { useEffect, useState } from "react";

// function getWindowDimensions() {
//     const { innerWidth: width, innerHeight: height } = window;
//     return {
//       width,
//       height
//     };
// }
export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(null);

    useEffect(() => {
      function handleResize() {
        const { innerWidth: width, innerHeight: height } = window;
        setWindowDimensions({
          height,
          width
        });
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return windowDimensions;
}