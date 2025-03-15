
const container = document.querySelector('.container');

let sqSize= 16;
let rowNum = 960/sqSize;
let colNum = 960/sqSize;
for(let i =0;i<rowNum;i++){
    for (let j = 0; j < colNum; j++) {
            let div = document.createElement('div');
            div.style.boxSizing = 'border-box';
            div.style.display='flex';
            div.style.width='16px';
            div.style.height = '16px';
            div.style.border = '1px solid black';
            container.appendChild(div);

            div.addEventListener('mouseenter', () => {
                div.classList.toggle('hovereffect')
            });

            div.addEventListener('mouseleave' ,(e) => {
               div.classList.toggle('hovereffect');
            
            })
        
    }
}


container.addEventListener('click' ,(e) => {
    let square = e.target;
   if (square!==container) {
     square.classList.toggle('color');
   }

})




function clearGrid(){
    Array.from(container.children).forEach((child) => {
    child.classList.remove('color','hovereffect')}
    )
}

const clearBtn = document.querySelector('.clearbtn');

clearBtn.addEventListener('click',clearGrid)
