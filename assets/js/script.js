window.addEventListener('load', function () {
    // Hide the loader
    document.querySelector('.loader').style.display = 'none';

    // Show the main content
    document.querySelector('main').style.display = 'block';
});
$(document).ready(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

let toggleIocn = document.querySelector(".toggle-icon");
let responsiveNavBar = document.querySelector(".responsive-navbar");
toggleIocn.addEventListener("click", () => {
    console.log("hello")
    responsiveNavBar.classList.toggle("active-nav")
})

