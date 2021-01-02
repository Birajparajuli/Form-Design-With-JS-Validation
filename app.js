const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

// Functions

// Show input error messages
function showError(input, message){
    const formControl= input.parentElement;
    formControl.className ='form-items error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// show sucess outline

function showSucess(input){
    const formControl= input.parentElement;
    formControl.className ='form-items sucess';
}

// Check email
function CheckEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)){
        showSucess(input);
    }else{
        showError(input, 'Email is not valid');
    }

}

// Check Required Fields
function checkRequired(inputArray){
    inputArray.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
        }else{
            showSucess(input);
        }
    });

}

// Check input length
function checkLength(input, min, max){
    
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters.`);
    }else if(input.value.length> max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }else{
        showSucess(input);
    }
}

// Functio n to check passwordmatch
function matchPassword(input1, input2){
    if(input1.value!==input2.value){
        showError(input2, 'Passwords do not match' );
    }
}

// Get field NAME IN SMALL  
function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+ input.id.slice(1);
}

// Event Listeners
form.addEventListener('submit', function(e)
{ 
    e.preventDefault();
    checkRequired([username, email, password1, password2]);
    checkLength(username, 3, 15);
    checkLength(password1, 6, 20);
    CheckEmail(email);
    matchPassword(password1, password2);
});