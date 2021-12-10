const keyContainers = document.querySelectorAll('.keys');
const textArea = document.querySelector('.display textarea');

keyContainers.forEach(key => {
    key.addEventListener('click',function(k){
        if(!k.path[0].value) return;
        textArea.value += k.path[0].value.toLowerCase();
    })
})