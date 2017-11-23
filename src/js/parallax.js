export class Parallax {
  constructor() {
  }
}

window.onload = function(){
    let wrapper = document.querySelector('.intro__content'),
        layerText = document.querySelector('.intro__headerTitle'),
        layerImg = document.querySelector('.intro__contentVideo');//a changer par le poster

    wrapper.addEventListener('mousemove',function(e){
        let pageX = e.clientX,
            pageY = e.clientY;

        layerText.style.webkitTransform = 'translateX(' + pageX/-17 + '%) translateY(' + pageY/-50 + '%)';
        layerText.style.transform = 'translateX(' + pageX/-17 + '%) translateY(' + pageY/-50 + '%)';
        layerImg.style.webkitTransform = 'translateX(' + pageX/250 + '%) translateY(' + pageY/350 + '%)';
        layerImg.style.transform = 'translateX(' + pageX/250 + '%) translateY(' + pageY/350 + '%)';
        wrapper.style = 'background-position:'+ pageX/200 +'px center';
    });

    window.addEventListener('deviceorientation', function (event) {

        let beta = event.beta,
            gamma = event.gamma;
        setTimeout(function () {
            console.log("beta " + beta);
            console.log("gamma " + gamma);
            normalizeData(gamma, beta);
        }, 50);

        function normalizeData(_gamma, _beta){

            let a = Math.round(_gamma),
                b = Math.round(_beta);

            console.log("G " + a);
            console.log("B " + b);

            let transY,
                transX;


            transY = (a ) / 2;
            transX = (b - 90 ) / 2;



            if (transY >= 15) {
                transY = 15;
            }
            if (transY <= -15) {
                transY = -15;
            }
            if (transX >= 25) {
                transX = 25;
            }
            if (transX <= -25) {
                transX = -25;
            }

            console.log("TransY " + transY);
            console.log("TransX " + transX);

            layerText.style.webkitTransform = 'translateX(' + transX + '%) translateY(' + transY + 'px)';
            layerText.style.transform = 'translateX(' + transX + '%) translateY(' + transY + 'px)';
            layerImg.style.webkitTransform = 'translateX(' + transX + '%) translateY(' + transY + '%)';
            layerImg.style.transform = 'translateX(' + transX + '%) translateY(' + transY + '%)';
        }
    });


};
