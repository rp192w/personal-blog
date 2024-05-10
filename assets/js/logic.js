// Access the toggle button element and attach an event listener to it
const themeToggle = document.getElementById('dark-mode-toggle');

// Get the theme mode from localStorage, or set it to false if it doesn't exist
let isDarkMode = localStorage.getItem('isDarkMode') === 'true';

// Set the initial theme based on isDarkMode
if (isDarkMode) {
    document.body.classList.add('dark-mode');
    themeToggle.innerText = 'Switch to Light Mode';
} else {
    document.body.classList.remove('dark-mode');
    themeToggle.innerText = 'Switch to Dark Mode';
}

// Listen for a click event on the toggle button
themeToggle.addEventListener('click', function() {
    // Toggle the isDarkMode variable
    isDarkMode = !isDarkMode;

    // Save the theme mode to localStorage
    localStorage.setItem('isDarkMode', isDarkMode);

    // If the current mode is dark, switch to light
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        themeToggle.innerText = 'Switch to Light Mode';
    } else {
    // If the current mode is light, switch to dark
        document.body.classList.remove('dark-mode');
        themeToggle.innerText = 'Switch to Dark Mode';
    }
})