let phones = [
    {name: 'Samsung', camera: 12, storage:'64gb', price: 36000, color: 'Black'},
    {name: 'iPhone', camera: 12, storage:'32gb', price: 82000, color: 'Black'},
    {name: 'Walton', camera: 9, storage:'124gb', price: 21000, color: 'Black'},
    {name: 'Xiomi', camera: 4, storage:'64gb', price: 23000, color: 'Black'},
    {name: 'Vivo', camera: 8, storage:'15gb', price: 18000, color: 'Black'},
    {name: 'Nokia', camera: 11, storage:'21gb', price: 20000, color: 'Black'}
]
let minPrice = phones[0];

function lowest_price (phones) {
    for (let i = 0; i < phones.length; i++) {
        if (minPrice.price > phones[i].price) {
            minPrice = phones[i]; 
        }
    }
    return minPrice;
}

let output = lowest_price (phones);
console.log(output);