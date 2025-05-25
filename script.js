
// Landing SliderShow:
const list = document.querySelector('.slider .list');
const item = document.querySelectorAll('.slider .list .item');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let active = 0;
let lengthItem = item.length - 1;

next.onclick = function(){
    if(active + 1 > lengthItem){
        active = 0;
    }else{
        active = active + 1;
    }
    
    reloadSlider();
}

prev.onclick = function(){
    if(active - 1 < 0){
        active = lengthItem;
    }else{
        active = active - 1;
    }
    reloadSlider();
}
let refreshSlider = setInterval(()=> {next.click()}, 5000);
function reloadSlider(){
    let checkLeft = item[active].offsetLeft;
    list.style.left = -checkLeft + 'px'

    clearInterval(refreshSlider);
    refreshSlider = setInterval(()=> {next.click()}, 5000);

}

// Smooth Scroll JavaScript -->
document.querySelector('.scroll-to-top').addEventListener("click", function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.querySelector('.scroll-to-top').addEventListener("click", function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.querySelector('.toggle-menu').addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector('.mega-menu').classList.toggle('active');
});

document.addEventListener("click", function(event) {
    const megaMenu = document.querySelector(".mega-menu");
    const toggleMenu = document.querySelector(".toggle-menu");
    if (!toggleMenu.contains(event.target) && !megaMenu.contains(event.target)) {
        megaMenu.classList.remove("active");
    }
});
//---------------- scroll down
document.querySelectorAll('a[href="#header"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

// ------------------------------------------------------------
// gallery
document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".gallery .box");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show");
                }, index * 300); // Delay each box by 300ms
            }
        });
    }, { threshold: 0.3 });

    boxes.forEach((box) => {
        observer.observe(box);
    });
});
// testimonial
document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".testimonial.box");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show");
                }, index * 300); // Delay each box by  300ms
            }
        });
    }, { threshold: 0.3 });
                                    
    boxes.forEach((box) => {                                      
        observer.observe(box);
    });
});




const boxes = document.querySelectorAll('.box');

        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('show');
                    }, index * 300); // Delay increases with each item (300ms per item)
                }
            });
        }, { threshold: 0.5 });

        boxes.forEach(box => {
            observer.observe(box);
        });
// Scroll Up Button:








const scrollUpButton = document.getElementById('scroll-up');

window.onscroll = function(){
    scrollFunc();
};

function scrollFunc(){
    if( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrollUpButton.style.display = "block";
    }else{
        scrollUpButton.style.display = "none";
    }
};

function topScroll(){
    document.documentElement.scrollTop = 0;
};

// ------------------------------------------------------------
// Event Countdown:

const eventTime = new Date("Jan 1, 2025 15:30:00").getTime();

const interval = setInterval(() => {
    const now = new Date().getTime();
    const duration = eventTime - now;

    // If the countdown is finished
    if(duration < 0){
        clearInterval(interval);
        updateDuration(0);
        return;
    }

    updateDuration(duration);

}, 1000);

function updateDuration(duration){

    //imp:
    // 1000 milliseconds = 1 second
    // 60 * 1000 milliseconds = 1 minute
    // 60 * 60 * 1000 milliseconds = 1 hour
    // 24 * 60 * 60 * 1000 milliseconds = 1 day

    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}

 // Function to check if element is in viewport
 function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add 'visible' class when in viewport
function showBoxes() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        if (isInViewport(box)) {
            box.classList.add('visible');
        }
    });
}

// Show boxes on load if already in viewport
document.addEventListener('DOMContentLoaded', showBoxes);

// Show boxes when scrolling
window.addEventListener('scroll', showBoxes);

// ------------------------------------------------------------
// FAQs:

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})