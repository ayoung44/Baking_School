// mainslide
// li[0]이 기본화면
const mainSlider = document.querySelector('.mainslide .slider');
const mainSlideLi = document.querySelectorAll('.mainslide .slider > li');
mainSlideLi[0].classList.add('on');

// open sidebar button
const openSidebar = $('.btn-open-menu');
openSidebar.click(function() {
  $('.sidebar').slideToggle();
});