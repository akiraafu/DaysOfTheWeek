function returnDay(inputDays) {
    const days = {
        one: 'Monday',
        two: 'Tuesday',
        three: 'Wednesday',
        four: 'Thursday',
        five: 'Friday',
        six: 'Saturday',
        seven: 'Sunday',
    }
    if (inputDays < 1 || inputDays > 7) {
        return null;
    } else if (inputDays === 1) {
        return days.one;
    } else if (inputDays === 2) {
        return days.two;
    }else if (inputDays === 3) {
        return days.three;
    }else if (inputDays === 4) {
        return days.four;
    }else if (inputDays === 5) {
        return days.five;
    }else if (inputDays === 6) {
        return days.six;
    }else if (inputDays === 7) {
        return days.seven;
    }
}
