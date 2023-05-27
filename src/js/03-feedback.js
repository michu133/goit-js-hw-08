import { throttle } from 'lodash';

function saveForm() {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.elements['email'];
  const messageInput = form.elements['message'];

  const formObject = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formObject));
}
function loadForm() {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.elements['email'];
  const messageInput = form.elements['message'];

  const storedObject = localStorage.getItem('feedback-form-state');

  if (storedObject) {
    const formObject = JSON.parse(storedObject);
    emailInput.value = formObject.email;
    messageInput.value = formObject.message;
  }
}

function submitForm(e) {
  e.preventDefault();

  const form = document.querySelector('.feedback-form');
  const emailInput = form.elements['email'];
  const messageInput = form.elements['message'];

  const storedObject = localStorage.getItem('feedback-form-state');

  if (storedObject) {
    const storedData = JSON.parse(storedObject);
    console.log(storedData);
  }
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
}

document.addEventListener('input', throttle(saveForm, 500));

document.addEventListener('DOMContentLoaded', loadForm);
const form = document.querySelector('.feedback-form');
form.addEventListener('submit', submitForm);
