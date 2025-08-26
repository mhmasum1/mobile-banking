const validPin = 12345;

document.getElementById("add-money-btn").addEventListener('click', function (event) {
    event.preventDefault();
    const aviableBalance = parseInt(document.getElementById("aviable-balance").innerText);
    const selectBank = document.getElementById("select-bank").value;
    const bankNumber = document.getElementById("bank-number").value;
    const addAmount = parseInt(document.getElementById("add-amount").value);
    const addPin = document.getElementById("add-pin").value;
    console.log(aviableBalance, selectBank, bankNumber, addAmount, addPin)

    if (bankNumber.length !== 11 || NaN(bankNumber)) {
        alert("Please provided correct account number")
        return;
    }
    if (addPin !== validPin) {
        alert("Please provide valid pin");
        return;
    }
    const totalAmount = aviableBalance + addAmount;
    document.getElementById("aviable-balance").innerText = totalAmount;

})
