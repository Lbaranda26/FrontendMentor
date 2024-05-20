const detailInput = document.querySelectorAll(".detail__input");
const detailRadioInput = document.querySelectorAll(".detail__radio__input");
const detailTextarea = document.querySelector(".detail__textarea");
const detailCheckbox = document.querySelector(".detail__checkbox");

const detailError = document.querySelectorAll(".detail__error");
const detailEmailError = document.querySelector(".detail__email__error");

const submitButton = document.querySelector(".submit__button");

const detailRadioWrapper = document.querySelectorAll(".detail__radio__wrapper");

const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const successformContainer = document.querySelector(".successform__container");

//
let counterInput = [false, false, false];
let counterRadio = false;
let counterTextArea = false;
let counterCheckbox = false;

submitButton.addEventListener("click", () => {

    errorBlankCheck(5);
    errorBlankTextarea(4);
    errorBlankRadio(3);
    errorBlankInput(2);
    errorBlankInput(1);
    errorBlankInput(0);
    emailValidator(2);

    if (counterInput[0] === false && counterInput[1] === false && counterInput[2] === false && counterRadio === false && counterTextArea === false && counterCheckbox === false){
        successformContainer.classList.add("hide");
        return false;
    }else{
        successformContainer.classList.remove("hide");
        window.scrollTo(0, 0);
        return true;
    }

})

detailRadioInput.forEach((i, e) => {
    detailRadioInput[e].addEventListener("click", () => {
        for (let i = 0; i < detailRadioWrapper.length; i++){
            detailRadioWrapper[i].style.backgroundColor = "var(--White)";        
        }
        detailRadioWrapper[e].style.backgroundColor = "var(--LightGreen)";
    });  
});

function errorBlankInput(input){
    if (detailInput[input].value === ""){
        detailError[input].classList.remove("hide");
        detailInput[input].focus();
        counterInput[input] = false;
    }else{
        detailError[input].classList.add("hide");
        counterInput[input] = true;
    }
}

function errorBlankTextarea(input){
    if (detailTextarea.value === ""){
        detailError[input].classList.remove("hide");
        counterTextArea = false;
        detailTextarea.focus(); 
    }else{
        detailError[input].classList.add("hide");       
        counterTextArea = true;
    }
}

function errorBlankRadio(input){
    if (detailRadioInput[0].checked === false && detailRadioInput[1].checked === false){
        detailRadioInput[0].focus();
        detailError[input].classList.remove("hide");
        counterRadio = false;
    }else{
        detailError[input].classList.add("hide");
        counterRadio = true;
    }
}

function errorBlankCheck(input){
    if(detailCheckbox.checked === false){
        detailCheckbox.focus();
        detailError[input].classList.remove("hide");
        counterCheckbox = false;
    }else{
        detailError[input].classList.add("hide");
        counterCheckbox = true;
    }
}

function emailValidator(input){
    if (!detailInput[input].value.match(validRegex)){
        detailEmailError.classList.remove("hide");
        detailInput[input].focus();
        counterInput[2] = false;
    }else{
        detailEmailError.classList.add("hide");
        counterInput[2] = true;
    }
}