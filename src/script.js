const form = document.querySelector(".form");
const email = document.querySelector(".emal").value;
const password = document.querySelector(".password").value;
form.addEventListener("submit", validate());
const validate = (e) => {
  e.preventdefault();
  if (email == "") {
    email.classList.add();
  }
};
