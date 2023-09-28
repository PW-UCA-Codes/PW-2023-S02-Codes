let textElement = null;
let addBtn = null;

let counter = 0;

const bindElements = () => {
    textElement = document.querySelector("h1#text");
    addBtn = document.querySelector("#add-btn");
}

const bindListeners = () => {
    addBtn.addEventListener("click", (e) => {
        counter = counter + 1;
        textElement.textContent = counter;
    });
}

const main = () => {
    bindElements();
    bindListeners();

    textElement.textContent = counter;
}

window.onload = main;