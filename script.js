const container = document.getElementById('grid');
const adjustBtn = document.getElementById('adjustBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const normalBtn = document.getElementById('normalBtn');
const sketchBtn = document.getElementById('sketchBtn');
const buttons = document.querySelectorAll('button');
let currentMode = 'normal';
let isDrawing = false;


function defaultGrid(rows,cols){            // makes grid
    container.innerHTML = '';
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

adjustBtn.addEventListener('click', (e) => {        // adjusting grid
    let value = prompt('Enter a number');
   while (value < 1) {
    value = prompt('Enter a number')
   }
    const cellWidth = container.offsetWidth / value;
    const cellHeight = container.offsetHeight / value;
    const items = document.querySelectorAll('.cell');
    items.forEach((item)=>{
        item.style.width = cellWidth+'px';
        item.style.height = cellHeight+'px';
    })
    defaultGrid(value,value);
})

function randomNum(){
    let randomNum1 = Math.floor(Math.random(0)*256);
    let randomNum2 = Math.floor(Math.random(0)*256);
    let randomNum3 = Math.floor(Math.random(0)*256);
    let array = [randomNum1,randomNum2,randomNum3];
    return array;
    
}

function randomRGB() {                           //generates random num and makes random rgb
    const array = randomNum();
    return  `rgb(${array[0]},${array[1]},${array[2]})`;
   
}

buttons.forEach((button)=> {                  //set color
    button.addEventListener('click', (e)=> {
        let target = e.target;
        if (target.id === 'normalBtn'){
            currentMode = 'normal';
        }
        else if (target.id === 'rainbowBtn'){
            currentMode = 'rainbow';

        }
        else if (target.id === 'sketchBtn'){
            currentMode = 'sketch';
        }
        else {
            return;
        };
    });
}); 

container.addEventListener('pointerdown', (e)=>{
    isDrawing = true;
});

container.addEventListener('pointerover', (e)=>{
    if(isDrawing){
        let target = e.target;
        if (target.classList.contains('cell') === true){
            const rgb = randomRGB();
            if (currentMode === 'normal'){
                target.style.backgroundColor = 'black';
            }
            else if (currentMode === 'rainbow'){
                target.style.backgroundColor = rgb
            }
            else if (currentMode === 'sketch'){
                target.style.backgroundColor = 'white';
              }
        }
    }
})
window.addEventListener("pointerup", (e) => {
    isDrawing = false;
});

const clearBtn = document.getElementById('clearBtn');   //clear grid
clearBtn.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell)=> {
        cell.style.backgroundColor = '';
    });
});
