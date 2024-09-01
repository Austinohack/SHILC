document.addEventListener('DOMContentLoaded', () => {
    // Retrieve user data from sessionStorage
    const username = sessionStorage.getItem('username');
    const email = sessionStorage.getItem('email');

    // Display current user data
    if (username) {
        document.getElementById('username-display').textContent = username;
        document.getElementById('new-username').value = username; // Pre-fill input field
    }
    if (email) {
        document.getElementById('email-display').textContent = email;
        document.getElementById('new-email').value = email; // Pre-fill input field
    }

    // Handle form submission
    document.getElementById('update-form').addEventListener('submit', (e) => {
        e.preventDefault();

        // Get new values from the form
        const newUsername = document.getElementById('new-username').value;
        const newEmail = document.getElementById('new-email').value;
        const newPassword = document.getElementById('new-password').value;

        // Retrieve existing user data from localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Find the user in the array
        const userIndex = users.findIndex(user => user.email === email);

        if (userIndex > -1) {
            // Update user data
            users[userIndex] = {
                ...users[userIndex],
                username: newUsername,
                email: newEmail,
                password: newPassword || users[userIndex].password // keep the old password if not changed
            };

            // Save the updated user data back to localStorage
            localStorage.setItem('users', JSON.stringify(users));

            // Optionally, update sessionStorage if needed
            sessionStorage.setItem('username', newUsername);
            sessionStorage.setItem('email', newEmail);

            alert('Account details updated successfully.');
        } else {
            alert('User not found.');
        }
    });
});