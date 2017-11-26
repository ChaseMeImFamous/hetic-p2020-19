export class Animations {

}

  let SVGAnimation = new Vivus('svg--animated');

  let second = new Waypoint ({
    element: document.querySelector('#second__waypoints'),
    handler: function(direction) {
      SVGAnimation.play();
    },
    offset: '10%'
  })

  let third = new Waypoint ({
    element: document.querySelector('#third__waypoints'),
    handler: function(direction) {
      this.element.classList.toggle('down', direction === 'down')
    },
    offset: '10%'
  })

  let slider = tns({
  container: '.sixth__slider',
  navContainer: ".sixth__thumbnails",
  items: 1,
  mouseDrag: true,
  controls: false
  });
