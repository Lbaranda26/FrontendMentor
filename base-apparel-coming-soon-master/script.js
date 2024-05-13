const emailTextbox = document.querySelector(".email__input");
const emailButton = document.querySelector(".email__button");
const errorText = document.querySelector(".error");
const errorWarning = document.querySelector(".email__warning");
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



emailButton.addEventListener("click", () => {
    if (emailTextbox.value.match(validRegex)){
        errorText.classList.add("hide");
        errorWarning.classList.add("hide");
        emailTextbox.classList.remove("error__input");
    }else{
        errorText.classList.remove("hide");
        errorWarning.classList.remove("hide");
        emailTextbox.classList.add("error__input");
        emailTextbox.focus();
    }
});