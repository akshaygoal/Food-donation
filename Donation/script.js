
// stores selector dropdown
  const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

// maya validation code

function checkpackageradio() {
  if(document.getElementById('chkMango').checked == true) {  
document.write(" radio button is selected");  }
    else if(document.getElementById('chkApple').checked == true) {  
document.write(" radio button is selected");  
    
} else {  
document.write(" radio button is not selected");  
}
}

function dateIsValid(ef) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;

  if (ef.match(regex) === null) {
    return false;
  }

  const date = new Date(ef);

  const timestamp = date.getTime();

  if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
    return false;
  }

  return date.toISOString().startsWith(ef);
}


// //login



// const login = function () {
//   // Modal window
//   const overlay = document.querySelector(".overlay");
//   //login window
//   const loginModal = document.querySelector(".modal__login");
//   const btnCloseLoginModal = document.querySelector(".btn--close--login-modal");
//   const btnOpenLoginModal = document.querySelector(".btn--open--login-modal");
//   const toOpenLoginModal = document.querySelector(".open--login");
//   //register window
//   const registerModal = document.querySelector(".modal__register");
//   const btnCloseRegisterModal = document.querySelector(
//     ".btn--close--register-modal"
//   );
//   const toOpenRegisterModal = document.querySelector(".open--register");
//   //open and closing modals
//   const openRegisterModal = function () {
//     loginModal.classList.add("hidden");
//     overlay.classList.remove("hidden");
//     registerModal.classList.remove("hidden");
//   };
//   const closeRegisterModal = function () {
//     overlay.classList.add("hidden");
//     registerModal.classList.add("hidden");
//   };
//   const openLoginModal = function () {
//     loginModal.classList.remove("hidden");
//     overlay.classList.remove("hidden");
//     registerModal.classList.add("hidden");
//   };
//   const closeLoginModal = function () {
//     loginModal.classList.add("hidden");
//     overlay.classList.add("hidden");
//   };
//   const closeModals = function () {
//     loginModal.classList.add("hidden");
//     overlay.classList.add("hidden");
//     registerModal.classList.add("hidden");
//   };
//   toOpenRegisterModal.addEventListener("click", openRegisterModal);
//   btnCloseRegisterModal.addEventListener("click", closeRegisterModal);
//   toOpenLoginModal.addEventListener("click", openLoginModal);
//   btnOpenLoginModal.addEventListener("click", openLoginModal);
//   btnCloseLoginModal.addEventListener("click", closeLoginModal);
//   overlay.addEventListener("click", closeModals);
//   document.addEventListener("keydown", function (e) {
//     if (e.key === "Escape") {
//       closeModals();
//     }
//   });

//   //validation

//   const loginForm = document.querySelector(".login-form");
//   const confirmLogin = loginForm.elements["submit"];

//   const registerForm = document.querySelector(".register-form");
//   const confirmRegister = registerForm.elements["submit"];

//   const validateEmail = function (form) {
//     var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     const email = form.elements["email"];
//     console.log(email);
//     if (!email.value.match(mailFormat)) {
//       email.setCustomValidity("Email address incorrect");
//       email.reportValidity();
//       email.addEventListener("click", () => email.setCustomValidity(""));
//     } else {
//       email.setCustomValidity("");
//       return true;
//     }
//   };

//   const validatePassword = function (form) {
//     const password = form.elements["password"];
//     const confirmPassword = form.elements["cpassword"];
//     if (!(password.value === confirmPassword.value)) {
//       confirmPassword.setCustomValidity("Passwords do not match");
//       confirmPassword.reportValidity();
//       confirmPassword.addEventListener("click", () =>
//         confirmPassword.setCustomValidity("")
//       );
//     } else {
//       confirmPassword.setCustomValidity("");
//       return true;
//     }
//   };

//   confirmLogin.addEventListener("click", function () {
//     if (
//       validateEmail(loginForm) &&
//       loginForm.elements["password"].checkValidity()
//     ) {
//       alert("Logged in!");
//     }
//   });

//   confirmRegister.addEventListener("click", function () {
//     if (
//       validateEmail(registerForm) &&
//       registerForm.elements["password"].checkValidity() &&
//       registerForm.elements["password"].checkValidity() &&
//       validatePassword(registerForm)
//     ) {
//       alert("Registered Succesfully!");
//     }
//   });
// };

// login();

// checkboxes

// window.onload = function () {
//   var tblFruits = document.getElementById("tblFruits");
//   var chks = tblFruits.getElementsByTagName("INPUT");
//   for (var i = 0; i < chks.length; i++) {
//       chks[i].onclick = function () {
//           for (var i = 0; i < chks.length; i++) {
//               if (chks[i] != this && this.checked) {
//                   chks[i].checked = false;
//               }
//           }
//       }
//     }
//   }
