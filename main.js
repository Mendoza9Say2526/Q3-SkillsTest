function seePayment() {
    // variable declaration
    const ticketPrice = 250.00;
    const adminFee = 50.00;
    let ticketQty = Number(document.getElementById("Quantity").value);
    let subtotal = (ticketPrice * ticketQty);
    let total = Number(subtotal) + Number(adminFee);


    // displaying the result
    document.getElementById("Subtotal").value = subtotal.toFixed(2);
    document.getElementById("Total").value = total.toFixed(2);
    document.getElementById("Admin Fee").value = adminFee.toFixed(2);

}