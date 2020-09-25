export function oddOrEven(number) {
    if (number % 2 === 0) {
        return 'Number is even';
    } else if (number % 3 == 0) {
        return 'Number is odd';
    } else {
        return 'Incorrect data!';
    }
}
