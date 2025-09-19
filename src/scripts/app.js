document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.dress-item');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let current = 0;

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    leftArrow.addEventListener('click', () => {
        current = (current - 1 + items.length) % items.length;
        showItem(current);
    });

    rightArrow.addEventListener('click', () => {
        current = (current + 1) % items.length;
        showItem(current);
    });

    showItem(current);
});