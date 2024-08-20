// Variables to keep track of the toggle state
let isToggled = false;

// Function to toggle text and container color
function toggleState() {
    const container = document.getElementById('container');
    const button = document.getElementById('toggleButton');
    const text = document.getElementById('text');

    if (isToggled) {
        // Revert to initial state
        container.style.backgroundColor = 'red';
        button.textContent = 'Initial';
        text.textContent ='Welcome to My Page';
        button.style.color = "green";
    } else {
        container.style.backgroundColor = '#4CAF50'; // Green
        button.textContent = 'after';
        text.textContent = 'Thala for a reason';
        button.style.color = "red";
    }
    isToggled = !isToggled;
}
document.getElementById('toggleButton').addEventListener('click', toggleState);