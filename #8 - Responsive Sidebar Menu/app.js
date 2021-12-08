const toggleBtn = document.querySelector('.toggle-btn');
const navbar = document.querySelector('.main-header');
const overlay = document.querySelector('.overlay');

toggleBtn.addEventListener('click',function(){
    toggleBtn.classList.toggle('open');
    navbar.classList.toggle('open');
    overlay.classList.toggle('open');
})

overlay.addEventListener('click',function(){
    toggleBtn.classList.remove('open');
    navbar.classList.remove('open');
    overlay.classList.remove('open');
})