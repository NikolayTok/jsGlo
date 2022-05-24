const tabs = () => {
    const tabContent = document.querySelectorAll('.service-tab');
    const tabPanel = document.querySelector('.service-header');
    const tabBtn = document.querySelectorAll('.service-header-tab');

    tabPanel.addEventListener('click', (e) => {
        if (e.target.closest('.service-header-tab')) {
            const target = e.target.closest('.service-header-tab');
            tabBtn.forEach((tab, index) => {
                if (tab === target) {
                    tab.classList.add('active');
                    tabContent[index].classList.remove('d-none');
                } else {
                    tab.classList.remove('active');
                    tabContent[index].classList.add('d-none');
                }
            });
        }
    });

};

export default tabs;