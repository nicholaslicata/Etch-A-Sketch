const gridDivs = 256
const container = document.querySelector('.container');
const button = document.querySelector('.button');

function createGrid() {
    // Create etch-a-sketch grid
    for (let i = 0; i < gridDivs; i++) {
        const newDiv = document.createElement('div');
        container.appendChild(newDiv);
        newDiv.classList.add('new');
        // Change div color on mouse hover
        newDiv.addEventListener('mouseover', function() {
            newDiv.style.backgroundColor = 'Blue';
        })
        // Clear etch-a-sketch
        button.addEventListener('click', function() {
            newDiv.style.backgroundColor = 'White';
        })
    }
}

createGrid();

