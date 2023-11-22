const perfmanMenu = document.querySelector(".perfMan-menu");
const perfmanButton = document.querySelector("#pH");
const mainContainer = document.querySelector(".main-container");
const perfwomanMenu = document.querySelector(".perfWoman-menu");
const perfwomanButton = document.querySelector("#pM");


perfmanButton.addEventListener("click", showPerfmanMenu);
perfwomanButton.addEventListener("click", showPerfwomanMenu)




function showPerfmanMenu(){
    mainContainer.classList.add("inactive");
    perfmanMenu.classList.remove("inactive");
}

function showPerfwomanMenu(){
    mainContainer.classList.add("inactive");
    perfwomanMenu.classList.remove("inactive");
}