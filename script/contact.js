const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#fullName");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const description = document.querySelector("#description");

const fullNameError = document.querySelector("#fullNameError");
const subjectError = document.querySelector("#subjectError");
const emailError = document.querySelector("#emailError");
const descriptionError = document.querySelector("#descriptionError");

const successMessage = document.querySelector("#successMessage");

const formContent = document.querySelector(".form-container")
const submitButton = document.querySelector("button");

const loader = document.querySelector(".loader");
const backLink = document.querySelector("#back");

loader.style.display = "block";
form.style.display = "none";

setTimeout(() => {
  form.style.display = "block";
  loader.style.display = "none";
}, 1500);

form.addEventListener("submit", validationSubmit);
fullName.addEventListener("blur", validationForm);
subject.addEventListener("blur", validationForm);
email.addEventListener("blur", validationForm);
description.addEventListener("blur", validationForm);

function validationForm(event) {
  const { id, value } = event.target;
  const error = document.querySelector(`#${id}Error`);

  if (value.trim().length === 0) {
    error.style.display = "block";
    submitButton.disabled = true;
  } 
  else {
    error.style.display = "none";
    submitButton.disabled = false;
  }
}

function validationSubmit(event) {
  event.preventDefault();

  const fullNameValue = fullName.value.trim();
  const subjectValue = subject.value.trim();
  const emailValue = email.value.trim();
  const descriptionValue = description.value.trim();

  // NAME
  if (fullNameValue.length === 0) {
    fullNameError.style.display = "block";
    submitButton.disabled = true;
  } 
  else {
    fullNameError.style.display = "none";
  }

  // SUBJECT
  if (subjectValue.length < 15) {
    subjectError.style.display = "block";
    submitButton.disabled = true;
  } 
  else {
    subjectError.style.display = "none";
  }

  // EMAIL
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue))/*(emailValue.indexOf(".") && emailValue.indexOf("@"))*/ {
    emailError.style.display = "block";
    submitButton.disabled = true;
  } 
  else {
    emailError.style.display = "none";
  }

  // DESCRIPTION
  if (descriptionValue.length < 25) {
    descriptionError.style.display = "block";
    submitButton.disabled = true;
  } 
  else {
    descriptionError.style.display = "none";
  }

  // BUTTON
  if (!submitButton.disabled) {
    successMessage.innerHTML = "Your form has been submitted successfully.";
    successMessage.style.display = "block";
  }
}