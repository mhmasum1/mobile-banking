document.getElementById("loginBtn").addEventListener("click", function (event) {
    event.preventDefault();
    const inputNumber = 12345678910;
    const inputPin = 12345;

    const mobileNumber = document.getElementById("phone-number").value
    const pinNumber = document.getElementById("pin-number").value
    const mobileNumberConverted = parseInt(mobileNumber);
    const pinNumberConverted = parseInt(pinNumber);
    console.log(mobileNumberConverted, pinNumberConverted)
    if (mobileNumberConverted === inputNumber && pinNumberConverted === inputPin) {
        window.location.href = "./home.html"
    } else {

        alert('something wrong input')
    }

})