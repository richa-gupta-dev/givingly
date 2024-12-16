
// Get references to the input field and the toggle button
const passwordInput = document.getElementById('password');
const toggleButton = document.getElementById('togglePassword');
const buttonIcon = document.getElementById('buttonIcon');

// Add an event listener to toggle the visibility of the password
toggleButton.addEventListener('click', function () {
  // Check if the input type is 'password'
  if (passwordInput.type === 'password') {
    // Change the input type to 'text' to show the password
    passwordInput.type = 'text';
    buttonIcon.src = 'hide.png';  // Change to hide icon
    buttonIcon.alt = 'hide';
  } else {
    // Change the input type back to 'password' to hide the password
    passwordInput.type = 'password';
    buttonIcon.src = 'visible.png';  // Change to show icon
    buttonIcon.alt = 'show';
  }
});

// Function to validate email using regex : 
function isValidEmail(emailInput) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(emailInput);
  }

// Password validation function
function checkPasswordStrength(password) {
    const minLength = /^(?=.{8,})/;
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    const number = /\d/;
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

    // Check each condition
  const isMinLength = minLength.test(password);
  const hasUppercase = uppercase.test(password);
  const hasLowercase = lowercase.test(password);
  const hasNumber = number.test(password);
  const hasSpecialChar = specialChar.test(password);

  // Provide a strength message based on the number of valid conditions
  const validConditions = [isMinLength, hasUppercase, hasLowercase, hasNumber, hasSpecialChar].filter(Boolean).length;
  
  if (validConditions === 5) {
    return 1;
  } else if (validConditions >= 3) {
    return 2;
  } else {
    return 3;
  }
}

// Check if form is valid
document.getElementById('signup').addEventListener('click', function() {
    const form = document.getElementById('account-details');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    if (!name || !email || !password) {
      alert('Please fill in all fields.');
      return;
    }else if(!isValidEmail(email)){       //Validating email address
        alert('Please enter a valid email address.');
        return;
    }

    const state = checkPasswordStrength(password);
    if(state==3){
        alert('Please try a stronger password.');
        return;
    }else if(state==2){
        alert('Congratulations! Your password strength is Moderate.');
    }else{
        alert('Congratulations! Your password strength is Strong.');
    }
  
    // Display the data (optional)
    alert(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);
});