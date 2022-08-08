
const numbers = [167, 190, 301, 120, 165, 137, 265];

function getMax(numbers) {
    let large = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > large) {
            large = numbers[i];
        }
    }

    return large;
}

const resultOfLarge = getMax(numbers);

console.log(resultOfLarge);
