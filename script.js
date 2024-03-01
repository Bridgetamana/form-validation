const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const username = document.getElementById('username');
const submitBtn = document.getElementById('submit-btn');
const emailError = document.getElementById('email-error');

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


// Email Validation
email.addEventListener("input", () => {
  const isEmailValid = emailRegExp.test(email.value);
  if (isEmailValid) {
    email.className = "valid";
    emailError.textContent = "";
    emailError.style.display = "none";
} else {
    email.className = "invalid";
    emailError.textContent = "Please enter a valid email address";
    emailError.style.display = "block";
}
});

// What happens when the user tries to submit the data
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const isEmailValid = email.value.length === 0 && emailRegExp.test(email.value);
  if (isEmailValid) {
    emailError.textContent = "";
    emailError.style.display = "none";
} else {
    emailError.textContent = "I expect an email, darling!";
    emailError.style.display = "block";
}
});
