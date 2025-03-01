const container = document.querySelector("#container");
const btn = document.querySelector("#grid-btn");

const createDivs = (num = 4) => {
   for (let i = 0; i < num; i++) {
        const newRow = document.createElement("div");
        newRow.setAttribute("class", "grid-row");
        container.appendChild(newRow);

        for (let j = 0; j < num; j++) {
            const newDiv = document.createElement("div");
            newDiv.setAttribute("class", "grid-div");
            newRow.appendChild(newDiv);
        }
    }
}

const removeAllChildren = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

btn.addEventListener("click", () => {
    const number = parseInt(prompt("Number of squares per side:"));

    if (!number || number <= 1 || number > 100) {
        alert("Please input a number above 1 and below 100!");
        return;
    }

    removeAllChildren(container);
    createDivs(number);
    
    const gridDivs = document.querySelectorAll(".grid-div");
    changeDivColor(gridDivs);
})

const changeColor = (div) => {
    div.classList.add("hover-color");
}

const changeDivColor = () => {
    const gridDivs = document.querySelectorAll(".grid-div");

    gridDivs.forEach(div => {
        div.addEventListener("mouseenter", () => {
            changeColor(div);
        })
    });
}

createDivs();
changeDivColor();
