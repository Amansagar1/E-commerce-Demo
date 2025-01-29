// document.getElementById('payment-form').addEventListener('submit', function(event) {
//     event.preventDefault();  // Prevent form submission

//     // Simulate a successful payment
//     setTimeout(function() {
//         document.querySelector('.payment-form').classList.add('hidden');
//         document.getElementById('payment-response').classList.remove('hidden');
//     }, 1000);  // Simulate 1 second delay for payment processing

//     // Optionally, you could store payment details here or send it to a server for processing
// });
document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    // Add some basic validation (check if required fields are filled)
    const formElements = document.getElementById('payment-form').elements;
    let isValid = true;

    for (let element of formElements) {
        if (element.hasAttribute('required') && !element.value.trim()) {
            isValid = false;
            element.classList.add('border-danger');
        } else {
            element.classList.remove('border-danger');
        }
    }

    if (isValid) {
        // Simulate a successful payment
        setTimeout(function() {
            document.querySelector('.payment-form').classList.add('hidden');
            document.getElementById('payment-response').classList.remove('hidden');
        }, 1000);  // Simulate 1 second delay for payment processing
    } else {
        alert("Please fill in all required fields.");
    }
});
