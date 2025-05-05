// Toggle Menu for Mobile View
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
    const name = this.querySelector('input[placeholder="Full Name:"]').value.trim();
    const email = this.querySelector('input[placeholder="Email Address"]').value.trim();
    const mobile = this.querySelector('input[placeholder="Mobile Number"]').value.trim();
    const message = this.querySelector('textarea').value.trim();

    if (!name || !email || !mobile || !message) {
        alert("Please fill out all fields before submitting.");
        e.preventDefault();
    }
});
