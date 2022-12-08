export function createOverlay(container, pane, position){
    class Overlay extends google.maps.OverlayView {
      container;
      pane;
      position;
      constructor(container, pane, position){
        super();
        this.container = container;
        this.pane = pane;
        this.position = position;
      }
      onAdd() {
        const pane = this.getPanes()?.[this.pane];
        pane?.appendChild(this.container);
      }
  
      draw() {
        const projection = this.getProjection();
        const point = projection.fromLatLngToDivPixel(this.position);
  
        if (point === null) {
          return;
        }
        this.container.style.left = `${point.x}px`;
        this.container.style.top = `${point.y}px`;
        //this.container.style.transform = `translate(${point.x}px, ${point.y}px)`;
      }
  
      onRemove() {
        if (this.container.parentNode !== null) {
          this.container.parentNode.removeChild(this.container);
        }
      }
    }
    return new Overlay(container, pane, position);
  }


// export function createOverlay(container, pane, position ) {

//     class Overlay extends google.maps.OverlayView {
//         container;
//         pane;
//         position;
//         constructor(container, pane, position){
//             super();
//             this.container = container;
//             this.pane = pane;
//             this.position = position;
//         }

//         createDiv() {
//             this.container = document.createElement('div');
//             this.container.style.position = 'absolute';
//             // if (this.html) {
//             //   this.container.innerHTML = this.html;
//             // }
//             // google.maps.event.addListener(this.container, 'click', event => {
//             //   google.maps.event.trigger(this, 'click');
//             // });
//         }
        
//         appendDivToOverlay() {
//             const panes = this.getPanes()?.[this.pane];
//             panes?.overlayLayer.appendChild(this.container);
//         }

//         positionDiv() {
//             const point = this.getProjection().fromLatLngToDivPixel(this.position);
//             if (point === null) {
//                 return;
//             }
//             this.container.style.left = `${point.x}px`;
//             this.container.style.top = `${point.y}px`;
            
//             // this.container.style.transform = `translate(${point.x}px, ${point.y}px)`;
//         }

//         draw() {
//             if (!this.container) {
//               this.createDiv();
//               this.appendDivToOverlay();
//             }
//             this.positionDiv();
//         }

//         remove() {
//             // if (this.container) {
//             //   this.container.parentNode.removeChild(this.container);
//             //   //this.container = null;
//             // }
//             if (this.container.parentNode !== null) {
//                 this.container.parentNode.removeChild(this.container);
//             }
//         }
    
//         getPosition() {
//             return this.position;
//         }
    
//         getDraggable() {
//             return false;
//         }
//     }

//     return new Overlay(container, pane, position);
// }