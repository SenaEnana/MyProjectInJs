
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

// const close = document.getElementById('close');
// const contents = document.getElementById('contents');

// //form validation for all of the class
// const teachers = document.getElementById('teachers');
// const name = document.getElementById('name');
// const email = document.getElementById('email');
// const phoneno = document.getElementById('phoneno');
// const adress = document.getElementById('adress');
// const password = document.getElementById('password');
// const passwordC = document.getElementById('passwordC');

//check required fields
// function checkRequired(inputArr) {
//     inputArr.forEach(function (input) {
//         if (input.value.trim() === '') {
//             // console.log(input.id);
//             showError(input, `${getFieldName(input)} is required`);
//             //     // showError(input, `${input.id} is required`);
//         } else {
//             showSuccess(input);
//         }
//     });
// }

// //check password match
// function checkPasswordsMatch(input1, input2) {
//     if (input1.value !== input2.value) {
//         showError(input2, 'Password is not match');
//     }
// }

// //event listners
// teachers.addEventListener('submit', function (e) {
//     e.preventDefault();
//     // checkRequired([name, phoneno, password, passwordC]);;
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

//const toggle = document.getElementById('toggle');
//this is the event that shows the nav bar
//toggle.addEventListener('click', () => document.body.classList.toggle('show-nav'));
//const logout = document.getElementById('logout');
// function log() {
//     window.location.replace('loginG.html');
//     localStorage.setItem('Are you active', 'no');
// }
// logout.addEventListener('click', () => log()
//     //  window.onunload = function () {
//     //  console.log(sessionStorage);
//     // sessionStorage.setItem('activeSession', 'false');}
// );


// this is the event that shows the content class
//sign.addEventListener('click', () => contents.classList.add('show-contents'));

//this is the event that hides content class
//close.addEventListener('click', () => contents.classList.remove('show-contents'));

//adding event listener to the windows to close the form container whenerver click outside the box
//window.addEventListener('click', e => e.target == contents ? contents.classList.remove('show-contents') : false);