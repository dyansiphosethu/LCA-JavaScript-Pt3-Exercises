const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  const usernameError = document.getElementById("usernameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");
  const formMessage = document.getElementById("formMessage");

  // Clear previous messages
  usernameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";
  formMessage.textContent = "";

  let isValid = true;

  // Username validation
  if (username.value.trim() === "") {
    usernameError.textContent = "Username cannot be empty";
    isValid = false;
  }

  // Email validation
  if (email.value.trim() === "") {
    emailError.textContent = "Email cannot be empty";
    isValid = false;
  } else if (!email.value.includes("@")) {
    emailError.textContent = "Email must contain @";
    isValid = false;
  }

  // Password validation
  if (password.value.trim() === "") {
    passwordError.textContent = "Password cannot be empty";
    isValid = false;
  } else if (password.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    isValid = false;
  }

  // Confirm password validation
  if (confirmPassword.value.trim() === "") {
    confirmPasswordError.textContent = "Confirm Password cannot be empty";
    isValid = false;
  } else if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = "Passwords do not match";
    isValid = false;
  }

  if (isValid) {
    formMessage.textContent = "Registration successful!";

    username.value = "";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
  }
});
