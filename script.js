//your JS code here. If required.
// Get form elements
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberMeCheckbox = document.getElementById('checkbox');
const submitButton = document.getElementById('submit');
const existingButton = document.getElementById('existing');

// Check if there are saved details in local storage
const savedUsername = localStorage.getItem('username');
const savedPassword = localStorage.getItem('password');

// If there are saved details, show the "Login as existing user" button
if (savedUsername && savedPassword) {
    existingButton.style.display = 'inline';
}

// Add event listener for form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get username and password from form inputs
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Check if "Remember me" checkbox is checked
    if (rememberMeCheckbox.checked) {
        // Save username and password in local storage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        // Remove saved username and password from local storage
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    // Display alert with logged in message
    alert('Logged in as ' + username);
});

// Add event listener for "Login as existing user" button
existingButton.addEventListener('click', function() {
    // Get saved username from local storage
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        // Display alert with logged in message
        alert('Logged in as ' + savedUsername);
    }
});