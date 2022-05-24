const modal = () => {
    const modalBtn = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const modalClose = document.querySelector('.popup-close');

    modalBtn.forEach((item) => {
        item.addEventListener('click', () => {
            modal.style = 'display: block';
        });
    });

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style = 'display: none';
        }
    });
};

export default modal;