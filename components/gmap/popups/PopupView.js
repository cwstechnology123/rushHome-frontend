import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { createPopups } from "./Popup";

export default function OverlayView({
  position,
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
    createPopups(container, position)
  ), [container, position]);

  useEffect(() => {
    overlay?.setMap(map);
    return () => overlay?.setMap(null)
  }, [map, overlay]);

  useEffect(() => {
    container.style.zIndex = `${zIndex}`;
  }, [zIndex, container]);

  return createPortal(children, container);
}