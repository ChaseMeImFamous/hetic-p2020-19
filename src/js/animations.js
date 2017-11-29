import 'waypoints/lib/noframework.waypoints.min';
import Vivus from 'vivus';

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

const sixth = new Waypoint({
  element: document.querySelector('#sixth__waypoints'),
  handler: function(direction) {
    for (var i = 0; i < this.element.childNodes.length; i++)
    {
        this.element.childNodes[i].classList.add('down', direction === 'down')
    }
  },
  offset: '150%'
})

const third = new Waypoint({
  element: document.querySelector('#third__waypoints'),
  handler: function(direction) {
    this.element.classList.toggle('down', direction === 'down')
  },
  offset: '60%'
})

const fourth__slider = tns({
  container: '.fourth__slider',
  items: 1,
  mode: 'gallery',
  speed: 400,
  nav: false,
  controls: false,
  autoplay: true,
  autoplayTimeOut: 3000,
  autoplayButtonOutput: false,
  loop: true
});

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
  edgePadding: 50
});
