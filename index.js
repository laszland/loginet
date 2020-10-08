const burgerIcon = document.querySelector('#burger');
const dropdown = document.querySelector('#dropdown')
const navbarMenu = document.querySelector('#nav-links');
const downloadBtn = document.querySelector('#download-btn');
const popUp = document.querySelector('#pop-up');
const popUpCloseBtn = document.querySelector('#pop-up-close')
const cancelBtn = document.querySelector('#cancel-btn');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const select = document.querySelector('#select')
const checkbox = document.querySelector('#checkbox');
const message = document.querySelector('#message');
const warningMessageName = document.querySelector('#error-message-name');
const warningMessageEmail = document.querySelector('#error-message-email');

burgerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active')
});

dropdown.addEventListener('click', () => {
  dropdown.classList.toggle('is-active');
});

downloadBtn.addEventListener('click', () => {
  popUp.classList.add('is-active')
});

popUpCloseBtn.addEventListener('click', () => {
  popUp.classList.remove('is-active');
});

cancelBtn.addEventListener('click', () => {
  name.value = '';
  email.value = '';
  message.value = '';
  select.value = '';
  checkbox.checked = false;
  name.classList.contains('is-success') ? name.classList.remove('is-success') : null;
  email.classList.contains('is-success') ? email.classList.remove('is-success') : null;

})

name.addEventListener('focus', () => {
  if (name.value === '') {
    name.classList.add('is-danger')
    warningMessageName.classList.remove('is-hidden');
  };
});

name.addEventListener('keypress', () => {
  name.classList.remove('is-danger');
  warningMessageName.classList.add('is-hidden')
  name.classList.add('is-success');
});

email.addEventListener('focus', () => {
  if (email.value === '') {
    email.classList.add('is-danger')
    warningMessageEmail.classList.remove('is-hidden');
  };
});

email.addEventListener('keypress', () => {
  email.classList.remove('is-danger');
  warningMessageEmail.classList.add('is-hidden')
  email.classList.add('is-success');
});