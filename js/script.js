function resetGrid(container) {
  container.className = '';
  container.innerHtml = ''; // non svuota la grigia
  console.log(container.innerHtml);
}

function getBombList(numberOfBombs, range, thisCell) {
  const bombList = [];
  
  while
}

function game(level, gridSize) {

  let bombList = [];
  let firstCell = true;

  const gridHtml = document.getElementById('grid');
  // prima resettiamo (nel caso ci fosse gia una griglia) e poi
  resetGrid(gridHtml);
  // diamo dinamicamente la dimensione alla griglia
  gridHtml.className = level;

  // popoliamo la griglia di celle
  for (let i = 1; i <= gridSize; i++) {
    const cell = document.createElement('div');
    cell.innerText = i;
    cell.className = 'cell';
    gridHtml.append(cell);

    // il primo click non puo essere una bomba
    if(firstCell){
      cell.addEventListener('click', function() {
        bombList = getBombList(16, minRange, i);
        this.classList.add('green');
        firstCell = false;
      })
    } else {
      cell.addEventListener('click', function() {
        
      })
    }
  }
}





const difficulties = [['easy', 100], ['medium', 81], ['hard', 49]];

const difficultyButtonsHtml = document.querySelectorAll('.difficulty-button');


difficultyButtonsHtml.forEach((button, index) => {
  const [level, gridSize] = difficulties[index];
  
  button.innerText = level;

  button.addEventListener('click', () => {
    game(level, gridSize);
  })
})