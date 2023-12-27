// Functions
function paintGrid() {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(gridSquare => {
        gridSquare.addEventListener('mouseover', () => {
            if (!pointerBtn.classList.contains('active')) {
                if (rainbowBtn.classList.contains('active') && !eraseBtn.classList.contains('active')) {
                    color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                } else if(eraseBtn.classList.contains('active')) {
                    color = '#f7f0f5';
                }
                gridSquare.style.backgroundColor = color;
            }
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
// Variables I
const sketchContainer = document.querySelector('.sketch-container');
let color = 'black';
let gridSize = 16;
let squareSize = 35;

// Initial Canvas
createCanvas();

// ----------------------------------------------------
// Button Vars
const enterBtn = document.getElementById('grid-btn');
const colorPicker = document.querySelector('.colorPicker');
const regularBtn = document.getElementById('regular-btn');
const rainbowBtn = document.getElementById('rainbow-btn');

const drawBtn = document.getElementById('draw-btn');
const eraseBtn = document.getElementById('eraser-btn');
const pointerBtn = document.getElementById('pointer-btn');
const fillBtn = document.getElementById('fill-btn');
const clearBtn = document.getElementById('clear-btn');
// ----------------------------------------------------
// Button Event Listeners

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

// ----------------------------------------------------

colorPicker.addEventListener('input', function () {
    color = colorPicker.value;
});

// ----------------------------------------------------

regularBtn.addEventListener('click', function () {
    if (rainbowBtn.classList.contains('active')) {
        rainbowBtn.classList.remove('active');
        color = colorPicker.value;
    }
});

// ----------------------------------------------------

rainbowBtn.addEventListener('click', function () {
    if (!rainbowBtn.classList.contains('active')) {
        rainbowBtn.classList.add('active');
    }
});

// ----------------------------------------------------

drawBtn.addEventListener('click', function () {
    color = colorPicker.value;
    if (pointerBtn.classList.contains('active')) {
        pointerBtn.classList.remove('active');
    }

    if (eraseBtn.classList.contains('active')) {
        eraseBtn.classList.remove('active');
    }
});
// ----------------------------------------------------
eraseBtn.addEventListener('click', function () {
    if (!eraseBtn.classList.contains('active')) {
        eraseBtn.classList.add('active');
    }
});
// ----------------------------------------------------

pointerBtn.addEventListener('click', function () {
    if (!pointerBtn.classList.contains('active')) {
        pointerBtn.classList.add('active');
    }
})

// ----------------------------------------------------
fillBtn.addEventListener('click', function () {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(gridSquare => {
        if (rainbowBtn.classList.contains('active')) {
            color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        }
        gridSquare.style.backgroundColor = color;
    });
});

// ----------------------------------------------------
clearBtn.addEventListener('click', function () {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(gridSquare => {
        gridSquare.style.backgroundColor = '#f7f0f5';
    });
});