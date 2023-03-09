const lists = Array.from(document.querySelectorAll('.navbar ul li'));
const slides = Array.from(document.querySelectorAll('.slide'));
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const interval = 5000;
const auto = true;
let selectedIndex;
let slideInterval;

const navEvent = (event) => {
    const active = document.querySelector('.active');
    active.classList.remove('active');
    event.target.classList.add('active');
    selectedIndex = lists.indexOf(event.target);
    selectSlide(selectedIndex);
};

const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    const active = document.querySelector('.active');
    active.classList.remove('active');
    if (current.nextElementSibling && active.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
        active.nextElementSibling.classList.add('active');
    } else {
        slides[0].classList.add('current');
        lists[0].classList.add('active');
    }
    setTimeout(() => current.classList.remove('current'), 1000);
};

const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    const active = document.querySelector('.active');
    active.classList.remove('active');
    if (current.previousElementSibling && active.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
        active.previousElementSibling.classList.add('active');
    } else {
        slides[slides.length - 1].classList.add('current');
        lists[lists.length - 1].classList.add('active');
    }
    setTimeout(() => current.classList.remove('current'));
};

const selectSlide = (selectedIndex) => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
        slides[selectedIndex].classList.add('current');
    setTimeout(() => current.classList.remove('current'), 1000);
};

lists.forEach((list) => {
    list.addEventListener('click', (event) => {
        navEvent(event);
        if (auto) {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, interval);
        }
    })

});

// Button events
next.addEventListener('click', () => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, interval);
    }
});

prev.addEventListener('click', () => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, interval);
    }
});

//Auto Slide
if (auto) {
    slideInterval = setInterval(nextSlide, interval);
}