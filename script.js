// let gridSize = 16
// let rows = gridSize;
// let cols = gridSize;
const container = document.getElementById('container');

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

makeCells(16,16);
makeRows(16,16)





