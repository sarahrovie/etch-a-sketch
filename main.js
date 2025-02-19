const container = document.querySelector("#container");
const btn = document.querySelector("#grid-btn");


const createDivs = (num = 17) => {   
    let i = 1;

    while (i < num) {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("id", i);
        newDiv.setAttribute("class", "grid-div");
        container.appendChild(newDiv);
        i++;
    }
}

btn.addEventListener("click", () => {
    const number = parseInt(prompt("Number of squares per side:"));

    if (number > 100) {
        alert("Please input a number above 1 and below 100!");
    }

    const numOfDivs = (number * number) + 1; 

    removeAllChildren(container);
    createDivs(numOfDivs);
})

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