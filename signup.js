function signup() {
    const signupForm = document.getElementById('signup-form');
    const username = signupForm.elements['username'].value;
    const password = signupForm.elements['password'].value;
    const confirmPassword = signupForm.elements['confirm-password'].value;
    const email = signupForm.elements['email'].value;

    let errorMessage = '';

    // Validate username
    if (!validateUsername(username)) {
        errorMessage += 'Username is incorrect.\n';
    }

    // Validate password
    if (!validatePassword(password)) {
        errorMessage += 'Password is incorrect.\n';
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        errorMessage += 'Passwords do not match.\n';
    }

    // Validate email
    if (!validateEmail(email)) {
        errorMessage += 'Email is incorrect.\n';
    }

    if (errorMessage) {
        displayMessage('error', errorMessage);
    } else {
        displayMessage('success', 'Signup successful!');
        // Reset form
        signupForm.reset();
    }
}

function validateUsername(username) {
    if (username.length < 3 || username.length > 20) {
        return false;
    }

    if (!username.match(/^[a-zA-Z]/)) {
        return false;
    }
    if (!username.match(/^[a-zA-Z0-9-_]+$/)) {
        return false;
    }

    return true;
}

function validatePassword(password) {
    // Must be at least 8 characters long
    if (password.length < 8) {
        return false;
    }

    // Must contain at least one uppercase letter, one lowercase letter, one number, and one special character
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()-_=+\[\]{}|;:'",.<>?/`~]/.test(password);

    return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
}

function validateEmail(email) {
     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function displayMessage(type, message) {
    // Check if message box already exists
    let messageBox = document.querySelector('.message-box');

    if (!messageBox) {
        messageBox = document.createElement('div');
        messageBox.classList.add('message-box');

        const mainSection = document.querySelector('main');
        mainSection.appendChild(messageBox);
    }

    const messagePara = document.createElement('p');
    messagePara.textContent = message;


    // Clear existing content and append new message
    messageBox.innerHTML = '';
    messageBox.appendChild(messagePara);
}
