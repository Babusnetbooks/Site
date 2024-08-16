document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
});

// Simulated user data
const users = {
    "user1": "password1",
    "user2": "password2"
};

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (users[username] && users[username] === password) {
        alert('Login successful!');
        // Here you can redirect to a different page or display user-specific content
    } else {
        alert('Invalid username or password');
    }
});

// Course Progress Tracking
document.querySelectorAll('video').forEach((video, index) => {
    const courseKey = `course${index + 1}_progress`;

    // Load progress from local storage
    const savedProgress = localStorage.getItem(courseKey);
    if (savedProgress) {
        video.currentTime = parseFloat(savedProgress);
    }

    // Save progress on time update
    video.addEventListener('timeupdate', function() {
        localStorage.setItem(courseKey, video.currentTime);
    });
});

// Stripe Payment Integration
document.getElementById('checkout-button').addEventListener('click', function() {
    alert('Redirecting to payment gateway...');
    // Normally, you'd integrate with Stripe's API here
    // Example: Stripe.redirectToCheckout({ sessionId: 'your_session_id' });
});


