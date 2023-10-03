const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('close');
const loginForm = document.getElementById('loginForm');
const championNameInput = document.getElementById('championName');
const generateButton = document.getElementById('button');

// Function to show the modal and block user interaction
function showModal() {
    modal.style.display = 'block';
    overlay.style.display = 'block';
    championNameInput.disabled = true;
    generateButton.disabled = true;
}

// Function to hide the modal and restore user interaction
function hideModal() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
    championNameInput.disabled = false;
    generateButton.disabled = false;
}

// Show the modal by default
showModal();

closeButton.addEventListener('click', () => {
    hideModal();
});

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    // Perform login validation here (typically on the server-side).
    // For this example, you can just hide the modal on successful login.

    // Simulate successful login for demonstration purposes.
    hideModal();
});
