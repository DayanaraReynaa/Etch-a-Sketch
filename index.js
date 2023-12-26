const sketchContainer = document.querySelector('.sketch-container');
let color = 'black';
let gridSize = 16;

for (let i = 0; i < gridSize; i++) {
    const newRow = document.createElement('div');
    newRow.classList.add('row');
    
    for (let j = 0; j < gridSize; j++) {
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
        gridSquare.style.backgroundColor = color;
    });
});

// Button Event Listeners
const drawBtn = document.getElementById('draw-btn');
const eraseBtn = document.getElementById('eraser-btn');
const clearBtn = document.getElementById('clear-btn');


drawBtn.addEventListener('click', function () {
    color = 'black';
});

eraseBtn.addEventListener('click', function () {
    color = '#f7f0f5';
});


clearBtn.addEventListener('click', function () {
    gridSquares.forEach(gridSquare => {
            gridSquare.style.backgroundColor = '#f7f0f5';
    });
    
});








// Grid Size Changes
const enterBtn = document.getElementById('grid-btn');

enterBtn.addEventListener('click', function () {
    // Get the new gridSize from the input
    gridSize = parseInt(document.querySelector('.grid-input').value);

    // Check if gridSize is a valid number
    if (!isNaN(gridSize)) {
        // Calculate the size of each grid square based on the fixed canvas size
        const squareSize = 560 / gridSize;

        // Clear the existing grid
        sketchContainer.innerHTML = '';

        // Create a new grid
        for (let i = 0; i < gridSize; i++) {
            const newRow = document.createElement('div');
            newRow.classList.add('row');

            for (let j = 0; j < gridSize; j++) {
                const newDiv = document.createElement('div');
                newDiv.classList.add('grid-square');

                // Set the size of each grid square
                newDiv.style.width = squareSize + 'px';
                newDiv.style.height = squareSize + 'px';

                newRow.appendChild(newDiv);
            }

            sketchContainer.appendChild(newRow);
        }

        // Update the hover event for the new grid squares
        const newGridSquares = document.querySelectorAll('.grid-square');
        newGridSquares.forEach(newGridSquare => {
            newGridSquare.addEventListener('mouseover', () => {
                newGridSquare.style.backgroundColor = color;
            });
        });
    }
});