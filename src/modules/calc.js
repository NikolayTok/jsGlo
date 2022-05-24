const calc = (price) => {
    const calcPanel = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const total = document.getElementById('total');
    const inputCalc = calcPanel.querySelectorAll('input');

    inputCalc.forEach((item) => {
        item.addEventListener('input', (e) => {
            if (!/[^\d]/g.test(e.target.value)) {
                console.log('молодец');
            } else {
                e.target.value = '';
                alert('введите число');
            }
        });
    });

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = +calcSquare.value;

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;

        if (calcCount.value > 1) {
            calcCountValue = calcCountValue + (+calcCount.value / 10);
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        }

        if (calcType.value && calcSquare.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;

        }
        total.textContent = totalValue;
    };

    calcPanel.addEventListener('input', (e) => {
        countCalc();
    });
};

export default calc;