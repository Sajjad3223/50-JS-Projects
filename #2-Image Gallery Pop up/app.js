var images = document.querySelectorAll('.img-container img');
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.full-img');

images.forEach(e=>{
    e.addEventListener('click',function(){
        var imageName = e.getAttribute('alt');
        modalImage.src = `img/full/${imageName}.jpg`;

        modal.classList.add('open');
        modalImage.classList.add('open');
    })
})

modal.addEventListener('click',function(e){
    if(e.target.classList.contains('modal')){
        modal.classList.remove('open');
        modalImage.classList.remove('open');
    }
})