var nameInput = document.getElementById("signinName");
var emailInput = document.getElementById("signinEmail");
var passInput = document.getElementById("signinPassword2");

var loginEmailInput = document.getElementById("signinEmail");
var loginPassInput = document.getElementById("signinPassword");

var users = localStorage.getItem("usersList")
  ? JSON.parse(localStorage.getItem("usersList"))
  : [];

var signupBtn = document.querySelector(
  "button.btn.btn-outline-info.w-100.my-3"
);
if (signupBtn && nameInput && emailInput && passInput) {
  signupBtn.addEventListener("click", function () {
    let requiredMsg = document.getElementById("required");

    if (
      nameInput.value === "" ||
      emailInput.value === "" ||
      passInput.value === ""
    ) {
      requiredMsg.innerHTML = `<span class="text-danger">All inputs is required</span>`;
      return;
    }

    if (users.some((user) => user.email === emailInput.value)) {
      requiredMsg.innerHTML = `<span class="text-danger">Email already exists</span>`;
      return;
    }

    let user = {
      name: nameInput.value,
      email: emailInput.value,
      password: passInput.value,
    };

    users.push(user);
    localStorage.setItem("usersList", JSON.stringify(users));
    requiredMsg.innerHTML = `<span class="text-success">Success</span>`;

    nameInput.value = "";
    emailInput.value = "";
    passInput.value = "";
  });
}

var loginBtn = document.querySelector("a.btnn.btn.btn-outline-info.w-100.my-3");
if (loginBtn && loginEmailInput && loginPassInput) {
  loginBtn.addEventListener("click", function (e) {
    let resultMsg = document.getElementById("result-sign");

    if (loginEmailInput.value === "" || loginPassInput.value === "") {
      resultMsg.innerHTML = `<span class="text-danger">All inputs is required</span>`;
      e.preventDefault();
      return;
    }

    var foundUser = users.find(
      (user) =>
        user.email === loginEmailInput.value &&
        user.password === loginPassInput.value
    );

    if (foundUser) {
      localStorage.setItem("homeList", JSON.stringify(foundUser.name));
      loginBtn.setAttribute("href", "theerdIndex.html");
    } else {
      resultMsg.innerHTML = `<span class="text-danger">Incorrect email or password</span>`;
      e.preventDefault();
    }
  });
}

var welcomeElement = document.getElementById("userName");
if (welcomeElement) {
  var userName = localStorage.getItem("homeList");
  if (userName) {
    welcomeElement.innerHTML = `Welcome ${JSON.parse(userName)}`;
  }
}
