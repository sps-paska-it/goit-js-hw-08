import lodashThrottle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state"

const feedbackForm = document.querySelector('.feedback-form');
const dataForm = {
    email: '',
    message: '',
};

populateEmailTextarea();
feedbackForm.addEventListener('submit', onFormSubmit );
feedbackForm.addEventListener('input', lodashThrottle(onEmailTextareaInput, 500) );

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function onEmailTextareaInput(e) {
    dataForm[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

function populateEmailTextarea() {
    const saveMassage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saveMassage.message !== '' && saveMassage.email !== '') {
        console.log(saveMassage);
        const email = document.querySelector('input');
        email.value = saveMassage.email;
        const textarea = document.querySelector('textarea');
        textarea.value = saveMassage.message;
    }
};