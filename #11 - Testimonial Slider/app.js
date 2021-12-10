const slides = document.querySelectorAll('.slider .slide');
const indicators = document.querySelectorAll('.indicator img');

let activeSlide = document.querySelector('.slide.active');
let activeIndicator = document.querySelector('img.active');

indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        const dataId = indicator.getAttribute('data-id');
        
        slides[dataId].classList.add('active');
        indicator.classList.add('active');

        activeSlide.classList.remove('active');
        activeIndicator.classList.remove('active');

        activeSlide = slides[dataId];
        activeIndicator = indicator;
    })
})