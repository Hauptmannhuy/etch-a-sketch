
const container = document.getElementById('grid');


function defaultGrid(rows,cols){
    makeRows(rows,cols);
    makeCells(rows,cols);
    
}
defaultGrid(16,16)

function makeRows(rows,cols){
    container.style.setProperty('--grid-template-rows', rows);
    container.style.setProperty('--grid-template-columns', cols);
    
   
 }
function makeCells(rows,cols){
    for(let i = 0; i < (rows*cols); i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
   
}

const cells = document.querySelectorAll('.cell');
cells.forEach((cell)=> {
    cell.addEventListener('pointerover', (e) => {
        cell.setAttribute('style','background: black');
    });
});





