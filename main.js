const container = document.querySelector('.container');

let initialSqNum = 16;
let isDrawing = false;
let isClick = true;

function createGrid(rowNum, colNum) {
    container.innerHTML = '';
    let sqSize = Math.floor(Math.min(container.clientWidth, container.clientHeight) )/ rowNum;
    
    for (let i = 0; i < rowNum; i++) {
        for (let j = 0; j < colNum; j++) {
            let div = document.createElement('div');
            div.style.boxSizing = 'border-box';
            div.style.display = 'flex';
            div.style.width = `${sqSize}px`;  
            div.style.height = `${sqSize}px`;
            div.style.border = '0px solid black';
            container.appendChild(div);
    
            div.addEventListener('mouseenter', () => {
                div.classList.toggle('hovereffect');
            });

            div.addEventListener('mouseleave', () => {
                div.classList.toggle('hovereffect');
            });
        }
    }
}

container.addEventListener('mousedown', (e) => {
    let square = e.target;
    isDrawing = true;
    isClick = true;
    if (square !== container) {
        square.classList.add('color');
    }
});
container.addEventListener('mousemove', (e) => {
if (isDrawing) {
    let square = e.target;
        isClick = false;
        if (square !== container) {
            square.classList.add('color');
        }
}
});
container.addEventListener('mouseup', (e) => {
    isDrawing = false;
    if(isClick) {
        const square = e.target;
        if (square !== container) {
            square.classList.toggle('color');
        }

    }
});

container.addEventListener('mouseleave', (e) => {
    isDrawing = false;
    isClick = false;


});
function clearGrid() {
    Array.from(container.children).forEach((child) => {
        child.classList.remove('color', 'hovereffect');
    });
}

const clearBtn = document.querySelector('.clearbtn');
clearBtn.addEventListener('click', clearGrid);

function changeGrid() {
    let sqNum = parseInt(prompt("Enter number of squares in grid:", 16));
    if (!isNaN(sqNum) && sqNum > 0 && sqNum <= 100) {
        createGrid(sqNum, sqNum);
    } else {
        alert("Please enter a number between 1 and 100.");
    }
}

createGrid(initialSqNum,initialSqNum);
