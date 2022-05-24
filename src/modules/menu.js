const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const menuItems = menu.querySelectorAll('ul>li>a');

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };
    
    menuBtn.addEventListener('click', handleMenu);

    menu.addEventListener('click', (e) => {
        if(e.target.closest('.close-btn') || e.target.tagName == 'A'){
            handleMenu();
        }
    });
};

export default menu;