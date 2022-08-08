let ticketNumber = 150;
let ticketCost;
let midTicket;
function ticket_cost (number) {
    if ( number < 100) {
        ticketCost = 100 * number;
    } else if (number > 100 && number < 200) {
        ticketCost = (100*100) + (90*(number-100));
    } else if (number > 200) {
        ticketCost = (100*100) + (100*90) + (70*(number-200));
    }
    return ticketCost;
}
let output = ticket_cost (202);
console.log(output);