var modal = document.getElementsByClassName('modal-container')[0];
var openBtn = document.querySelector('.open');
var closeBtn = document.querySelector('.modal-btn');

openBtn.addEventListener('click',function(){
    modal.classList.add('show');
})

closeBtn.addEventListener('click',function(){
    modal.classList.remove('show');
})