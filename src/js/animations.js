export class Animations {
  
}

  let SVGAnimation = new Vivus('svg--animated');

  let third = new Waypoint ({
    element: document.querySelector('#third__waypoints'),
    handler: function(direction) {
      this.element.classList.toggle('down', direction === 'down')
    },
    offset: '10%'
  })

  let second = new Waypoint ({
    element: document.querySelector('#second__waypoints'),
    handler: function(direction) {
      SVGAnimation.play();
    },
    offset: '10%'
  })
