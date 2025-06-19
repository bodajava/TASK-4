var userNameInput = document.getElementById("signinName");
var userEmailInput = document.getElementById("signinEmail");
var userPassInput = document.getElementById("signinPassword2");

var signEmailInput = document.getElementById("signinEmail");
var signPassInput = document.getElementById("signinPassword");

var signUpBtn = document.querySelector("button");
var loginBtn = document.querySelector("a");

// المصفوفة
var users;
if (localStorage.getItem("usersList") == null) {
  users = [];
} else {
  users = JSON.parse(localStorage.getItem("usersList"));
}

// ======================== Sign Up ========================
if (signUpBtn && userNameInput && userEmailInput && userPassInput) {
  signUpBtn.onclick = function () {
    if (!checkIsEmpty()) {
      if (exist()) {
        displayExist();
      } else {
        var user = {
          name: userNameInput.value,
          email: userEmailInput.value,
          password: userPassInput.value,
        };
        users.push(user);
        localStorage.setItem("usersList", JSON.stringify(users));
        displaySuccess();
        clearForm();
      }
    } else {
      displayRequired();
    }
  };
}

// ======================== Login ========================
if (loginBtn && signEmailInput && signPassInput) {
  loginBtn.onclick = function (e) {
    if (checkIsEmptySign()) {
      displayRequiredSign();
      e.preventDefault();
    } else {
      if (existLogin()) {
        loginBtn.setAttribute("href", "theerdIndex.html");
      } else {
        displayIncorrect();
        e.preventDefault();
      }
    }
  };
}

// ======================== Home Page ========================
function welcome() {
  var name = JSON.parse(localStorage.getItem("homeList"));
  document.getElementById("userName").innerHTML = `Welcome ${name}`;
}

// ======================== Check Functions ========================
function checkIsEmpty() {
  return (
    userNameInput.value === "" ||
    userEmailInput.value === "" ||
    userPassInput.value === ""
  );
}

function checkIsEmptySign() {
  return signEmailInput.value === "" || signPassInput.value === "";
}

function exist() {
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === userEmailInput.value) {
      return true;
    }
  }
  return false;
}

function existLogin() {
  for (var i = 0; i < users.length; i++) {
    if (
      users[i].email === signEmailInput.value &&
      users[i].password === signPassInput.value
    ) {
      var name = users[i].name;
      localStorage.setItem("homeList", JSON.stringify(name));
      return true;
    }
  }
  return false;
}

// ======================== Display Messages ========================
function displayRequired() {
  document.getElementById(
    "required"
  ).innerHTML = `<span class='text-danger'>All inputs is required</span>`;
}

function displayExist() {
  document.getElementById(
    "required"
  ).innerHTML = `<span class='text-danger'>Email already exists</span>`;
}

function displayIncorrect() {
  document.getElementById(
    "result-sign"
  ).innerHTML = `<span class='text-danger'>Incorrect email or password</span>`;
}

function displayRequiredSign() {
  document.getElementById(
    "result-sign"
  ).innerHTML = `<span class='text-danger'>All inputs is required</span>`;
}

function displaySuccess() {
  document.getElementById(
    "required"
  ).innerHTML = `<span class='text-success'>Success</span>`;
}

function clearForm() {
  userNameInput.value = "";
  userEmailInput.value = "";
  userPassInput.value = "";
}
