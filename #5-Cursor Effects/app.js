const mouseCursor = document.querySelector('.cursor');
const navLinks = document.querySelectorAll('.nav-links li');

window.addEventListener('mousemove', cursor);

function cursor(e){
    let pageX = e.pageX;
    let pageY = e.pageY;

    mouseCursor.style.top = pageY + "px";
    mouseCursor.style.left = pageX + "px";
}

navLinks.forEach(link => {
    link.addEventListener('mouseover',function(){
        link.classList.add('hovered-link');
        mouseCursor.classList.add('link-grow');
    })
    link.addEventListener('mouseleave',function(){
        link.classList.remove('hovered-link');
        mouseCursor.classList.remove('link-grow');
    })
});