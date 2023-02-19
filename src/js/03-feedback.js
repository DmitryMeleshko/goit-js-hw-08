import throttle from 'lodash.throttle';
const storage_key = "feedback-form-state";
const formData = {};
const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const input = document.querySelector('input');

function submitForm (e) {
    e.preventDefault();
    console.log(formData);
    e.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
}
form.addEventListener('submit', submitForm);

function inputForm (e){
    formData.email = input.value;
    formData.message = textarea.value;
    return localStorage.setItem('storage_key',JSON.stringify(formData));
}
form.addEventListener('input', inputForm);

function popularInputs(){
    const parsedData = localStorage.getItem('storage_key', JSON.parse(formData))

    if (parsedData) {
        return(
            (input.value = parsedData.email || '')
            (textarea.value = parsedData.textarea ||'')
            );
    }
}