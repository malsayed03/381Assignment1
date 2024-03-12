document.addEventListener('DOMContentLoaded', function() {
    
    const loginPage = document.getElementById('loginPage');
    if(loginPage){
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
            messageBox.style.display = 'block'; // Show the message box
        }
    }

    //#############
    const signupPage = document.getElementById('signupPage');
    if(signupPage){
        const signup = document.getElementById('signup');
        const messageBox = document.getElementById('message-box');

        signup.addEventListener('submit', function(event){
            event.preventDefault();
            console.log('Signup form submitted');


            const username = document.getElementById('username');
            const password = document.getElementById('password');
            const confirmPassword = document.getElementById('confirmP');
            const email = document.getElementById('email');

            console.log('Username:', username.value);
            console.log('Password:', password.value);
            console.log('Confirm Password:', confirmP.value);
            console.log('Email:', email.value);

            //Username validation
            const usernamePattern = /^[a-zA-Z][\w-]{2,19}$/;
            if (!usernamePattern.test(username.value)){
                showMessage('Invalid username. Username must start with a letter. Must be between 3-20 characters. Can only include letters, numbers, hyphens, or underscores.')
                return;
            }
            

            //Password validation
            // const password = password.value;
            // const confirmPassword = confirmP.value;
            const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-_=+[\]{}|;:'",.<>?/`~]).{8,}$/;
            // [!@#$%^&*-_=+;:'&quot,.&lt&gt?`~\(\[\{\)\]\}\|\/]
            if (!passwordPattern.test(password)) {
                console.log('Password:', password.value);
                console.log('Pattern Test Result:', passwordPattern.test(password.value));
                showMessage('Invalid password. Password must have at least 8 characters. Must include at least one uppercase letter, one lowercase letter, and one special character. No spaces.')
                return;
            }
            
            //Confirm password
            if(password !== confirmPassword){
                console.log('no match')
                showMessage('Passwords do not match.');
                return;
            }

            //Email validation
            const emailPattern = /^[\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value)) {
                showMessage('Invalid email address');
                return;
            }

            //After all that^, if they all pass:
            showMessage('Sign up successful :)');
        }); 

        function showMessage(message, color= 'black'){
            messageBox.textContent = message;
            messageBox.style.color = color;
            messageBox.style.display = 'block';
        }
    }


});


// function check(input) {
//     if (document.getElementById('confirmP').value != document.getElementById('password').value) {
//         input.setCustomValidity('Password Must be Matching.');
//     } else {
//         // input is valid -- reset the error message
//         input.setCustomValidity('');
//     }
// }


