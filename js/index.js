// Lister for OUTSIDE click
window.addEventListener("click", outsideClick);

// Modal dialog
// Get modal element
let modal = document.getElementById("simpleModal");

// Get open modal
let modalBtn = document.getElementById("button");

// Get close button
let closeBtn = document.getElementsByClassName("closeBtn")[0];

// Body overflow hidden
let body = document.getElementById("body");

// Listen for CLOSE click
closeBtn.addEventListener("click", closeModal);

// AJAX variables
let userInput = document.forms.vform.username.value;
let userEmail = document.forms.vform.email.value;
let userPassword = document.forms.vform.password.value;
let userPassConf = document.forms.vform.password_confirmation.value;
let xhr = new XMLHttpRequest();

// BUTTON
let button = document.getElementById("button");

// GETTING ALL TEXT OBJECTS
let username = document.forms["vform"]["username"];
let email = document.forms["vform"]["email"];
let password = document.forms["vform"]["password"];
let password_confirmation = document.forms["vform"]["password_confirmation"];

// GETTING ALL ERROR DISPLAY OBJECTS
let name_error = document.getElementById ("name_error");
let email_error = document.getElementById ("email_error");
let password_error = document.getElementById ("password_error");
let password_confirmation_error = document.getElementById("password_confirmation_error");

// Function to close modal
function closeModal () {
  modal.style.display = "none";
  body.style.overflow = "visible";
}

// Function to close modal if outside click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
    body.style.overflow = "visible";
  }
}

// Validation function
function validation() {
  let isError = false;

  if (username.value == "") {
    username.style.border = "1px solid red";
    name_error.textContent = "User name is required";
    isError = true;
  } else {
    username.style.border = "1px solid green";
    name_error.textContent = "";
  }

  if (email.value == "") {
    email.style.border = "1px solid red";
    email_error.textContent = "Email is required";
    isError = true;
  } else {
    let emailIsValid = email.value.match (/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
    if (emailIsValid){
        email.style.border = "1px solid green";
        email_error.textContent = "";
    } else {
      email.value = "";
      validation ();
    }
  }

  if (password.value == "") {
    password.style.border = "1px solid red";
    password_error.textContent =
      "Field 'Password is required";
    isError = true;
  } else {
    password.style.border = "1px solid green";
    password_error.textContent = "";
  }

  if (password_confirmation.value == "") {
    password_confirmation.style.border = "1px solid red";
    password_confirmation_error.textContent =
      "Field 'Password confirmation' is required";
    isError = true;
  } else {
    password_confirmation.style.border = "1px solid green";
    password_confirmation_error.textContent = "";
  }

  if (password.value != password_confirmation.value) {
    password_confirmation.style.border = "1px solid red";
    password_error.textContent = "Both passwords are not correct";
    isError = true;
  }

  if (isError) {
    return false;
  } else {
    return true;
  }
}

// Function to open modal
function openModal (bodyText = "Это дефолтный текст тела", titleText = "Дефолтный заголовок", footerText = "Это футер") {
  modal.style.display = "block";
  body.style.overflow = "hidden";
  document.getElementById ('modal_title').innerText = titleText;
  document.getElementById ('modal_body').innerText = bodyText;
  document.getElementById ('modal_footer').innerText = footerText;
}

function getData() {
  return {
    username: username.value,
    email: email.value,
    password: password.value
  };
}

button.onclick = function(e) {
  e.preventDefault();

  if (validation ()) {
    userInput = encodeURIComponent(userInput); // стандарт, чтобы не поломался запрос
    userEmail = encodeURIComponent(userEmail);
    userPassword = encodeURIComponent(userPassword);
    userPassConf = encodeURIComponent(userPassConf);

    xhr.open ("POST", "index.php");
    xhr.send (getData ());
    openModal ('Спасибо за регистрацию');

    document.getElementById ("form").reset ();
  } else {
    modalCos.setTitle ('Данные не введены');
    modalCos.open ();
  }
};

function Modal () {
  let self = this;

  self.title = document.getElementById ('modal_title');

  self.open = function () {
    modal.style.display = "block";
    body.style.overflow = "hidden";
  }

  self.setTitle = function (title) {
  self.title.innerText = title;
  };
};

let modalCos = new Modal ();


