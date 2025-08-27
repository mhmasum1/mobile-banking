const validPin = 123;
const transactionData = [];

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

    const data = {
        name: "Add Money",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data);
    console.log(transactionData);

})


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

    const data = {
        name: "Cash Out",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data);
    console.log(transactionData);

})


// Transaction Section

document.getElementById("transaction").addEventListener("click", function () {
    const transactionContainer = document.getElementById("transaction-container")
    transactionContainer.innerHTML = "";
    for (const data of transactionData) {
        const div = document.createElement("div")
        div.innerHTML = `
        <div id="transaction-container" class="mt-2">
            <div class="flex justify-between items-center bg-white rounded-lg">
                <div class="flex items-center  gap-3 p-3">

                    <div>

                        <img class=" border-2 p-2 rounded-full " src="./assets/wallet1.png" alt="">
                    </div>
                    <div>
                        <h1>${data.name}</h1>
                        <p>${data.date}</p>
                    </div>

                </div>
                <div class="mr-5">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
        </div>
        `
        transactionContainer.appendChild(div)

    }



})

// Toggoling with shortcut
document.getElementById("add-money").addEventListener("click", function () {
    const forms = document.getElementsByClassName("form")
    for (const form of forms) {
        form.style.display = "none";
    }
    document.getElementById("add-money-form").style.display = "block";
});

document.getElementById("cash-out").addEventListener("click", function () {
    const forms = document.getElementsByClassName("form")
    for (const form of forms) {
        form.style.display = "none";
    }
    document.getElementById("cash-out-form").style.display = "block";

});
document.getElementById("transaction").addEventListener("click", function () {
    const forms = document.getElementsByClassName("form")
    for (const form of forms) {
        form.style.display = "none";
    }
    document.getElementById("transaction-form").style.display = "block";

});