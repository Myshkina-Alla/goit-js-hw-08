import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

const saveFormState = throttle(() => {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500);

form.addEventListener('input', () => {
  saveFormState();
});

window.addEventListener('load', () => {
  const storedFormData = localStorage.getItem('feedback-form-state');

  if (storedFormData) {
    const parsedData = JSON.parse(storedFormData);
    emailInput.value = parsedData.email;
    messageTextarea.value = parsedData.message;
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageTextarea.value = '';

  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  console.log(formData);
});
