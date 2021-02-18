// counting increase and decrease function
function handleTicketChange(ticket, isIncrease) {
    const ticketCount = getInputValue(ticket);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    document.getElementById(ticket + '-count').value = ticketNewCount;
    sumOfTotal();
}
//calculating total function
function sumOfTotal() {
    const firstClsCount = getInputValue('firstCls');
    const economyCount = getInputValue('economy');
    const subTotal = firstClsCount * 150 + economyCount * 100;
    document.getElementById('subTotal').innerText = '$' + subTotal;
    const vat = Math.round(subTotal * 0.1);
    document.getElementById('vat-amount').innerText = '$' + vat;
    const totalAmount = subTotal + vat;
    document.getElementById('total-amount').innerText = '$' + totalAmount;
}
//collecting input value function
function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}
//popup
function togglePopup() {
    if (document.getElementById('total-amount').innerText == "$00" ||document.getElementById('total-amount').innerText == "$0" || document.getElementById('cardNumber').value == "" || document.getElementById('cardPin').value == "" || document.getElementById('flyingTo').value == "" || document.getElementById('flyingFrom').value == "") {
        alert("Please check the number of tickets or other informations")
    }
    else {
        document.getElementById("popupId").classList.toggle("active");
    }
}
