import lodashThrottle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state"

const feedbackForm = document.querySelector('.feedback-form');
const dataForm = {
    email: '',
    message: '',
};

populateEmailTextarea();
feedbackForm.addEventListener('submit', onFormSubmit );
feedbackForm.addEventListener('input', lodashThrottle(onEmailTextareaInput, 1000));

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function onEmailTextareaInput(e) {
    dataForm[e.target.name] = e.target.value;
    console.log(e.target.value);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
    console.log(JSON.stringify(dataForm));
}

function populateEmailTextarea() {
    const saveMassage = localStorage.getItem(STORAGE_KEY);
    console.log(saveMassage);
    if (saveMassage) {
        const saveMassageObject = JSON.parse(saveMassage);
        console.log(saveMassageObject.email);
        const email = document.querySelector('input');
        email.value = saveMassageObject.email;
        const textarea = document.querySelector('textarea');
        textarea.value = saveMassageObject.message;
    }
};