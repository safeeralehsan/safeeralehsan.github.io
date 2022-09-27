//Getting HTML Elements
expInput = document.getElementById('expInput');
valType = document. getElementById('valType');
valOutput = document.getElementById('valOutput');
valButton = document.getElementById('valButton');

//Adding Event Listeners
valButton.addEventListener('click', validateExpression);

//Functions
function validateExpression (e) {
    let input = expInput.value;
    let re;
    switch (valType.value) {
        case "Email":
            re = /^([a-zA-Z0-9_\-\.]+)[^\.]@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/;
            if (re.test(input)){
                valOutput.innerHTML = 'The email address is valid.';
            } else {
                valOutput.innerHTML = 'The email address is invalid.';
            }
            break;
            break;
        case "Phone Number":
            re = /^(\+)?(88)?01[0-9]{9}$/;
            if (re.test(input)){
                valOutput.innerHTML = 'The phone number is valid.';
            } else {
                valOutput.innerHTML = 'The phone number is invalid.';
            }
            break;
            break;
        case "Postal Code":
            re = /^\d{4}$/;
            if (re.test(input)){
                valOutput.innerHTML = 'The postal code is valid.';
            } else {
                valOutput.innerHTML = 'The postal code is invalid.';
            }
            break;
        default:
    }
}
