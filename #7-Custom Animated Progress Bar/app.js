const progress = document.querySelector('.progress-done');

setTimeout(() =>{
    const done = progress.getAttribute('data-done') + "%";
    progress.style.width = done;
    progress.style.opacity = 1;
    progress.innerText = done;
}, 500)