window.addEventListener('load', function () {
    // Hide the loader
    document.querySelector('.loader').style.display = 'none';

    // Show the main content
    document.querySelector('main').style.display = 'block';
});

let toggleIocn = document.querySelector(".toggle-icon");
let responsiveNavBar = document.querySelector(".responsive-navbar");
toggleIocn.addEventListener("click", () => {
    console.log("hello")
    responsiveNavBar.classList.toggle("active-nav")
})
