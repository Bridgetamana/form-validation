const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const username = document.getElementById('username');
const submitBtn = document.getElementById('submit-btn');
const text = document.querySelector('h1');
const text2 = document.querySelector('p');

// Error messages
const emailError = document.getElementById('email-error');
const usernameError = document.getElementById('username-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');
const errorIcon = document.querySelector('.fa-triangle-exclamation');

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Email Validation
email.addEventListener("input", emailValidation);

// User Validation
username.addEventListener("input", usernameValidation);

// Password Validation 
password.addEventListener("input", passwordValidation);

// Confirm password Validation
confirmPassword.addEventListener('input', confirmPasswordValidation)

// Email validation function
function emailValidation() {
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

// Username validation function
function usernameValidation() {
  if (username.value.length == 0) {
    username.className = "invalid";
    usernameError.textContent = "Username cannot be empty";
    usernameError.style.display = "block";
  } else if (username.value.length < 6) {
    username.className = "invalid";
    usernameError.textContent = "Username cannot be less than 6 characters";
    usernameError.style.display = "block";
  } else {
    username.className = "valid";
    usernameError.textContent = "";
    usernameError.style.display = "none";
  }
}

// Password validation function
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

// Confirm password validation function
function confirmPasswordValidation() {
  if (confirmPassword.value.length == 0) {
    confirmPassword.className = "invalid";
    confirmPasswordError.textContent = "Please confirm password";
  } else if (password.value !== confirmPassword.value) {
    confirmPassword.className = "invalid"; confirmPasswordError.textContent = "Passwords don't match";
    confirmPasswordError.style.display = "block";
  } else {
    confirmPassword.className = "valid";
    confirmPasswordError.textContent = "";
    confirmPasswordError.style.display = "none";
  }
}

// Clear error function

function clearError() {
  if (email.className === "invalid" || username.className === "invalid" || password.className === "invalid" || confirmPassword.className === "invalid") {
    email.className = "";
    username.className = "";
    password.className = "";
    confirmPassword.className = "";
  } else {
    email.className = "";
    username.className = "";
    password.className = "";
    confirmPassword.className = "";

  }
}

form.addEventListener("input", clearError);

// Submit button 
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
    text.textContent = 'Thank you for registering!';
    text2.textContent = 'Your form has been submitted';
  } else {
    alert("Please fix the errors in the form");
  }
});
