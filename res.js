window.addEventListener('scroll', function() {
  let scrollPosition = window.scrollY;
  let image = document.getElementsByClassName('food')[0]
  image.style.transform = 'translateX(-'+scrollPosition*2.5+'px) rotate(-' + scrollPosition/1.8 + 'deg)';
  let fadeOutElement = document.querySelector('.main2');
let opacity = 1 - (scrollPosition / 160 ); 

fadeOutElement.style.opacity = opacity;
});