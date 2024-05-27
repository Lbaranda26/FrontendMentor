const bodyColor = document.body;
const title = document.querySelector(".title");
const themeTitle = document.querySelector(".theme__title");
const themeLabelContainer = document.querySelector(".theme__label__container");
const themeSlider = document.querySelector(".theme__slider");

const style = document.querySelector('[data="test"]');
const numberContainer = document.querySelector(".number__container");

const numberWrapper = document.querySelectorAll(".number__wrapper");

numberWrapper.forEach((i, e) => {
    numberWrapper[e].addEventListener("mouseenter", () => {
        numberWrapper[e].style.backgroundColor = "var(--theme--one-numbgHover)";
    });
    numberWrapper[e].addEventListener("mouseleave", () => {
        numberWrapper[e].style.backgroundColor = "var(--theme--one-numbg)";
    });
});

numberDel.addEventListener("mouseenter", () => {
    numberDel.style.backgroundColor = "var(--theme--one-numbgResetDelHover)";        
});
numberDel.addEventListener("mouseleave", () => {
    numberDel.style.backgroundColor = "var(--theme--one-primaryhl)";        
});
numberReset.addEventListener("mouseenter", () => {
    numberReset.style.backgroundColor = "var(--theme--one-numbgResetDelHover)";        
});
numberReset.addEventListener("mouseleave", () => {
    numberReset.style.backgroundColor = "var(--theme--one-primaryhl)";        
});
numberEqual.addEventListener("mouseenter", () => {
    numberEqual.style.backgroundColor = "var(--theme--one-numbgEqualHover)";        
});
numberEqual.addEventListener("mouseleave", () => {
    numberEqual.style.backgroundColor = "var(--theme--one-secondaryhl)";        
});


themeSlider.oninput = function() {   
    setData(slider.value);
};

//
function setData(x){

    if (x === "1"){
        style.innerHTML = "theme__slider::-webkit-slider-thumb { background: var(--theme--one-secondaryhl) }";

        themeSlider.addEventListener("mouseenter", () => {
            style.innerHTML = ".theme__slider::-webkit-slider-thumb { background: var(--theme--one-toggleHover) }";
        });
        themeSlider.addEventListener("mouseleave", () => {
            style.innerHTML = ".theme__slider::-webkit-slider-thumb { background: var(var--theme--one-secondaryhl)) }";
        });


        bodyColor.style.backgroundColor = "var(--theme--one-body)";
        title.style.color = "var(--theme--one-text)";
        themeTitle.style.color = "var(--theme--one-text)";
        themeLabelContainer.style.color = "var(--theme--one-text)";
        themeSlider.style.backgroundColor = "var(--theme--one-mainbg)";
        total.style.backgroundColor = "var(--theme--one-totalbg)";
        total.style.color = "var(--theme--one-text)";
        numberContainer.style.backgroundColor = "var(--theme--one-mainbg)";

        numberWrapper.forEach((i, e) => {
            numberWrapper[e].style.backgroundColor = "var(--theme--two-numbg)";
            numberWrapper[e].style.color = "var(--theme--two-text)";
            numberWrapper[e].style.boxShadow = "var(--theme--one-boxshadow1)";
        });        

        numberDel.style.backgroundColor = "var(--theme--one-primaryhl)";
        numberDel.style.color = "var(--theme--one-text)";
        numberDel.style.boxShadow = "var(--theme--one-boxshadow2)";

        numberReset.style.backgroundColor = "var(--theme--one-primaryhl)";
        numberReset.style.color = "var(--theme--one-text)";
        numberReset.style.boxShadow = "var(--theme--one-boxshadow2)";

        numberEqual.style.backgroundColor = "var(--theme--one-secondaryhl)";
        numberEqual.style.color = "var(--theme--one-text)";
        numberEqual.style.boxShadow = "var(--theme--one-boxshadow3)";

        numberWrapper.forEach((i, e) => {
            numberWrapper[e].addEventListener("mouseenter", () => {
                numberWrapper[e].style.backgroundColor = "var(--theme--one-numbgHover)";
            });
        
            numberWrapper[e].addEventListener("mouseleave", () => {
                numberWrapper[e].style.backgroundColor = "var(--theme--one-numbg)";
            })
        });

        numberDel.addEventListener("mouseenter", () => {
            numberDel.style.backgroundColor = "var(--theme--one-numbgResetDelHover)";        
        });
        numberDel.addEventListener("mouseleave", () => {
            numberDel.style.backgroundColor = "var(--theme--one-primaryhl)";        
        });
        numberReset.addEventListener("mouseenter", () => {
            numberReset.style.backgroundColor = "var(--theme--one-numbgResetDelHover)";        
        });
        numberReset.addEventListener("mouseleave", () => {
            numberReset.style.backgroundColor = "var(--theme--one-primaryhl)";        
        });
        numberEqual.addEventListener("mouseenter", () => {
            numberEqual.style.backgroundColor = "var(--theme--one-numbgEqualHover)";        
        });
        numberEqual.addEventListener("mouseleave", () => {
            numberEqual.style.backgroundColor = "var(--theme--one-secondaryhl)";        
        });
    
    }else if (x === "2"){
        style.innerHTML = ".theme__slider::-webkit-slider-thumb { background: var(--theme--two-secondaryhl) }";

        themeSlider.addEventListener("mouseenter", () => {
            style.innerHTML = ".theme__slider::-webkit-slider-thumb { background: var(--theme--two-toggleHover) }";
        });
        themeSlider.addEventListener("mouseleave", () => {
            style.innerHTML = ".theme__slider::-webkit-slider-thumb { background: var(var--theme--two-secondaryhl)) }";
        });

        bodyColor.style.backgroundColor = "var(--theme--two-body)";
        title.style.color = "var(--theme--two-text)";
        themeTitle.style.color = "var(--theme--two-text)";
        themeLabelContainer.style.color = "var(--theme--two-text)";
        themeSlider.style.backgroundColor = "var(--theme--two-mainbg)";
        total.style.backgroundColor = "var(--theme--two-totalbg)";
        total.style.color = "var(--theme--two-text)";
        numberContainer.style.backgroundColor = "var(--theme--two-mainbg)";

        numberWrapper.forEach((i, e) => {
            numberWrapper[e].style.backgroundColor = "var(--theme--one-numbg)";
            numberWrapper[e].style.color = "var(--theme--two-text)";
            numberWrapper[e].style.boxShadow = "var(--theme--two-boxshadow1)";
        });

        numberDel.style.backgroundColor = "var(--theme--two-primaryhl)";
        numberDel.style.color = "var(--theme--two-textnum)";
        numberDel.style.boxShadow = "var(--theme--two-boxshadow2)";

        numberReset.style.backgroundColor = "var(--theme--two-primaryhl)";
        numberReset.style.color = "var(--theme--two-textnum)";
        numberReset.style.boxShadow = "var(--theme--two-boxshadow2)";


        numberEqual.style.backgroundColor = "var(--theme--two-secondaryhl)";
        numberEqual.style.color = "var(--theme--two-textnum)";
        numberEqual.style.boxShadow = "var(--theme--two-boxshadow3)";


        numberWrapper.forEach((i, e) => {
            numberWrapper[e].addEventListener("mouseenter", () => {
                numberWrapper[e].style.backgroundColor = "var(--theme--two-numbgHover)";
            });
        
            numberWrapper[e].addEventListener("mouseleave", () => {
                numberWrapper[e].style.backgroundColor = "var(--theme--two-numbg)";
            })
        })

        numberDel.addEventListener("mouseenter", () => {
            numberDel.style.backgroundColor = "var(--theme--two-numbgResetDelHover)";        
        });
        numberDel.addEventListener("mouseleave", () => {
            numberDel.style.backgroundColor = "var(--theme--two-primaryhl)";        
        });
        numberReset.addEventListener("mouseenter", () => {
            numberReset.style.backgroundColor = "var(--theme--two-numbgResetDelHover)";        
        });
        numberReset.addEventListener("mouseleave", () => {
            numberReset.style.backgroundColor = "var(--theme--two-primaryhl)";        
        });
        numberEqual.addEventListener("mouseenter", () => {
            numberEqual.style.backgroundColor = "var(--theme--two-numbgEqualHover)";        
        });
        numberEqual.addEventListener("mouseleave", () => {
            numberEqual.style.backgroundColor = "var(--theme--two-secondaryhl)";        
        });

    }else if (x === "3"){
        style.innerHTML = ".theme__slider::-webkit-slider-thumb { background: var(--theme--three-secondaryhl) }";

        themeSlider.addEventListener("mouseenter", () => {
            style.innerHTML = ".theme__slider::-webkit-slider-thumb { background: var(--theme--three-toggleHover) }";
        });
        themeSlider.addEventListener("mouseleave", () => {
            style.innerHTML = ".theme__slider::-webkit-slider-thumb { background: var(var--theme--three-secondaryhl)) }";
        });

        bodyColor.style.backgroundColor = "var(--theme--three-body)";
        title.style.color = "var(--theme--three-text)";
        themeTitle.style.color = "var(--theme--three-text)";
        themeLabelContainer.style.color = "var(--theme--three-text)";
        themeSlider.style.backgroundColor = "var(--theme--three-mainbg)";
        total.style.backgroundColor = "var(--theme--three-totalbg)";
        total.style.color = "var(--theme--three-text)";
        numberContainer.style.backgroundColor = "var(--theme--three-mainbg)";

        numberWrapper.forEach((i, e) => {
            numberWrapper[e].style.backgroundColor = "var(--theme--three-numbg)";
            numberWrapper[e].style.color = "var(--theme--three-text)";
            numberWrapper[e].style.boxShadow = "var(--theme--three-boxshadow1)";
        });

        numberDel.style.backgroundColor = "var(--theme--three-primaryhl)";
        numberDel.style.color = "var(--theme--three-textnum)";
        numberDel.style.boxShadow = "var(--theme--three-boxshadow2)";

        numberReset.style.backgroundColor = "var(--theme--three-primaryhl)";
        numberReset.style.color = "var(--theme--three-textnum)";
        numberReset.style.boxShadow = "var(--theme--three-boxshadow2)";

        numberEqual.style.backgroundColor = "var(--theme--three-secondaryhl)";
        numberEqual.style.color = "var(--theme--three-textnum2)";
        numberEqual.style.boxShadow = "var(--theme--three-boxshadow3)";

        numberWrapper.forEach((i, e) => {
            numberWrapper[e].addEventListener("mouseenter", () => {
                numberWrapper[e].style.backgroundColor = "var(--theme--three-numbgHover)";
            });
        
            numberWrapper[e].addEventListener("mouseleave", () => {
                numberWrapper[e].style.backgroundColor = "var(--theme--three-numbg)";
            })
        })

        numberDel.addEventListener("mouseenter", () => {
            numberDel.style.backgroundColor = "var(--theme--three-numbgResetDelHover)";        
        });
        numberDel.addEventListener("mouseleave", () => {
            numberDel.style.backgroundColor = "var(--theme--three-primaryhl)";        
        });
        numberReset.addEventListener("mouseenter", () => {
            numberReset.style.backgroundColor = "var(--theme--three-numbgResetDelHover)";        
        });
        numberReset.addEventListener("mouseleave", () => {
            numberReset.style.backgroundColor = "var(--theme--three-primaryhl)";        
        });
        numberEqual.addEventListener("mouseenter", () => {
            numberEqual.style.backgroundColor = "var(--theme--three-numbgEqualHover)";        
        });
        numberEqual.addEventListener("mouseleave", () => {
            numberEqual.style.backgroundColor = "var(--theme--three-secondaryhl)";        
        });
    }


};
//