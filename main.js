const container = document.querySelector("#container");

let i = 1;

const createDivs = () => {   

    while (i < 17) {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("id", i);
        container.appendChild(newDiv);
        i++;
    }
}

createDivs();