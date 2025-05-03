// Toggle Menu for Mobile View
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// Highlight Active Section Link on Scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky Header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close Navbar When Scrolling
    menuIcon.classList.remove('fa-times');
    navbar.classList.remove('active');
};

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
