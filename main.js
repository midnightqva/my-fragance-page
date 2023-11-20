const perfmanMenu = document.querySelector(".perfMan-menu");
const perfManButton = document.querySelector("#pH");
const mainContainer = document.querySelector(".main-container");



perfManButton.addEventListener("click", togglePerfmanMenu);




function togglePerfmanMenu(){
    mainContainer.classList.add("inactive");
   // perfmanMenu.classList.remove("inactive");
}