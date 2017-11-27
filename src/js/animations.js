import 'waypoints/lib/noframework.waypoints.min';
import vivus from 'vivus';
import tns from 'tiny-slider';

const SVGAnimation = new Vivus('svg--animated', {
  type: 'oneByOne',
  duration: 500,
  animTimingFunction: Vivus.EASE
});

const second = new Waypoint({
  element: document.querySelector('#second__waypoints'),
  handler: function(direction) {
    SVGAnimation.play();
  },
  offset: '60%'
})

const third = new Waypoint({
  element: document.querySelector('#third__waypoints'),
  handler: function(direction) {
    this.element.classList.add('down', direction === 'down')
  },
  offset: '60%'
})

const sixth__slider = tns({
  container: '.sixth__slider',
  navContainer: ".sixth__thumbnails",
  items: 1,
  mouseDrag: true,
  controls: false
});

const seventh__slider = tns({
  container: '.seventh__slider',
  items: 1,
  mouseDrag: true,
  controls: false,
  nav: false,
  edgePadding: 50,
  responsive: {
    1040: {
      edgePadding: 400
    }
  }
});
