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
    else{
        var user={
            name:signinNameInput,
            email:signinEmailInput,
            password:signinPassword2
        }
        users.push.(user);
        localStorage.setItem("userList",JSON.stringify(users))
        displaySucess()
    }
  }else{
    displayRequired();
  }
  
}


//welcome Function
function welcomeUser(){//???????????????????????????????????????????????????

}


//exti email
function exitEmail(){
for(var i = 0; i < users.length; i++){
if(users[i].email==signinEmailInput.value){
return true
}
}
return false
}


//exit login
function exitLogin(){
    for(var i = 0; i < users.length; i++){
    if(users[i].email==signinEmailInput.value && users.password==signinPasswordInput.value){
console.log(users[i].name);
var name = users[i].name
localStorage.setItem("homeList",JSON.stringify(name))
localStorage.replace("scoundIndex.html")


console.log("boda");
return true

    }
    }
}





//clear function 
function clearInputs (){
    signinNameInput.value=""
}














