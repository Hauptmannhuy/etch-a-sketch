
const container = document.getElementById('grid');
const adjustBtn = document.getElementById('adjustBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const normalBtn = document.getElementById('normalBtn');
const sketchBtn = document.getElementById('sketchBtn');
let isNormal = false;
let isRainbow = false;
let isSketch = false;



function defaultGrid(rows,cols){
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

adjustBtn.addEventListener('click', (e) => {
    let value = prompt('Enter a number');
    defaultGrid(value,value);
})


function randomNum(){
    let randomNum1 = Math.floor(Math.random(0)*256);
    let randomNum2 = Math.floor(Math.random(0)*256);
    let randomNum3 = Math.floor(Math.random(0)*256);
    let array = [randomNum1,randomNum2,randomNum3];
    return array;
    
}


function randomRGB() {
    const array = randomNum();
    return  `rgb(${array[0]},${array[1]},${array[2]})`;
   
}

container.addEventListener('pointerenter', (e)=> {
    let target = e.target;
    if(target.classList.contains('cell') === true){
        target.style.background = 'black';
    };
});


    rainbowBtn.addEventListener('click', ()=> {
        isNormal = false;
        isSketch = false;
        isRainbow = true;

       if (isRainbow){
        function rainbowMode(){
    container.addEventListener('pointerover', (e) => {
    let target = e.target;
    if (target.classList.contains('cell') === true){
        const rgb = randomRGB();
        function setRGB(rgb){
            // target.classList.replace('cell', 'new-cell')
            // target.style.setProperty('--background-color',`${rgb}`);
            target.style.background = rgb;
       }
       setRGB(rgb);
    }
})
}
rainbowMode();
       }  
    })
   
normalBtn.addEventListener('click', ()=>{
    isRainbow = false;
    isSketch = false;
    isNormal = true;
    if(isNormal){
         function normalMode(){
        container.addEventListener('pointerenter', (e)=> {
            let target = e.target;
            if(target.classList.contains('cell') === true){
                target.style.background = 'black';
            };
        });
    };
    normalMode();
    };
});

sketchBtn.addEventListener('click', ()=>{
    isRainbow = false;
    isNormal = false;
    isSketch = true;
    if(isSketch){
         function sketchMode(){
        container.addEventListener('pointerenter', (e)=> {
            let target = e.target;
            if(target.classList.contains('cell') === true){
                target.style.background = 'white';
            };
        });
    };
    sketchMode();
    };
});



const clearBtn = document.getElementById('clearBtn');
const cells = document.querySelectorAll('.cell');
clearBtn.addEventListener('click', () => {
    cells.forEach((cell)=> {
        cell.style.backgroundColor = 'white';
    });
});

