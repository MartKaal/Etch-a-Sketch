const container = document.querySelector('.container');
const button = document.querySelector('button');
const containerWidth = 960;
let grid = 16;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const renderGrid = function (grid) {
    for (let index = 0; index < grid * grid; index++) {
        let div = document.createElement('div');
        div.classList.add('item');
        container.append(div);
    }

    container.style.cssText = `width: ${containerWidth}px`;

    // Set items
    let items = document.querySelectorAll('.item');
    items.forEach((item) => {
        item.style.cssText = `height: ${containerWidth / grid}px; flex: 1 0 calc(100% / ${grid + 1});`;
        item.addEventListener('mouseover', changeColor);
        item.addEventListener('mousedown', changeColor);
    })
}

function changeColor(e) {
    console.log(e.type);
    if (e.type == 'mouseover' == !mouseDown) return;

    e.target.style.backgroundColor = '#000';
}

button.addEventListener('click', (e) => {
    grid = parseInt(prompt("Give grid size:"));
    container.innerHTML = '';
    renderGrid(grid);
})


renderGrid(grid);


