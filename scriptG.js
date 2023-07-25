const signup = document.getElementById('signup');
const close = document.getElementById('close');
const contents = document.getElementById('contents');
const open = document.getElementById('open');
const closebtn = document.getElementById('closebtn');
const containerTwo = document.getElementById('containerTwo');

// const submit = document.getElementById('submit');

// this is the event that shows the content class
signup.addEventListener('click', () => contents.classList.add('show-contents'));

//this is the event that hides content class
close.addEventListener('click', () => contents.classList.remove('show-contents'));

//this is the event that shows the containerTwo
open.addEventListener('click', () => containerTwo.classList.add('show-containerTwo'));

//this is the event that hides the containerTwo
closebtn.addEventListener('click', () => containerTwo.classList.remove('show-containerTwo'));

//adding event listener to the windows to close the form container whenerver click outside the box
window.addEventListener('click', e => e.target == contents ? contents.classList.remove('show-contents') : false);

//adding event listener to the windows to close the form container whenerver click outside the box
window.addEventListener('click', e => e.target == containerTwo ? containerTwo.classList.remove('show-containerTwo') : false);

//form validation for teacher class
const form = document.getElementById('teachers');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const location = document.getElementById('location');
const phoneno = document.getElementById('phoneno');
const expert = document.getElementById('expert');

//show input error messsage
function showError(input, message) {
    const teachers = input.parentElement;
    teachers.className = 'teacher error';
    const small = teachers.querySelector('small');
    small.innerText = message;
}

//show success outline
function showSuccess(input) {
    const teachers = input.parentElement;
    teachers.className = 'form-control success';
}
// show email is valid
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

// check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            console.log(input.id);
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}


//check length
function checkLength(input, min, max) {
    if (input.value.lenght < min) {
        showError(
            input,
            `${getFieldName(input)} must be at least ${min} characters`
        );
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} must be less than ${max} characters`
        );
    } else {
        showSuccess(input);
    }
}

//check password match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Password is not match');
    }
}

// get fieldname
function getFieldName(input) {
    return input.id;
    // return input.id.charAt(0).toupperCase() + input.id.slice(1);
}

//event listners
form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([name, email, phoneno, location, expert, password, passwordC]);
    checkLength(name, 3, 15);
    checkLength(password, 6, 20);
    checkEmail(email);
    checkPasswordsMatch(password, passwordC);
});


// let image = document.getElementById('image');
// let images = ['study.jpg', 'study2.jpg', 'study3.jpg',]
// setInterval(() => {
//     let random = Math.floor(Math.random() * 3);
//     image.src = images[random];
// }, 400);
// this is the event that shows the content class

// let images = document.getElementById('images');
// let image = ['teaching.jpg', 'teaching2.jpg', 'teaching3.jpg', 'teaching4']
// setInterval(() => {
//     let random = Math.floor(Math.random() * 4);
//     image.src = image[random];
// }, 400);
