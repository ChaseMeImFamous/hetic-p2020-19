window.onload = function(){
    let wrapper = document.querySelector('.intro__content'),
        layerText = document.querySelector('.intro__headerTitle'),
        layerImg = document.querySelector('.intro__contentPoster');
    wrapper.addEventListener('mousemove',function(e){
        let pageX = e.clientX,
            pageY = e.clientY,
            transX = pageX/-30,
            transY = pageY/-20;

        layerText.style.webkitTransform = 'translateX(' + transX + '%) translateY(' + transY + '%)';
        layerText.style.transform = 'translateX(' + transX + '%) translateY(' + transY + '%)';
        layerImg.style.webkitTransform = 'translateX(' + pageX/250 + '%) translateY(' + pageY/350 + '%)';
        layerImg.style.transform = 'translateX(' + pageX/250 + '%) translateY(' + pageY/350 + '%)';
        wrapper.style = 'background-position:'+ pageX/200 +'px center';
    });

    window.addEventListener('deviceorientation', function (e) {

        let beta = e.beta,
            gamma = e.gamma;
        setTimeout(function () {
            normalizeData(gamma, beta);
        }, 100);

        function normalizeData(_gamma, _beta){

            let a = Math.round(_gamma),
                b = Math.round(_beta);

            let transY,
                transX;

            transX = (a ) / 2;
            transY = (b - 90 ) / 2;

            if (transY >= 20) {
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

            layerText.style.webkitTransform = 'translateX(' + -transX + '%) translateY(' + -transY + '%)';
            layerText.style.transform = 'translateX(' + -transX + '%) translateY(' + -transY + '%)';
            layerImg.style.webkitTransform = 'translateX(' + transX + '%) translateY(' + transY + '%)';
            layerImg.style.transform = 'translateX(' + transX + '%) translateY(' + transY + '%)';
        }
    });

};
