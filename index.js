// Functions

function paintGrid () {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(gridSquare => {
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.style.backgroundColor = color;
        });
    });
}

// ----------------------------------------------------

function createCanvas() {
    for (let i = 0; i < gridSize; i++) {
        const newRow = document.createElement('div');
        newRow.classList.add('row');

        for (let j = 0; j < gridSize; j++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('grid-square');
            newDiv.style.width = squareSize + 'px';
            newDiv.style.height = squareSize + 'px';
            newRow.appendChild(newDiv);
        }

        sketchContainer.appendChild(newRow);
    }
    paintGrid();
}


// ----------------------------------------------------


// ----------------------------------------------------
// Variables I
const sketchContainer = document.querySelector('.sketch-container');
let color = 'black';
let gridSize = 16;
let squareSize = 35;

// Initial Canvas
createCanvas();

// ----------------------------------------------------
// Button Event Listeners
const drawBtn = document.getElementById('draw-btn');
const eraseBtn = document.getElementById('eraser-btn');
const clearBtn = document.getElementById('clear-btn');
const enterBtn = document.getElementById('grid-btn');
// ----------------------------------------------------

drawBtn.addEventListener('click', function () {
    color = 'black';
});

eraseBtn.addEventListener('click', function () {
    color = '#f7f0f5';
});

clearBtn.addEventListener('click', function () {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(gridSquare => {
        gridSquare.style.backgroundColor = '#f7f0f5';
    });
});

enterBtn.addEventListener('click', function () {
    // Get the new gridSize from the input
    gridSize = parseInt(document.querySelector('.grid-input').value);

    // Check if gridSize is a valid number
    if (isNaN(gridSize) || gridSize > 100) {
       gridSize = 16;
    }
        squareSize = 560 / gridSize;
        // Clear the existing grid
        sketchContainer.innerHTML = '';
        // Create a new grid
        createCanvas();
});
