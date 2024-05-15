const questionContainer = document.querySelectorAll(".question__container");
const answerText = document.querySelectorAll(".answer__text");
const arrow = document.querySelectorAll(".arrow__");
const questionTitle = document.querySelectorAll(".question__title");

questionContainer.forEach((i, a) => {
    questionContainer[a].addEventListener("click", () => {

        for (let i = 0; i < questionContainer.length; i++){
            questionTitle[i].classList.remove("question__title_highlight");
            answerText[i].classList.add("hide");
            arrow[i].classList.remove("arrow__up");
            arrow[i].classList.add("arrow__down");            
        }

        questionTitle[a].classList.add("question__title_highlight");
        answerText[a].classList.remove("hide");
        arrow[a].classList.remove("arrow__down");
        arrow[a].classList.add("arrow__up");

    });
})
