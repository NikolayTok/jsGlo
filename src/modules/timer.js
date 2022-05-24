const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSecond = document.getElementById('timer-seconds');

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();

        let timeRemaining = (dateStop - dateNow) / 1000;
        let hours = Math.floor((timeRemaining / 60 / 60));
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        const getZero = (num) => {
            if (num == 0) {
                // console.log(num + '0')
                return num + '0';
            } else if (num < 10) {
                return '0' + num;
            } else {
                return num;
            }
        };

        hours = getZero(hours);
        minutes = getZero(minutes);
        seconds = getZero(seconds);

        return { timeRemaining, hours, minutes, seconds };
    };

    const updateClock = () => {
        let getTime = getTimeRemaining();

        if (getTime.hours > 0) {
            timerHours.textContent = getTime.hours;
        } else {
            timerHours.textContent = 0;
        }
        if (getTime.minutes > 0) {
            timerMinutes.textContent = getTime.minutes;
        } else {
            timerMinutes.textContent = 0;
        }
        if (getTime.seconds > 0) {
            timerSecond.textContent = getTime.seconds;
        } else {
            timerSecond.textContent = 0;
        }

        if (getTime.timeRemaining > 0) {
            setTimeout(updateClock, 1000);
        }
    };

    updateClock();
};

export default timer;