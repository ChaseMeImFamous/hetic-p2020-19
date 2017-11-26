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
            pageY = e.clientY,
            transX = pageX/-25,
            transY = pageY/-5;

            if (transX >= -15) {
                transX = -15;
            }
            if (transX <= -90) {
                transX = -90;
            }

        layerText.style.webkitTransform = 'translateX(' + transX + '%) translateY(' + transY + 'px)';
        layerText.style.transform = 'translateX(' + transX + '%) translateY(' + transY + 'px)';
        layerImg.style.webkitTransform = 'translateX(' + pageX/250 + '%) translateY(' + pageY/350 + '%)';
        layerImg.style.transform = 'translateX(' + pageX/250 + '%) translateY(' + pageY/350 + '%)';
        wrapper.style = 'background-position:'+ pageX/200 +'px center';
    });

    window.addEventListener('deviceorientation', function (event) {

        let beta = event.beta,
            gamma = event.gamma;
        setTimeout(function () {
            normalizeData(gamma, beta);
        }, 50);

        function normalizeData(_gamma, _beta){

            let a = Math.round(_gamma),
                b = Math.round(_beta);

            let transY,
                transX;

            transX = (a ) / 2;
            transY = (b - 90 ) / 2;

            if (transY >= 0) {
                transY = 0;
            }
            if (transY <= -10) {
                transY = -10;
            }
            if (transX >= 25) {
                transX = 25;
            }
            if (transX <= -25) {
                transX = -25;
            }

            layerText.style.webkitTransform = 'translateX(' + -transX + '%) translateY(' + -transY + 'px)';
            layerText.style.transform = 'translateX(' + -transX + '%) translateY(' + -transY + 'px)';
            layerImg.style.webkitTransform = 'translateX(' + transX + '%) translateY(' + transY + '%)';
            layerImg.style.transform = 'translateX(' + transX + '%) translateY(' + transY + '%)';
        }
    });

};
