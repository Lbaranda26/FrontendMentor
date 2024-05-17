const registrationInput = document.querySelectorAll(".registration__input");
const registrationErrorImage = document.querySelectorAll(".registration__error_image");
const registrationErrorText = document.querySelectorAll(".registration__error_text");
const registrationButton = document.querySelector(".registration__button");

registrationButton.addEventListener("click", () => {


    let validName = /^[a-zA-Z\s-]+$/;
    let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let passwordPattern= /^[A-Za-z]\w{7,14}$/;

        if (!validName.test(registrationInput[0].value)){
            registrationFail(0);            
        }else{
            registrationSuccess(0);
        }

        if (!validName.test(registrationInput[1].value)){
            registrationFail(1);            
        }else{
            registrationSuccess(1);
        }

        if (registrationInput[2].value.match(validEmail)){
            registrationSuccess(2);
        }else{
            registrationFail(2);
        }

        if (registrationInput[3].value.match(passwordPattern)){
            registrationSuccess(3);
        }else{
            registrationFail(3);
        }


});

function registrationSuccess(number){
    registrationInput[number].classList.remove("registration__error_border");
    registrationErrorImage[number].classList.add("hide");
    registrationErrorText[number].classList.add("hide");
}

function registrationFail(number){
    registrationInput[number].classList.add("registration__error_border");
    registrationErrorImage[number].classList.remove("hide");
    registrationErrorText[number].classList.remove("hide");
}
