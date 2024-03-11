if(window.location.href === 'login.html'){
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login');
    const messageBox = document.getElementById('message-box');
    const messageParagraph = document.getElementById('message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
            return response.json();
        })
        .then(users => {
            const userData = users.map(user => {
                return { username: user.username, email: user.email };
            });
            
            const foundUser = userData.find(user => user.username === username && user.email === password);
            
            if (foundUser) {
                showMessage('Login successful!');
            } else {
                showMessage('Invalid username or password');
            }
        })
        .catch(error => {
            showMessage('Error: ' + error.message); // Display error message
        });
    });

    function showMessage(message) {
        messageParagraph.textContent = message;
    }
});
}



function check(input) {
    if (document.getElementById('confirmP').value != document.getElementById('password').value) {
        input.setCustomValidity('Password Must be Matching.');
    } else {
        // input is valid -- reset the error message
        input.setCustomValidity('');
    }
}
