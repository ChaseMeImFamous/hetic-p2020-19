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

    window.addEventListener('deviceorientation', function (e) {

        beta = e.beta;
        gamma = e.gamma;
        setTimeout(function(){
            normalizeData(gamma, beta)
        }, 50)

        function normalizeData(_g, _b){

            b = Math.round(_b);
            g = Math.round(_g);

            transY += (g - transY) / 5;
            transX += (b - transX) / 5;

            layerText.style.webkitTransform = 'translateX(' + transX + '%) translateY(' + transY + 'px)';
            layerText.style.transform = 'translateX(' + transX + '%) translateY(' + transY + 'px)';
            layerImg.style.webkitTransform = 'translateX(' + transX + '%) translateY(' + transY + '%)';
            layerImg.style.transform = 'translateX(' + transX + '%) translateY(' + transY + '%)';
        }
    });


};
