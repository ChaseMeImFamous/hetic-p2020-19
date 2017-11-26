export class WaypointJS {
  constructor() {
  }
}

var waypoint = new Waypoint ({
  element: document.querySelector('#waypoint'),
  handler: function(direction) {
    this.element.classList.toggle('down', direction === 'down')
  },
  offset: 'bottom-in-view'
})
