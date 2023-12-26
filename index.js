const sketchContainer = document.querySelector('.sketch-container');

for (let i = 0; i < 16; i++) {
    const newRow = document.createElement('div');
    newRow.classList.add('row');
    
    for (let j = 0; j < 16; j++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('grid-square');
        newRow.appendChild(newDiv);
    }

    sketchContainer.appendChild(newRow);
}

// Hover Squares

const gridSquares = document.querySelectorAll('.grid-square');

gridSquares.forEach(gridSquare => {
    gridSquare.addEventListener('mouseover', () => {
        gridSquare.style.backgroundColor = 'black';
    });
});