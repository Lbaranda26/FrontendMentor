const emailError = document.querySelector(".email__error");
const emailButton = document.querySelector(".email__button");
const emailInput = document.querySelector(".email__input");
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

emailButton.addEventListener("click", () => {
    if (emailInput.value.match(validRegex)){
        emailError.classList.add("hide");
    }else{
        emailError.classList.remove("hide");
    }
});