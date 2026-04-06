// Variable
let title = document.getElementById("title");
let button = document.getElementById("changeBtn");

// Function
function changeTextAndColor() {
    title.textContent = "You clicked the button!";
    title.style.color = "blue";
}

// Event Listener
button.addEventListener("click", changeTextAndColor);