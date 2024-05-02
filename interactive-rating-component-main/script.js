const rateNumber = document.querySelectorAll(".rate__number");
const thankyouContainer = document.querySelector(".thankyou__container");
const ratingButton = document.querySelector(".rating__button");
const ratingContainer = document.querySelector(".rating__container");
let selectedRating = document.querySelector(".selected__rating");
let selectedNumber;

rateNumber.forEach((i, e) => {

  rateNumber[e].addEventListener("mouseenter", () => {
    rateNumber[e].style.backgroundColor = "var(--orange)";
    rateNumber[e].style.color = "var(--white)"; 
  });
  rateNumber[e].addEventListener("mouseleave", () => {
    if (selectedNumber == e){
      rateNumber[e].style.backgroundColor = "var(--lightgrey)";
      rateNumber[e].style.color = "var(--white)";        
    }else{
      rateNumber[e].style.backgroundColor = "var(--backgroundcolor)";
      rateNumber[e].style.color = "var(--lightgrey)";
    }
  });
  

  rateNumber[e].addEventListener('click', () => {
    selectedNumber = e;

    selectedRating.textContent = e + 1;
    
    for(let i = 0; i < rateNumber.length; i++){
      rateNumber[i].style.backgroundColor = "var(--backgroundcolor)";
      rateNumber[i].style.color = "var(--lightgrey)"; 
    }

    rateNumber[e].style.backgroundColor = "var(--lightgrey)";
    rateNumber[e].style.color = "var(--white)";
  });

});


ratingButton.addEventListener("click", () => {
  thankyouContainer.classList.remove("hide");
  ratingContainer.classList.add("hide");
});