const sections = document.querySelectorAll('section');
const trans = document.querySelector('.trans');
const gradients = ["coral","chartreuse","chocolate","cadetblue"];

const options = {
    threshold : 0.7
};

let observer = new IntersectionObserver(navScroll,options);

sections.forEach(section => {
    observer.observe(section);
});

function navScroll(entries){
    entries.forEach(function(entry){
        console.log(entry);
        const className = entry.target.className;
        const activeLink = document.querySelector(`[data-page="${className}"]`);
        const elementIndex = entry.target.getAttribute('data-index');
        const coord = activeLink.getBoundingClientRect();
        const dir = {
            height : coord.height,
            width : coord.width,
            top : coord.top,
            left : coord.left
        };

        if(entry.isIntersecting){
            trans.style.setProperty('height',`${dir.height}px`);
            trans.style.setProperty('width',`${dir.width}px`);
            trans.style.setProperty('top',`${dir.top}px`);
            trans.style.setProperty('left',`${dir.left}px`);

            trans.style.backgroundColor = gradients[elementIndex];
        }

    })
}