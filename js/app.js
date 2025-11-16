// Form submission handling (only on bookings page)
const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple validation
        if (name && email && message) {
            alert('Thank you for your inquiry, ' + name + '! We will get back to you soon.');
            // Here you could send the data to a server
            this.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Placeholder for future enhancements like audio player or dynamic content loading
console.log('Fluards website loaded successfully!');
