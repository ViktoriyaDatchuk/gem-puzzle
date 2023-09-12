import { cellCounts, cellSize, getCellCount } from "..";
import { moveCells } from "./DragNDrop";
import { cells, emptyCell, moveCell } from "./Game";

export let minStor = 0;
export let secStor = 0;

export const setBestResultsToLocalStorage = () => {
    const array = [];
    const results = document.querySelectorAll('.result');
    results.forEach((item) => {
        array.push(item.innerHTML);
    })
    localStorage.setItem('bestResults', JSON.stringify(array));
}

export const getBestResultsFromLocalStorage = () => {
    if(localStorage.getItem('bestResults')) {
       const array = JSON.parse(localStorage.getItem('bestResults'));
       const results = document.querySelectorAll('.result');
        results.forEach((item, index) => {
        item.innerHTML = array[index];
        })
    }
}

export const setGameToLocalStorage = () => {
    const countField = document.querySelector('#moves h3');
    const timeText = document.querySelector('#time h3');
    const buttons = document.querySelectorAll('.input__container input');
    const checkButtons = [];
    buttons.forEach(elem => {
        checkButtons.push(elem.checked);
    })

    localStorage.setItem('cells', JSON.stringify(cells));
    localStorage.setItem('moves', countField.innerHTML);
    localStorage.setItem('time', timeText.innerHTML);
    localStorage.setItem('checkButtons', JSON.stringify(checkButtons));
}

export const getGameFromLocalStorage = () => {
    if(localStorage.getItem('moves')) {
        document.querySelector('#moves h3').innerHTML = localStorage.getItem('moves');
    }
    if(localStorage.getItem('cells')) {
       const cellsObj = JSON.parse(localStorage.getItem('cells'));
       cellsObj.forEach((cell, i) => {
        cells[i] = cell;
        if (cell.value === 0) {
            emptyCell.value = cell.value;
            emptyCell.left = cell.left;
            emptyCell.top = cell.top;
        }
       })
       document.querySelector('.field').innerHTML = '';
       for (let i = 0; i < cells.length; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.id = `${i}`;
            const value = cells[i].value;
            cell.innerHTML = value;

            cells[i].element = cell;

            cell.style.left = `${cells[i].left * cellSize}px`;
            cell.style.top = `${cells[i].top * cellSize}px`;

            if (cells[i].value !== 0) {
                document.querySelector('.field').append(cell);
            }

            cell.addEventListener('click', () => {
                let count = +document.querySelector('#moves h3').innerHTML.slice(8);
                count++;
                moveCell(i, cells, emptyCell, count);
                document.querySelector('#moves h3').innerHTML = `Movies: ${count}`;
            })
            moveCells();
        }
    }
    if(localStorage.getItem('time')) {
        document.querySelector('#time h3').innerHTML = localStorage.getItem('time');
        minStor = +document.querySelector('#time h3').innerHTML.slice(6);
        secStor = +document.querySelector('#time h3').innerHTML.slice(9);
    }
    if(localStorage.getItem('checkButtons')) {
        const field = document.querySelector('.field');
        const checkButtons = JSON.parse(localStorage.getItem('checkButtons'));
        const buttons = document.querySelectorAll('.input__container input');
        buttons.forEach(elem => {
            elem.checked = checkButtons.shift();
        })
        field.classList.remove(`field-${cellCounts}`);
        getCellCount();
        field.classList.add(`field-${cellCounts}`);
    }
}

export const addSaveButtonClickHandler = () => {
    document.querySelector('.button-save').addEventListener('click', setGameToLocalStorage);
}