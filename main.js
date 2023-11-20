const perfmanMenu = document.querySelector(".perfMan-menu");
const perfmanButton = document.querySelector("#pH");
const mainContainer = document.querySelector(".main-container");



perfmanButton.addEventListener("click", togglePerfmanMenu);




function togglePerfmanMenu(){
    mainContainer.classList.add("inactive");
    perfmanMenu.classList.remove("inactive");
}