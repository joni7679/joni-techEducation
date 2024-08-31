let toggleIocn = document.querySelector(".toggle-icon");
let responsiveNavBar = document.querySelector(".responsive-navbar");
toggleIocn.addEventListener("click", () => {
    console.log("hello")
    responsiveNavBar.classList.toggle("active-nav")
})