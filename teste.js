const months = ['JAN', 'FEV', 'MAR', /*...*/, 'DEZ'];

const monthsShortener = (previous, current) => {
    console.log('previous', previous)
    console.log('current', current)
    if (previous === '') {
        return current;
    } else {
        return previous + '/' + current;
    }
};

const shortenedMonths = months.reduce(monthsShortener, 'jo');
console.log(shortenedMonths)