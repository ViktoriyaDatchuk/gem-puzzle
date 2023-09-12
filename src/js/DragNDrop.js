import { cells, emptyCell, moveCell } from "./Game";

export const moveCells = () => {
    const field = document.querySelector('.field');
    const moveCells = document.querySelectorAll('.cell');
    moveCells.forEach(elem => {
        elem.draggable = true;
    })

    field.ondragover = allowDrop;

    moveCells.forEach((elem) => {
        elem.addEventListener('dragstart', drag)

        field.ondrop = drop;
    })
}

const allowDrop = (event) => {
    event.preventDefault();
}

const drag = (event) =>{
    event.dataTransfer.setData('id', event.target.id);
}

const drop = (event) => {
    const index = event.dataTransfer.getData('id');
    let count = +document.querySelector('#moves h3').innerHTML.slice(8);
    moveCell(index, cells, emptyCell, count);
    count++;
    document.querySelector('#moves h3').innerHTML = `Movies: ${count}`;
}