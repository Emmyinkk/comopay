
function openNav() {
    const menuBar = document.querySelector('.hidden-menu');
    let hiddenNav = document.querySelector('.major-hidden_menu');
    
    if((menuBar.classList.contains('open')) === false) {
    menuBar.classList.add('open');
    hiddenNav.style.animationName = 'slideInFromTop';
    // setTimeout(function() {
    //   hiddenNav.classList.add('showed');
    // }, 20)
    } else {
    hiddenNav.style.animationName = 'slideOutToTop';
    setTimeout(function() {
        menuBar.classList.remove('open');
    },320)
        
    }
}


window.onload = function() {
const flexContainer = document.querySelector('.mini-scroll');
const images = flexContainer.querySelectorAll('img');
const scrollSpeed = 2; // Adjust the scroll speed as needed
const totalWidth = flexContainer.scrollWidth; // Total width of all images
let scrollPos = 0;
let isPaused = false;

function scrollImages() {
    if(!isPaused) {
        scrollPos += scrollSpeed;
        if (scrollPos >= totalWidth) {
            scrollPos = 0;
        flexContainer.scrollLeft = 0;
        } else {
            flexContainer.scrollLeft += scrollSpeed;
        }
    }
    
}

    setInterval(scrollImages, 10); // Adjust the interval for smoother or faster scrolling

    // Pause scrolling when the cursor is over the container
    flexContainer.addEventListener('mouseenter', function() {
        isPaused = true;
    });

    // Resume scrolling when the cursor leaves the container
    flexContainer.addEventListener('mouseleave', function() {
        isPaused = false;
    });

    // Pause scrolling when there's a touch input
    flexContainer.addEventListener('touchstart', function() {
        isPaused = true;
    });

    // Resume scrolling when the touch input ends
    flexContainer.addEventListener('touchend', function() {
        isPaused = false;
    });
};



console.clear();

gsap.set('.wrapper',{xPercent:-50,yPercent:-50})


var boxWidth = 150,
totalWidth = boxWidth * 4,  //  * n of boxes
no01 = document.querySelectorAll("#no01 .wrapper-box"),
no02 = document.querySelectorAll("#no02 .wrapper-box"),
dirFromLeft = "+=" + totalWidth,
dirFromRight = "-=" + totalWidth;

var mod = gsap.utils.wrap(0, totalWidth);

function marquee(which, time, direction){
gsap.set(which, {
x:function(i) {
  return i * boxWidth;
}
});
var action = gsap.timeline()
.to(which, {autoAlpha:1, duration:0.1, stagger:-2})
.to(which,  {
x: direction,
modifiers: {
x: x => mod(parseFloat(x)) + "px"
},
duration:time, ease:'none',
repeat:-1,
},0);
return action
}

var master = gsap.timeline()
.add(marquee(no01, 20, dirFromRight))

var master2 = gsap.timeline()
.add(marquee(no02, 20, dirFromLeft))

// =============================





const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    });
});

const hiddenElements = document.querySelectorAll('.fade');
hiddenElements.forEach((el) => observer.observe(el));



const observedElements1 = document.querySelectorAll('.fade-left');

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    const targetElement = entry.target;

    if (entry.isIntersecting) {
        // Add or remove classes based on the intersection
        targetElement.classList.add('reveal');
    }
    });
});

observedElements1.forEach(element => {
    observer1.observe(element);
});

const observedElements2 = document.querySelectorAll('.fade-right');

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    const targetElement = entry.target;

    if (entry.isIntersecting) {
        // Add or remove classes based on the intersection
        targetElement.classList.add('reveal');
    }
    });
});

observedElements2.forEach(element => {
    observer2.observe(element);
});


// OBSERVER FOR THE FADE DOWN ANIMATION
const observerdown = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
    entry.target.classList.add('show')
}
});
});

const hiddenElementsDown = document.querySelectorAll('.fade-down');
hiddenElementsDown.forEach((el) => observer.observe(el));





// UPDATE YEAR
let date = new Date().getFullYear();
document.getElementById("currentYear").textContent = date;