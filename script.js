const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;

function submitForm(e) {
  e.preventDefault();

  validateForm();
}

function validateForm() {
  isValid = form.checkValidity();
  if (!isValid) {
    message.textContent = "Please fill out all fields.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  } else {
    message.textContent = "Successfully Registered!";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
    storeFormData();
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };

  console.log(user);
}

function validatePassword() {
  if (password1El.value !== password2El.value) {
    password2El.setCustomValidity("Passwords do not match");
  } else {
    password2El.setCustomValidity("");
  }
}

form.addEventListener("submit", submitForm);
password2El.addEventListener("input", validatePassword);
password1El.addEventListener("input", validatePassword);
