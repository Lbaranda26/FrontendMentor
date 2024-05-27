const total = document.querySelector(".total");
const numbers = document.querySelectorAll(".number__wrapper");
const numberDel = document.querySelector(".number__del");
const numberReset = document.querySelector(".number__reset");
const numberEqual = document.querySelector(".number__equal");
let regex = /([./*+-])\1+/;

numbers.forEach((i, e) => {
    numbers[e].addEventListener("click", (evt) => {
        inputNumber("1");
        inputNumber("2");
        inputNumber("3");
        inputNumber("4");
        inputNumber("5");
        inputNumber("6");
        inputNumber("7");
        inputNumber("8");
        inputNumber("9");
        inputNumber("0");
        inputNumber("+");
        inputNumber("-");
        inputNumber("/");

        if (numbers[e].textContent === "x"){
            total.value+= "*";
        }
    total.value = total.value.replace(regex, '$1');

});

    const inputNumber = (number) => {
        if (numbers[e].textContent === number){
            total.value+= number;
        }
    }

});


numberEqual.addEventListener("click", () => {
   total.value = eval(total.value);
});

numberDel.addEventListener("click", () => {
    let totalSplit = total.value.split("");
    totalSplit.pop();
    total.value = totalSplit.join("");
});

numberReset.addEventListener("click", () => {
    total.value = "";
});

