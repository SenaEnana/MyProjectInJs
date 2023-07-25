const logs = document.getElementById('logs');
const login = document.getElementById('login');
const contentOne = document.getElementById('contentOne');
const close = document.getElementById('close');

// const teacher = document.getElementById('teacher');
const content = document.getElementById('content');
const sign = document.getElementById('sign');
// const closee = document.getElementById('closee');
// const emails = document.getElementById('emails');
// const passwords = document.getElementById('passwords');


// //this is the event that hides content class
// // closee.addEventListener('click', () => content.classList.remove('show-content'));

// //this is the event that hides content class
// close.addEventListener('click', () => contentOne.classList.remove('show-contents'));

// //adding event listener to the windows to close the form container whenerver click outside the box
// // window.addEventListener('click', e => e.target == contentOne ? contentOne.classList.remove('show-contents') : false);

// //adding event listener to the windows to close the form container whenerver click outside the box
// window.addEventListener('click', e => e.target == content ? content.classList.remove('show-content') : false);



// //show input error messsage
// function showError(input, message) {
//     const info = input.parentElement;
//     info.className = 'info error';
//     const small = info.querySelector('small');
//     small.innerText = message;
// }

// //show success outline
// function showSuccess(input) {
//     const info = input.parentElement;
//     info.className = 'info success';
// }

// // check email is valid
// function checkEmail(email) {
//     if (!email.value)
//         return showError(email, 'Email can not be empty');
//     if (email.value.includes("@")) {
//         showSuccess(email);
//     } else {
//         showError(email, 'Email is not valid');
//     }
// }

// //check password match
// function checkPasswordsMatch(input1, input2) {
//     if (input1.value !== input2.value) {
//         showError(input2, 'Password is not match');
//     }
// }


// //event listeners for the sign up
// teacher.addEventListener('submit', function (e) {
//     e.preventDefault();
//     checkEmail(email);
//     checkPasswordsMatch(password, passwordC);
//     function hello() {
//         window.localStorage.setItem("name", name.value);
//         window.localStorage.setItem("email", email.value);
//         window.localStorage.setItem("phoneno", phoneno.value);
//         window.localStorage.setItem("adress", adress.value);
//         window.localStorage.setItem("password", password.value);
//         window.localStorage.setItem("passwordC", passwordC.value);
//     }
//     if (password.value == passwordC.value) {
//         hello();
//         alert("Congratulation you are successfuly registered! you can close the page now");
//         //this is for redirect page to another page or if the form in the login is correct the login page will be redirected to this page
//         window.location.href = "/profile.html";
//     }
//     else {
//         alert("sorry your password is not match");
//     }

// });  