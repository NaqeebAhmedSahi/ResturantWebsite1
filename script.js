let currentIndex = 0;
const itemsToShow = 3;
const items = document.querySelectorAll('.special-card');
const totalItems = items.length;

function moveCarousel(direction) {
    const wrapper = document.querySelector('.specials-items');
    const maxIndex = totalItems - itemsToShow;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = maxIndex;
    } else if (currentIndex > maxIndex) {
        currentIndex = 0;
    }

    const offset = currentIndex * -100 / itemsToShow;
    wrapper.style.transform = `translateX(${offset}%)`;
}



