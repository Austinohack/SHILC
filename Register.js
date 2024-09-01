let register = document.querySelector("#register")
register.addEventListener('submit', (e) => {
    e.preventDefault();

    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    console.log(email)
    console.log(password)

    if (!username) {
        alert("Please enter an account name.");
        return;
    }
    if (!email) {
        alert("Please enter an email address.");
        return;
    }
    if (!password) {
        alert("Please enter a password.");
        return;
    }
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.username === username || user.email === email);

    if (userExists) {
        alert("Username or email is already taken.");
        return;
    }

    // Register new user
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    window.location.href = 'Login_web.html';
});

// Function to validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}