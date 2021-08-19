// TypeIt Library
new TypeIt('.subname', {
  strings: ['دارای مدرک عکاسی', 'دارای مدرک نقاشی', 'دارای مدرک طراحی'],
  breakLines: false,
  speed: 100,
  loop: true,
  deleteSpeed: 100,
  loopSpeed:30000
}).go();

// Navbar scroll-down
window.onscroll = function() {scrollfunction()};
function scrollfunction() {
  if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
    document.getElementsByClassName('navbar')[0].classList.add('scrollClass');
  }else{
    document.getElementsByClassName('navbar')[0].classList.remove('scrollClass');
  }
}

// title animation
window.onload = function() {onloadFunction()}
function onloadFunction() {
  document.getElementsByClassName('name')[0].classList.add('bounce-in-left');
}


// Aos animation Library
AOS.init();


// Form Validate
const form = document.querySelector('#form');
const formName = document.querySelector('#name');
const email = document.querySelector('#email');
const comment = document.querySelector('#comment');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();

})

const checkInputs = () => {
  const nameValue = formName.value.trim();
  const emailValue = email.value.trim();
  const commentValue = comment.value.trim();

  if(nameValue === ''){
    setError(formName)
  }else{
    setSuccess(formName)
  }

  if(emailValue === ''){
    setError(email)
  }else{
    setSuccess(email)
  }

  if(commentValue === ''){
    setError(comment)
  }else{
    setSuccess(comment)
  }

};

const setError = (input) => {
  const inputField = input.parentElement;

  inputField.className = 'input-field error';
}

const setSuccess = (input) => {
  const inputField = input.parentElement;

  inputField.className = 'input-field success'
}



