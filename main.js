const container = document.querySelector("#container");

let i = 1;

const createDivs = () => {   

    while (i < 17) {
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