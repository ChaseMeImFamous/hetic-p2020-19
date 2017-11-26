import { Vivus } from '../../node_modules/vivus/dist/vivus';

export class SVGAnimate {
  constructor() {
  }
}


  let SVGAnimation = new Vivus('second__image', {
  file: '../img/second_imageSVG.svg'});

  SVGAnimation.reset();
  SVGAnimation.play();
