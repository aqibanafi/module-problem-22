let shoppingCart = [
    {name: 'shoe', price: 1200, quantity: 2},
    {name: 'shirt', price: 2200, quantity: 4},
    {name: 'pant', price: 3700, quantity: 5},
    {name: 'belt', price: 600, quantity: 3}
]
let sum = 0;
let expense;
let totalExpense;
function shopping_cart (shoppingCart) {
    for ( i = 0; i < shoppingCart.length; i++) {
        let shoppingPrice = shoppingCart[i].price;
        let shoppingQuantity = shoppingCart[i].quantity;
        expense = shoppingCart[i].price * shoppingCart[i].quantity;
        totalExpense = shoppingPrice + " " + '*' + " " + shoppingQuantity + " " + '=' + " " + expense;
        console.log(totalExpense);
        sum+= expense;
    }
    console.log("Total Expense is: " +sum);
    
    
}


shopping_cart (shoppingCart);