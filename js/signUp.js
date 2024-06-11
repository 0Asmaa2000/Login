var formprev = document.getElementById("FormPrevent");

// var btnn1 = document.getElementById("Login1");
var NameInput = document.getElementById("name1");
var emailInput = document.getElementById("Emaill");
var PasswordInput = document.getElementById("Pass");
// var btnn = document.getElementById("Login");
var paragraph = document.getElementById("required");
var alertmail = document.getElementById("mailAlert");
var alertmailExists = document.getElementById("mailAlertExists");
var alertSuccess = document.getElementById("Success");

var loginContainer = [];
loginContainer = JSON.parse(localStorage.getItem("Information"));

//form prevent Default
formprev.addEventListener("submit", function (e) {
  e.preventDefault();
  validation(/^[a-zA-Z0-9$_]{3,}$/, NameInput, paragraph);
  validation(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, emailInput, alertmail);
  validation(/^[a-zA-Z0-9$_]{3,}$/, PasswordInput, paragraph);
  checkvalidation();
  if (checkvalidation()) {
    AddDAta();
  }
});

////validation
function validation(regexT, elment, alert) {
  var regexPattrn = regexT;
  if (regexPattrn.test(elment.value)) {
    alert.classList.replace("d-block", "d-none");
    // console.log("valid");
    return true;
  } else {
    alert.classList.replace("d-none", "d-block");

    return false;
  }
}
///check Validation
function checkvalidation() {
  if (
    validation(/^[a-zA-Z0-9$_]{3,}$/, NameInput, paragraph) == true &&
    validation(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, emailInput, alertmail) == true &&
    validation(/^[a-zA-Z0-9$_]{3,}$/, PasswordInput, paragraph) == true
  ) {
    // console.log('AllValid');
    return true;
  } else {
    // console.log('wrong');
    return false;
  }
}
////Add Information
function AddDAta() {
  var UserInformation = {
    Name: NameInput.value,
    email: emailInput.value,
    password: PasswordInput.value,
    form: formprev.value,
  };
  if (isExists(UserInformation) == true) {
    alertmailExists.classList.replace("d-none", "d-block");
  } else {
    alertmailExists.classList.replace("d-block", "d-none");
    alertSuccess.classList.replace("d-none", "d-block");
    window.location.href = "index.html";
    loginContainer.push(UserInformation);
    console.log(loginContainer);
    localStorage.setItem("Information", JSON.stringify(loginContainer));
  }
}
//////email Exists
function isExists(UserInformation) {
  for (i = 0; i < loginContainer.length; i++) {
    if (
      loginContainer[i].email.toLowerCase() ==
      UserInformation.email.toLowerCase()
    ) {
      console.log("mtnil mawgog");
      return true;
    }
  }
}
