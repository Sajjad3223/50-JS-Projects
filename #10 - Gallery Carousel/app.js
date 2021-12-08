let list = document.querySelector('.list');
const imgs = Array.from(list.children);
const nextBtn = document.querySelector('.btn-right');
const prevBtn = document.querySelector('.btn-left');
let index = 0;
let imageWidth = imgs[0].getBoundingClientRect().width;

//Arranging images next to each other
function setImagePosition(img,index){
    img.style.left = (imageWidth * index) + "px";
}

imgs.forEach(setImagePosition);

const moveToImg = function(list,currentImage,targetImage){
    list.style.transform = `translateX(-${targetImage.style.left})`;
    currentImage.classList.remove('current-img');
    targetImage.classList.add('current-img');
}

const hideShowArrows = function (targetIndex){
    
    if(targetIndex === 0){
        prevBtn.classList.add('hidden');
        nextBtn.classList.remove('hidden');
    }
    else if(targetIndex === imgs.length - 1){
        prevBtn.classList.remove('hidden');
        nextBtn.classList.add('hidden');
    }
    else{
        prevBtn.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
    }
}

nextBtn.addEventListener('click',function(){
    const currentImg = list.querySelector('.current-img');
    const nextImg = currentImg.nextElementSibling;
    const nextIndex = imgs.findIndex(function(img){
        return img === nextImg;
    });
    
    moveToImg(list,currentImg,nextImg);
    hideShowArrows(nextIndex);
})

prevBtn.addEventListener('click',function(){
    const currentImg = list.querySelector('.current-img');
    const prevImg = currentImg.previousElementSibling;
    const prevIndex = imgs.findIndex(function(img){
        return img === prevImg;
    });
    
    moveToImg(list,currentImg,prevImg);
    hideShowArrows(prevIndex);
})