// تسجيل الحساب (Sign Up)
var nameInput = document.getElementById("signinName");
var emailInput = document.getElementById("signinEmail");
var passInput = document.getElementById("signinPassword2");

// تسجيل الدخول (Login)
var loginEmailInput = document.getElementById("signinEmail");
var loginPassInput = document.getElementById("signinPassword");

// تأكد من وجود مستخدمين
var users = localStorage.getItem("usersList")
  ? JSON.parse(localStorage.getItem("usersList"))
  : [];

// ====== إنشاء حساب ======
var signupBtn = document.querySelector(
  "button.btn.btn-outline-info.w-100.my-3"
);
if (signupBtn && nameInput && emailInput && passInput) {
  signupBtn.addEventListener("click", function () {
    if (
      nameInput.value === "" ||
      emailInput.value === "" ||
      passInput.value === ""
    ) {
      alert("All inputs are required");
      return;
    }

    if (users.some((user) => user.email === emailInput.value)) {
      alert("Email already exists");
      return;
    }

    let user = {
      name: nameInput.value,
      email: emailInput.value,
      password: passInput.value,
    };

    users.push(user);
    localStorage.setItem("usersList", JSON.stringify(users));
    alert("Account created successfully!");
    nameInput.value = "";
    emailInput.value = "";
    passInput.value = "";
  });
}

// ====== تسجيل الدخول ======
var loginBtn = document.querySelector("a.btnn.btn.btn-outline-info.w-100.my-3");
if (loginBtn && loginEmailInput && loginPassInput) {
  loginBtn.addEventListener("click", function (e) {
    if (loginEmailInput.value === "" || loginPassInput.value === "") {
      alert("All inputs are required");
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
      loginBtn.setAttribute("href", "theerdIndex.html"); // يكمل التنقل
    } else {
      alert("Incorrect email or password");
      e.preventDefault();
    }
  });
}

// ====== صفحة الترحيب ======
var welcomeElement = document.getElementById("userName");
if (welcomeElement) {
  var userName = localStorage.getItem("homeList");
  if (userName) {
    welcomeElement.innerHTML = `Welcome ${JSON.parse(userName)}`;
  }
}
