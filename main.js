const gridContainer = document.querySelector("#grid-container");
let root = document.documentElement;

let numberOfTimes = 16;
root.style.setProperty('--row', 100/numberOfTimes+"%")
for(let j = 0; j <numberOfTimes;j++){
    const row = document.createElement("div");

    for(let i = 0; i <numberOfTimes;i++){
        const singleCell = document.createElement("div");
        // singleCell.innerHTML='<i class="bi bi-square"></i>'
        singleCell.innerHTML = "&nbsp;"
    
        
        
        // singleCell.textContent = "hi";
        singleCell.style.color = "black";
        singleCell.classList.add("bg-green")
        singleCell.addEventListener('mouseover', () => {
        singleCell.classList.add("bg-purple")   

        });
        row.appendChild(singleCell);
    }
    gridContainer.appendChild(row);
}



