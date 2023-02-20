import throttle from 'lodash.throttle';
const formReply = "feedback-form-state";
const formData = {};
const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const input = document.querySelector('input');

function submitForm (e) {
    e.preventDefault();
    console.log(formData);
    e.currentTarget.reset();
    localStorage.removeItem(formReply);
}
form.addEventListener('submit', submitForm);

function inputForm (e){
    formData.email = input.value;
    formData.message = textarea.value;
    return localStorage.setItem(formReply, JSON.stringify(formData));
}
form.addEventListener('input', inputForm);

function popularInputs(){
    const parsedData = localStorage.getItem(formReply, JSON.parse(formData))

    if (parsedData) {
            input.value = parsedData.email || ''
            textarea.value = parsedData.textarea ||''
        return
    }
}