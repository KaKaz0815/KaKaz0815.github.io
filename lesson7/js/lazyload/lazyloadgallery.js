const images = document.querySelectorAll("[data=src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src){
        return;
    }
    img.src = src;
}


const imgOptions = {
    threshold:1,
    rootMargin: "0px 0px -500px 0px"
};

const imgObserver = new IntersectionObserver((entries, dataObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }
        else {
           preloadImage(entry.target);
           imgOberserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
})