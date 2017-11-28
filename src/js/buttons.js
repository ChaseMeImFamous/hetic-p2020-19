let buttonBlack = document.querySelector('.intro__footerCenterTextBlack');
let buttonWhite = document.querySelector('.intro__footerCenterTextWhite');
let imageChange = document.querySelector('.intro__contentPoster');

buttonBlack.addEventListener('click', function(e){
  e.preventDefault();
  imageChange.src = "img/intro__leicaM10.png";
});

buttonWhite.addEventListener('click', function(e){
  e.preventDefault();
  imageChange.src = "img/intro__leicaM10--white.png";
});
