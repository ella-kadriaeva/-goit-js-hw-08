import _ from "lodash";

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onSubmitForm);
form.addEventListener('input', _.throttle(onFildInput, 500));



populateForm ()

function onFildInput (e) {
    const formData = localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY)) : {
        email: '',
        message: '',
    };
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm (e) {
    e.preventDefault();
    if(!JSON.parse(localStorage.getItem(STORAGE_KEY))) {
        return
    }
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    
}

function populateForm () {
    const savedData = localStorage.getItem(STORAGE_KEY);
   
    if(savedData) {
        const arreyData = JSON.parse(localStorage.getItem(STORAGE_KEY));
        form.email.value = arreyData.email;
        form.message.value = arreyData.message;   
    }
}

