import '../css/style.scss';
//HEADER
const headerSection = document.querySelector('#header');

const toogleHeader = () => headerSection.classList.toggle('hide');

const mobileMenuHandler = document.querySelector('.mobile-menu-handler');
const mainNav = document.querySelector('.main-nav');

mobileMenuHandler.addEventListener('click', () => {
    mainNav.classList.toggle('mobile-menu-opened');
});

//POPUP window

const popupOpenButton = document.querySelector('.popup-trigger');
const popupCloseButton = document.querySelector('#close-popup');
const popupWindow = document.querySelector('.popup-container');
const popupImage = document.querySelector('#popup-img');

const togglePopupClass = () => popupWindow.classList.toggle('active');

popupOpenButton.addEventListener('click', () => {
    popupImage.src = popupOpenButton.src;
    togglePopupClass();
    toogleHeader();
});
popupCloseButton.addEventListener('click', () => {
    togglePopupClass();
    toogleHeader();
});

// CAROUSEL

const prevButton = document.querySelector('#arrow-prev');
const nextButton = document.querySelector('#arrow-next');
const carouselImages = document.querySelectorAll('.slide img');
const mainFrameImage = document.querySelector('.curr-img');

const slidesContainer = document.querySelector('.slide-list');
let slideWidth = document.querySelector('.slide').offsetWidth;
let currentIndex = 0;

const updateWidth = () => {
    slideWidth = document.querySelector('.slide').offsetWidth
};

const showSlide = (index) => {
    slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
    mainFrameImage.src = carouselImages[index].src;
};

const nextSlide = () => {
    updateWidth();
    currentIndex = (currentIndex + 1) % carouselImages.length;
    showSlide(currentIndex);
};

const prevSlide = () => {
    updateWidth();
    currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    showSlide(currentIndex);
};

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

showSlide(currentIndex);

