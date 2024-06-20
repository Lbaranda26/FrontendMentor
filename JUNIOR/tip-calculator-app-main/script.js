const billInput = document.querySelector(".bill__input");
const buttonSelectionButton = document.querySelectorAll(".buttonselection__button");
const buttonSelectionLabel = document.querySelectorAll(".buttonselection__label");
const buttonselectionInput = document.querySelector(".buttonselection__input");
const numOfPeopleInput = document.querySelector(".numofpeople__input");
const tipTotal = document.querySelector(".tip__total");
const totalTotal = document.querySelector(".total__total");
const resetButton = document.querySelector(".reset__button");
const numofpeopleTextError = document.querySelector(".numofpeople__text_error");

let selectedTip;

/*
billInput.addEventListener("input", () => {
    tipTotal.textContent = functTipAmount(billInput.value, selectedTip, numOfPeopleInput.value).toFixed(2);    
    totalTotal.textContent = funcTotalAmount(billInput.value, numOfPeopleInput.value, tipTotal.textContent);
})
*/

buttonSelectionButton.forEach((i, e) => {
    buttonSelectionButton[e].addEventListener("click", () => {
        selectedTip = buttonSelectionButton[e].value;

        /*
            tipTotal.textContent = functTipAmount(billInput.value, selectedTip, numOfPeopleInput.value).toFixed(2);
            totalTotal.textContent = funcTotalAmount(billInput.value, numOfPeopleInput.value, tipTotal.textContent);
        */

        for(let i = 0; i < buttonSelectionLabel.length; i++){
            buttonSelectionLabel[i].style.backgroundColor = "var(--Verydarkcyan)";            
        }
        buttonSelectionLabel[e].style.backgroundColor = "var(--Strongcyan)";
    });
});

buttonselectionInput.addEventListener("input", () => {
    selectedTip = buttonselectionInput.value;
    tipTotal.textContent = functTipAmount(billInput.value, selectedTip, numOfPeopleInput.value).toFixed(2);
    totalTotal.textContent = funcTotalAmount(billInput.value, numOfPeopleInput.value, tipTotal.textContent).toFixed(2);    
})

numOfPeopleInput.addEventListener("input", () => {
    if (numOfPeopleInput.value <= 0){
        numofpeopleTextError.classList.remove("hide");
        numOfPeopleInput.classList.add("numofpeople__input_error");
    }else{
        numofpeopleTextError.classList.add("hide");
        numOfPeopleInput.classList.remove("numofpeople__input_error");
        tipTotal.textContent = functTipAmount(billInput.value, selectedTip, numOfPeopleInput.value).toFixed(2);
        totalTotal.textContent = funcTotalAmount(billInput.value, numOfPeopleInput.value, tipTotal.textContent).toFixed(2);
    
    }
});

resetButton.addEventListener("click", () => {
    billInput.value = 0;
    billInput.focus();
    buttonSelectionButton.values = 0;
    for(let i = 0; i < buttonSelectionLabel.length; i++){
        buttonSelectionLabel[i].style.backgroundColor = "var(--Verydarkcyan)";            
    }
    selectedTip = 0;
    buttonselectionInput.value = "";
    numOfPeopleInput.value = "";
    tipTotal.textContent = "0.00";
    totalTotal.textContent = "0.00";
});

function functTipAmount(bill,selectedTip,numberOfPeople){
    return Number(bill) * Number(selectedTip) / Number(numberOfPeople);
}

function funcTotalAmount(bill, numberOfPeople, tipAmount){
    return Number(bill) / Number(numberOfPeople) + Number(tipAmount);
}