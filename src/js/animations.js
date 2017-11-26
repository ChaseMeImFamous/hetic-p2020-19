export class Animations {

}

let SVGAnimation = new Vivus('svg--animated');

let second = new Waypoint({
  element: document.querySelector('#second__waypoints'),
  handler: function(direction) {
    SVGAnimation.play();
  },
  offset: '60%'
})

let third = new Waypoint({
  element: document.querySelector('#third__waypoints'),
  handler: function(direction) {
    this.element.classList.add('down', direction === 'down')
  },
  offset: '60%'
})

let slider = tns({
  container: '.sixth__slider',
  navContainer: ".sixth__thumbnails",
  items: 1,
  mouseDrag: true,
  controls: false
});
