import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { createOverlay } from "./Overlay";

export default function OverlayView({
  position,
  pane = "floatPane",
  map,
  zIndex,
  children
}) {
  const container = useMemo(() => {
    const div = document.createElement("div");
    div.style.position = "absolute";
    return div;
  }, []);

  const overlay = useMemo(() => (
    createOverlay(container, pane, position)
  ), [container, pane, position]);

  useEffect(() => {
    overlay?.setMap(map);
    return () => overlay?.setMap(null)
  }, [map, overlay]);

  useEffect(() => {
    container.style.zIndex = `${zIndex}`;
  }, [zIndex, container]);

  return createPortal(children, container);
  // return ReactDOM.render(children, container);
}