export function createPopups(container, position) {
    class Popup extends google.maps.OverlayView {
        position;
        container;
        constructor(container, position) {
          super();
            this.position = position;
            this.container = container;

            // const content = document.createElement("div")
            // content.classList.add("popup-bubble");
    
            // // This zero-height div is positioned at the bottom of the bubble.
            // const bubbleAnchor = document.createElement("div");
    
            // bubbleAnchor.classList.add("popup-bubble-anchor");
            // bubbleAnchor.appendChild(content);
            if(!this.container){
                this.container = document.createElement("div");
                this.container.style.position = "absolute";
            }
        //   // This zero-height div is positioned at the bottom of the tip.
        //   this.containerDiv = document.createElement("div");
            this.container.classList.add("popup-container");
            //this.container.appendChild(content);
    
            // Optionally stop clicks, etc., from bubbling up to the map.
            Popup.preventMapHitsAndGesturesFrom(this.container);
        }
    
        /** Called when the popup is added to the map. */
        onAdd() {
            const pane = this.getPanes();
            pane?.floatPane.appendChild(this.container);
        }
    
        /** Called when the popup is removed from the map. */
        onRemove() {
          if (this.container.parentElement) {
            this.container.parentElement.removeChild(this.container);
          }
        }
    
        /** Called each frame when the popup needs to draw itself. */
        draw() {
            const projection = this.getProjection();
            const divPosition = projection.fromLatLngToDivPixel(this.position);
    
            // Hide the popup when it is far out of view.
            const display =
                Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000
                ? "block"
                : "none";
        
            if (display === "block") {
                this.container.style.left = divPosition.x + "px";
                this.container.style.top = divPosition.y + "px";
            }
        
            if (this.container.style.display !== display) {
                this.container.style.display = display;
            }
        }
    }
    return new Popup(container, position);
}