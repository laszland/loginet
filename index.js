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
const errorMessage = document.querySelector('#error-message');

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

})

name.addEventListener('focus', () => {
  if (name.value === '') {
    name.classList.add('is-danger')
    errorMessage.classList.remove('is-hidden');
  };
});

name.addEventListener('keypress', () => {
  name.classList.remove('is-danger');
  errorMessage.classList.add('is-hidden')
  name.classList.add('is-success');
});