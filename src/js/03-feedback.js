import lodashThrottle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form');
const dataForm = {
  email: '',
  message: '',
};
populateEmailTextarea();

feedbackForm.addEventListener('submit', onFormSubmit);
feedbackForm.addEventListener(
  'input',
  lodashThrottle(onEmailTextareaInput, 500)
);

function onFormSubmit(e) {
  e.preventDefault();

  if (dataForm.email !== '' && dataForm.message !== '') {
      console.log(dataForm);
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    dataForm.email = '';
    dataForm.message = '';
  } else {
    alert('Будь ласка, заповніть всі поля!');
  }
}

function onEmailTextareaInput(e) {
  const saveMassage = localStorage.getItem(STORAGE_KEY);
  if (saveMassage) {
    const saveMassageObject = JSON.parse(saveMassage);
    if (saveMassageObject.email !== '') {
      dataForm.email = saveMassageObject.email;
    };
    if (saveMassageObject.message !== '') {
      dataForm.message = saveMassageObject.message;
    };
  };

  dataForm[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
};

function populateEmailTextarea() {
  const saveMassage = localStorage.getItem(STORAGE_KEY);
  if (saveMassage) {
    const saveMassageObject = JSON.parse(saveMassage);
    if (saveMassageObject.email !== '') {
      const email = document.querySelector('input');
      email.value = saveMassageObject.email;
    };
    if (saveMassageObject.message !== '') {
      const textarea = document.querySelector('textarea');
      textarea.value = saveMassageObject.message;
    };
  };
};
