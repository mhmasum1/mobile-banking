const validPin = 123;

// Add Money Section

document.getElementById("add-money-btn").addEventListener('click', function (event) {
    event.preventDefault();
    const aviableBalance = parseInt(document.getElementById("aviable-balance").innerText);
    const selectBank = document.getElementById("select-bank").value;
    const bankNumber = document.getElementById("bank-number").value;
    const addAmount = parseInt(document.getElementById("add-amount").value);
    const addPin = document.getElementById("add-pin").value;

    if (bankNumber.length !== 11 || isNaN(bankNumber)) {
        alert("Please provided correct account number")
        return;
    }
    if (parseInt(addPin) !== validPin) {
        alert("Please provide valid pin");
        return;
    }
    const totalAmount = aviableBalance + addAmount;
    document.getElementById("aviable-balance").innerText = totalAmount;

})

// Toggoling
document.getElementById("add-money").addEventListener("click", function () {
    document.getElementById("add-money-form").style.display = "block"
    document.getElementById("cash-out-form").style.display = "none"
});

document.getElementById("cash-out").addEventListener("click", function () {
    document.getElementById("cash-out-form").style.display = "block"
    document.getElementById("add-money-form").style.display = "none"

});

// CashOut Section

document.getElementById("cash-out-btn").addEventListener('click', function (event) {
    event.preventDefault();
    const aviableBalance = parseInt(document.getElementById("aviable-balance").innerText);
    const agentNumber = document.getElementById("agent-number").value;
    const cashOutMoney = parseInt(document.getElementById("cash-out-money").value);
    const cashOutPin = document.getElementById("cash-out-pin").value;
    console.log(aviableBalance, agentNumber, cashOutMoney, cashOutPin)

    if (agentNumber.length !== 11 || isNaN(agentNumber)) {
        alert("Please provided correct agent number")
        return;
    }
    if (parseInt(cashOutPin) !== validPin) {
        alert("Please provide valid pin");
        return;
    }
    const substractAmount = aviableBalance - cashOutMoney;
    document.getElementById("aviable-balance").innerText = substractAmount;

})