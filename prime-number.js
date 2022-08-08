let result;
function prime_number (number) {
    if ( number % 2 !== 0 || number === 2) {
        result = number + " " + "This is Prime Number";
    } else {
        result = number + " " + "This is Not Prime Number";
    }
    return result;
}

let output = prime_number (89);
console.log(output);