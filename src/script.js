const form = document.querySelector(".form");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const emailErr = document.querySelector(".emailErr");
const passwordErr = document.querySelector(".passwordErr");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (email.value.trim() == '') {
        emailErr.classList.add('error');
    } else {
        emailErr.classList.remove('error');
    }

    if (password.value.trim() == '') {
        passwordErr.classList.add('error');
    } else {
        passwordErr.classList.remove('error');
    }
    if(!email.value==""&& !password.value==""){
        document.querySelector('.submit').value="Signing";
    }

});

