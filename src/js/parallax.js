export class Parallax {
  constructor() {
  }
}

window.onload = function(){
    let wrapper = document.querySelector('.intro__content'),
        layerText = document.querySelector('.intro__headerTitle'),
        layerImg = document.querySelector('.intro__contentVideo');

    wrapper.addEventListener('mousemove',function(e){
        let pageX = e.clientX,
            pageY = e.clientY;
        layerText.style.webkitTransform = 'translateX(' + pageX/-17 + '%) translateY(' + pageY/-50 + '%)';
        layerText.style.transform = 'translateX(' + pageX/-17 + '%) translateY(' + pageY/-50 + '%)';
        layerImg.style.webkitTransform = 'translateX(' + pageX/250 + '%) translateY(' + pageY/350 + '%)';
        layerImg.style.transform = 'translateX(' + pageX/250 + '%) translateY(' + pageY/350 + '%)';
        wrapper.style = 'background-position:'+ pageX/200 +'px center';
    });
}
