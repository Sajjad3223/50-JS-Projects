const html = document.documentElement;
const toggleBtn = document.querySelector('#toggle');

toggleBtn.addEventListener('change',function(){
    if(toggleBtn.checked)
    {
        html.setAttribute('data-theme',"dark");
        html.classList.toggle('transition');
    }
    else{
        html.setAttribute('data-theme',"light");
        html.classList.toggle('transition');
    }
})