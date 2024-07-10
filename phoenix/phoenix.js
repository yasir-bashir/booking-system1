
document.addEventListener('DOMContentLoaded', () => {
    // Availability Check Function
    const checkAvailabilityButton = document.getElementById('check-availability-button');
    const availabilityResults = document.getElementById('availability-results');
  
    checkAvailabilityButton.addEventListener('click', () => {
      // Mock data for available venues
      const availableVenues = [
        'Stadium A - Available on June 25, 2024',
        'Stadium B - Available on June 27, 2024',
        'Stadium C - Available on July 2, 2024',
      ];
  
      // Clear previous results
      availabilityResults.innerHTML = '';
  
      // Display available venues
      const ul = document.createElement('ul');
      availableVenues.forEach(venue => {
        const li = document.createElement('li');
        li.textContent = venue;
        ul.appendChild(li);
      });
      availabilityResults.appendChild(ul);
    });
  
    // Booking Form Submission Function
    const bookingForm = document.getElementById('booking-form');
    const bookingConfirmation = document.getElementById('booking-confirmation');
  
    bookingForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Extract form data
      const venue = document.getElementById('venue').value;
      const date = document.getElementById('date').value;
      const name = document.getElementById('name').value;
  
      // Mock booking confirmation message
      const confirmationMessage = `Thank you, ${name}! Your booking for ${venue} on ${date} has been confirmed.`;
      
      // Display booking confirmation
      bookingConfirmation.textContent = confirmationMessage;
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('check-availability-button');
    const resultsDiv = document.getElementById('availability-results');

    button.addEventListener('click', function() {
        // Simulate fetching availability data (replace with actual API call)
        fetchAvailabilityData()
            .then(data => {
                displayAvailabilityResults(data);
            })
            .catch(error => {
                console.error('Error fetching availability data:', error);
                resultsDiv.textContent = 'Error fetching availability data. Please try again later.';
                resultsDiv.style.color = 'red';
                resultsDiv.style.display = 'block';
            });
    });

    function fetchAvailabilityData() {
        // Simulated async fetch (replace with actual fetch API call)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const availabilityData = {
                    venue1: { available: true, time: '10:00 AM - 12:00 PM' },
                    venue2: { available: false, time: '' },
                    venue3: { available: true, time: '3:00 PM - 5:00 PM' }
                };
                resolve(availabilityData);
            }, 1000); // Simulated delay of 1 second
        });
    }

    function displayAvailabilityResults(data) {
        // Clear previous results
        resultsDiv.innerHTML = '';

        // Build HTML to display availability results
        Object.keys(data).forEach(key => {
            const venueData = data[key];
            const venueName = key.charAt(0).toUpperCase() + key.slice(1); // Capitalize first letter

            const venueResult = document.createElement('div');
            venueResult.classList.add('venue-result');

            const availabilityText = venueData.available ? `Available: ${venueData.time}` : 'Not Available';

            venueResult.innerHTML = `<strong>${venueName}</strong>: ${availabilityText}`;

            resultsDiv.appendChild(venueResult);
        });

        // Show results div
        resultsDiv.style.display = 'block';
    }
});
document.addEventListener('DOMContentLoaded', function () {
  // Simulate checking availability
  document.getElementById('check-availability-button').addEventListener('click', function () {
    document.getElementById('availability-results').innerText = 'All venues are available.';
  });

  // Show booking form when "Book Now" button is clicked
  document.getElementById('book-now-button').addEventListener('click', function () {
    var bookingFormSection = document.getElementById('booking-form-section');
    bookingFormSection.style.display = 'block';
    bookingFormSection.scrollIntoView({ behavior: 'smooth' });
  });

  // Handle booking form submission
  document.getElementById('booking-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var confirmation = document.getElementById('booking-confirmation');
    confirmation.innerText = 'Booking confirmed!';
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const formMessages = document.getElementById('form-messages');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Simulate form submission
    setTimeout(() => {
      formMessages.style.display = 'block';
      formMessages.innerHTML = `<p>Thank you, ${name}! Your message has been sent.</p>`;
      form.reset();
    }, 1000);
  });
});
// Function to handle login form submission
function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Simulating login with a simple alert (replace with actual AJAX request)
  alert(`Attempting login with Username: ${username} and Password: ${password}`);

  // Prevent form submission for demo purposes
  return false;
}

// Function to handle registration form submission
function register() {
  var fullname = document.getElementById('fullname').value;
  var email = document.getElementById('email').value;
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Simulating registration with a simple alert (replace with actual AJAX request)
  alert(`Attempting registration with Full Name: ${fullname}, Email: ${email}, Username: ${username}, Password: ${password}`);

  // Prevent form submission for demo purposes
  return false;
}

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const logoutButton = document.getElementById('logout');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = e.target.username.value;
            const password = e.target.password.value;

            // Simulate a login check
            if (username === 'user' && password === 'password') {
                localStorage.setItem('loggedIn', 'true');
                window.location.href = 'dashboard.html';
            } else {
                alert('Invalid credentials');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = e.target.username.value;
            const password = e.target.password.value;

            // Simulate a registration process
            if (username && password) {
                alert('Registration successful! Please log in.');
                window.location.href = 'login.html';
            } else {
                alert('Please fill in all fields');
            }
        });
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('loggedIn');
            window.location.href = 'index.html';
        });
    }

    // Redirect to login if not logged in and trying to access protected pages
    if (['dashboard.html', 'phoenix.html'].includes(window.location.pathname.split('/').pop()) && !localStorage.getItem('loggedIn')) {
        window.location.href = 'login.html';
    }
});
