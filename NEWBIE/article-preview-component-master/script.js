const socialmediaContainer = document.querySelector('.socialmedia__container');
const authorButton = document.querySelector(".author__button");
const authorButtonImage = document.querySelector(".author__button_image");

authorButton.addEventListener("click", () => {
    socialmediaContainer.classList.remove("hide");
    authorButton.style.backgroundColor = "var(--desaturateddarkblue)";
    authorButtonImage.style.filter = "brightness(0) invert(1)";
});


document.addEventListener('click', function handleClickOutsideBox(event) {
        event.preventDefault();

        if (!authorButton.contains(event.target)){
            socialmediaContainer.classList.add("hide");
            authorButton.style.backgroundColor = "var(--lightgrayishblue)";
            authorButtonImage.style.filter = "brightness(1) invert(0)";
        }
});