
const container = document.getElementById('grid');
const adjustBtn = document.getElementById('adjustBtn');


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

container.addEventListener('pointerover', (e) => {
    let target = e.target;
    if (target.classList.contains('cell') === true){
        const rgb = randomRGB();
        function setRGB(rgb){
            target.style.setProperty('--background-color',`${rgb}`);
       }
       setRGB(rgb)
    }
})


// const cells = document.querySelectorAll('.cell');
// cells.forEach((cell)=> {
//     cell.addEventListener('pointerover', (e) => {
//         const rgb = randomRGB();
//         function setRGB(rgb){
//             cell.style.setProperty('--background-color',`${rgb}`);
//        }
//        setRGB(rgb)
//     });
// });



