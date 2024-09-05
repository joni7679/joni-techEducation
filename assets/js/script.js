
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
    let navOverly = document.querySelector(".nav-overly");
    console.log(navOverly)
    let val = 0
    toggleIocn.addEventListener("click", () => {
        if (val === 0) {
            responsiveNavBar.classList.add("active-nav");
            document.querySelector("body").style.overflow = "hidden"
            navOverly.style.display = "block"
            val = 1
        }
        else {
            responsiveNavBar.classList.remove("active-nav");
            navOverly.style.display = "none"
            document.querySelector("body").style.overflow = "scroll"
            val = 0
        }
    })
    navOverly.addEventListener("click",()=>{
        responsiveNavBar.classList.remove("active-nav");
        navOverly.style.display = "none"
        document.querySelector("body").style.overflow = "scroll"
    })
}
responsiveNavBar()
// couse list box 
function courseDetailsAnimation(){
let courseItems = document.querySelectorAll(".course-item");
let courseDetails = document.querySelectorAll(".course-details");

courseItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // Remove 'active' class from all course items
        courseItems.forEach(tab => tab.classList.remove('active'));
        // Add 'active' class to the clicked item
        item.classList.add('active');

        // Remove 'active-course' class from all course details
        courseDetails.forEach(course => course.classList.remove('active-course'));
        // Add 'active-course' class to the corresponding course details
        courseDetails[index].classList.add('active-course');
    });
});
}
courseDetailsAnimation()

let viewAllBtn = document.querySelector(".view-btn");
let otherCourseSection = document.querySelector(".other-couse-section");
viewAllBtn.addEventListener("click",()=>{
    otherCourseSection.classList.toggle("active-other-course")
})



// stlick silder 
function studentRevieSilder(){
$('.student-review-silder').slick({
    dots: false,
    infinite: true,
    arrows:false,
    speed: 300,
    slidesToShow: 3,
    autoplay:true,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
}
studentRevieSilder()