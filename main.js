const perfmanMenu = document.querySelector(".perfMan-menu");
const perfmanButton = document.querySelector("#pH");
const mainContainer = document.querySelector(".main-container");
const perfwomanMenu = document.querySelector(".perfWoman-menu");
const perfwomanButton = document.querySelector("#pM");
const backButton = document.querySelector(".back");
const backButtonW = document.querySelector(".backW");


perfmanButton.addEventListener("click", showPerfmanMenu);
perfwomanButton.addEventListener("click", showPerfwomanMenu);
backButton.addEventListener("click", backMenu);
backButtonW.addEventListener("click", backMenuW);




function showPerfmanMenu(){
    mainContainer.classList.add("inactive");
    perfmanMenu.classList.remove("inactive");
}

function showPerfwomanMenu(){
    mainContainer.classList.add("inactive");
    perfwomanMenu.classList.remove("inactive");
}

function backMenu(){
    perfmanMenu.classList.add("inactive");
    mainContainer.classList.remove("inactive");
}

function backMenuW(){
    perfwomanMenu.classList.add("inactive");
    mainContainer.classList.remove("inactive");
}