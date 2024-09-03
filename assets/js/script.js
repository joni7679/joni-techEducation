
function loadAnimation() {
    window.addEventListener('load', function () {
        // Hide the loader
        document.querySelector('.loader').style.display = 'none';

        // Show the main content
        document.querySelector('main').style.display = 'block';
    });
}
loadAnimation()

function counteranimation() {
    $(document).ready(function () {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    });

}

counteranimation()

function responsiveNavBar() {
    let toggleIocn = document.querySelector(".toggle-icon");
    let responsiveNavBar = document.querySelector(".responsive-navbar-mobile ");
    toggleIocn.addEventListener("click", () => {
        console.log("hello")
        responsiveNavBar.classList.toggle("active-nav")
    })
}
responsiveNavBar()


// couse list box 
let courseItems = document.querySelectorAll(".course-item");

courseItems.forEach((item) => {
    item.addEventListener("click", () => {
        // Remove 'active' class from all course items
        courseItems.forEach(tab => tab.classList.remove('active'));        
        // Add 'active' class to the clicked item
        item.classList.add('active');
    });
});
