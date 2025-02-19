const container = document.querySelector("#container");
const btn = document.querySelector("#grid-btn");

let i = 1;

const createDivs = (num = 16) => {   

    while (i <= num) {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("id", i);
        newDiv.setAttribute("class", "grid-div");
        container.appendChild(newDiv);
        i++;
    }
}

createDivs();

const gridDivs = document.querySelectorAll(".grid-div");

const changeColor = (div) => {
    div.classList.add("hover-color");
}

gridDivs.forEach(div => {
    div.addEventListener("mouseenter", () => {
        changeColor(div);
    })
});

const removeAllChildren = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

btn.addEventListener("click", () => {
    const number = parseInt(prompt("Number of squares per side:"));

    if (number > 100) {
        alert("Please input a number below 100!");
    }

    const numOfDivs = number * number; 
    
    removeAllChildren(container);
    createDivs(numOfDivs);
})