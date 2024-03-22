function loginUser() {
    // Get the entered username and password from the form
    const usernameInput = document.getElementById('username').value;
    const useremailInput = document.getElementById('password').value;

    // Make API call to fetch user data
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch user data from API.');
            }
            return response.json();
        })
        .then(users => {
            const user = users.find(user => user.username === usernameInput && user.email === useremailInput);

            if (user) {
                displayMessage('success', 'Login successful!');
            } else {
                displayMessage('error', 'Invalid username or useremail. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
            displayMessage('error', 'An error occurred while fetching user data. Please try again later.');
        });
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

    messageBox.innerHTML = '';
    messageBox.appendChild(messagePara);
}
