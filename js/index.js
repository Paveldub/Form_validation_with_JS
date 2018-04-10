let button = document.getElementById('button');

button.onsubmit = function(e) {
  e.preventDefault();

  // GETTING ALL TEXT OBJECTS
  let username = document.forms["vform"]["username"];
  let email = document.forms["vform"]["email"];
  let password = document.forms["vform"]["password"];
  let password_confirmation = document.forms["vform"]["password_confirmation"];

  // GETTING ALL ERROR DISPLAY OBJECTS
  let name_error = document.getElementById("name_error");
  let email_error = document.getElementById("email_error");
  let password_error = document.getElementById("password_error");

  // SETTING ALL EVENT LISTENERS
  username.addEventListener("blur", nameVerify, true);
  email.addEventListener("blur", emailVerify, true);
  password.addEventListener("blur", passwordVerify, true);

  // Validation function
  function validation() {
    // username validation
    if (username.value == "") {
      username.style.border = "1px solid red";
      name_error.textContent = "User name is required";
      username.focus();
      return false;
    }
    // email validation
    if (email.value == "") {
      email.style.border = "1px solid red";
      email_error.textContent = "Email is required";
      email.focus();
      return false;
    }
    // password validation
    if (password.value == "") {
      password.style.border = "1px solid red";
      password_error.textContent = "Password is required";
      password.focus();
      return false;
    }
    // Check if the two passwords match
    if (password.value != password_confirmation.value) {
      password.style.border = "1px solid red";
      password_confirmation.style.border = "1px solid red";
      password_error.innerHTML = "The two passwords do not match";
      return false;
    }
  }

  // Event handler functions
  function nameVerify() {
    // user name varify
    if (username.value != "") {
      username.style.border = "1px solid #35F200";
      name_error.innerHTML = "";
      return true;
    }
  }

  function emailVerify() {
    // email varify
    if (email.value != "") {
      email.style.border = "1px solid #35F200";
      email_error.innerHTML = "";
      return true;
    }
  }

  function passwordVerify() {
    // password varify
    if (password.value != "") {
      password.style.border = "1px solid #35F200";
      password_error.innerHTML = "";
      return true;
    }
  }
};

// AJAX
let servResponse = document.querySelector("#response");

button.onsubmit = function(e) {
    e.preventDefault();

    let userInput = document.forms.vform.username.value;
    let userEmail = document.forms.vform.email.value;
    let userPassword = document.forms.vform.password.value;
    let userPassConf = document.forms.vform.password_confirmation.value;

    userInput = encodeURIComponent(userInput); // стандарт, чтобы не поломался запрос
    userEmail = encodeURIComponent(userEmail);
    userPassword = encodeURIComponent(userPassword);
    userPassConf = encodeURIComponent(userPassConf);

    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'index.php');

    let formData = new FormData(document.forms.vform);

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            servResponse.textContent = xhr.responseText;
        }
    }

    xhr.send(formData);
};
