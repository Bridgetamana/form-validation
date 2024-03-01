const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const username = document.getElementById('username');
const submitBtn = document.getElementById('submit-btn');
const text = document.querySelector('h1');

// Error messages
const emailError = document.getElementById('email-error');
const usernameError = document.getElementById('username-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error')

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Email Validation
email.addEventListener("input", () => {
    emailValidation();
});

// User Validation
username.addEventListener("mouseleave", () => {
    usernameValidation();
});

// Password Validation 
password.addEventListener("input", () => {
    passwordValidation();
});

// Confirm password Validation
confirmPassword.addEventListener('input', () => {
    confirmPasswordValidation();
})

  function emailValidation () {
    if (email.value.length == 0) {
        email.className = "invalid";
        emailError.textContent = "Email cannot be empty";
    } else if (!emailRegExp.test(email.value)) {
        email.className = "invalid";
        emailError.textContent = "Email is not valid";
        emailError.style.display = "block";
    } else {
        email.className = "valid";
        emailError.textContent = "";
        emailError.style.display = "none";
    }
  };

  function usernameValidation() {
    if (username.value.length == 0) {
        username.className = "invalid";
        usernameError.textContent = "Username cannot be empty";
    } else if (username.value.length < 10) {
        username.className = "invalid";
        usernameError.textContent = "Username cannot be less than 10 characters";
        usernameError.style.display = "block";
    } else {
        username.className = "valid";
        usernameError.textContent = "";
        usernameError.style.display = "none";
    }
  }

  function passwordValidation() {
    if (password.value.length == 0) {
        password.className = "invalid";
        passwordError.textContent = "Password cannot be empty";
    } else if (!/\d/.test(password.value)) {
        password.className = "invalid";
        passwordError.textContent = "Password should contain at least one digit";
        passwordError.style.display = "block";
    } else if (!/[a-zA-Z]/.test(password.value)) {
        password.className = "invalid";
        passwordError.textContent = "Password should contain at least one alphabet";
        passwordError.style.display = "block";
    } else if (password.value.length < 6) {
        password.className = "invalid";
        passwordError.textContent = "Password is too short";
        passwordError.style.display = "block";
    } else {
        password.className = "valid";
        passwordError.textContent = "";
        passwordError.style.display = "none";
    }
  }

  function confirmPasswordValidation() {
    if (confirmPassword.value.length == 0) {
        confirmPassword.className = "invalid";
        confirmPasswordError.textContent = "Please confirm password";
    } else if (password.value !== confirmPassword.value) {
        confirmPassword.className = "invalid";
        confirmPasswordError.textContent = "Passwords don't match";
        confirmPasswordError.style.display = "block";
    } else {
        confirmPassword.className = "valid";
        confirmPasswordError.textContent = "";
        confirmPasswordError.style.display = "none";
    }
    // if (password.value !== confirmPassword.value && confirmPassword.value !== 0 ) {
    //     confirmPassword.className = "invalid";
    //     confirmPasswordError.textContent = "Passwords don't match";
    //     confirmPasswordError.style.display = "block";
    // } else {
    //     confirmPassword.className = "valid";
    //     confirmPasswordError.textContent = "";
    //     confirmPasswordError.style.display = "none";
    // }
  } 
// What happens when the user tries to submit the data
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  // Email Validation
    emailValidation();
  // Username Validation
    usernameValidation();
  // Password Validation 
    passwordValidation();
  // Confirm Password Validation 
    confirmPasswordValidation();

  if (emailError.textContent === "" && usernameError.textContent === "" && passwordError.textContent === "" && confirmPasswordError.textContent === "") {
    form.style.display = "none";
    text.textContent = 'Form submitted';
  }

});
