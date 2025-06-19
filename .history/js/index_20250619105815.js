//this is all inputs
var signinEmailInput = document.getElementById("signinEmail");
var signinPasswordInput = document.getElementById("signinPassword");

var signinNameInput = document.getElementById("signinName");
var signinEmailInput = document.getElementById("signinEmail");
var signinPassword2 = document.getElementById("signinPassword2");

//users is ==> []
var users;

//storg data
if (localStorage.getItem("userList") == null) {
  users = [];
} else {
  users = JSON.parse(localStorage.getItem("userList"));
}

//function Add User
function addUser() {
  if (!checkIsEmpty()) {
    if (exist()) {
      displayexist();
    }
  }
}
