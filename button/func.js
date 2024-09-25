console.log("func.js loaded");

function on_click() {
    let label = document.getElementById("label");
    
    if (label.innerHTML == "Good Bye") {
        label.innerHTML = "Hello";
        console.log("Hello");
    } else {
        label.innerHTML = "Good Bye";
        console.log("Good Bye");
    }
}