let courses = document.getElementById('nav-courses-main');
let changer = document.getElementById("nav-courses");

let courses2 = document.getElementById('nav-courses-main2');
let changer2 = document.getElementById("nav-projects");

if (window.screen.width > 1500) {
    courses.addEventListener("mouseenter", function () {
        changer.classList.add("nav");
    })

    courses.addEventListener("mouseleave", function () {
        changer.classList.remove("nav");
    })

    courses2.addEventListener("mouseenter", function () {
        changer2.classList.add("nav");
    })

    courses2.addEventListener("mouseleave", function () {
        changer2.classList.remove("nav");
    })
}

let text_removal =  document.getElementById('banner_text_desc2');
let image_removal = document.getElementsByClassName('banner-vector');
if (window.screen.width < 850){
    text_removal.remove();
    image_removal[0].remove();
}