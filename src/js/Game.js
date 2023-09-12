import { cellCounts, cellSize } from "..";
import { resetTimer, startTimer } from "./Timer";
import AudioFile from "../assets/audio/puzzle-15_audio.mp3";
import { saveBestResults } from "./SaveBestResults";
import { moveCells } from "./DragNDrop";

export const moveAudio = new Audio(AudioFile);

window.addEventListener('resize', () => {
    let size = document.querySelector('.field').offsetWidth / cellCounts;
    const cells = document.querySelectorAll('.cell');
        for (let i = 0; i < cellCounts ** 2 - 1; i++) {
    
            const left = i % cellCounts;
            const top = Math.floor(i / cellCounts);
    
            cells[i].style.left = `${left * size}px`;
            cells[i].style.top = `${top * size}px`;
        }
})

export let emptyCell = {};
export let cells = [];
// export let storageCount = 0;

export const game = () => {
    const field = document.querySelector('.field');
    const countField = document.querySelector('#moves h3');

    startTimer();

    let count = 0;

    emptyCell = {
        value: 0,
        top: cellCounts - 1,
        left: cellCounts - 1
    }

    cells = [];
    cells[cellCounts ** 2 - 1] = emptyCell;

    const lendth = cellCounts ** 2 - 1;
    const numbers = [...Array(lendth).keys()].sort(() => Math.random() - 0.5);

    for (let i = 0; i < cellCounts ** 2 - 1; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = `${i}`;
        const value = numbers[i] + 1;
        cell.innerHTML = value;

        const left = i % cellCounts;
        const top = Math.floor(i / cellCounts);

        cells[i] = {
            value: value,
            left: left,
            top: top,
            element: cell
        }

        cell.style.left = `${left * cellSize}px`;
        cell.style.top = `${top * cellSize}px`;

        field.append(cell)

        cell.addEventListener('click', () => {
            count = +countField.innerHTML.slice(8);
            count++;
            moveCell(i, cells, emptyCell, count);
            countField.innerHTML = `Movies: ${count}`;
        })
    }

    let sum = 0;

    cells.forEach((item, index) => {
        let k = 0; 

        for (let i = index + 1; i < cells.length - 1; i++) {
            if (cells[i].value < item.value) {
                k++;
            }
        }

        sum += k;
    })

    if (sum % 2 !== 0) {
        field.innerHTML = '';
        resetTimer();
        game();
    }

    document.querySelector('.button-restart').addEventListener('click', restartGame);
}

export const moveCell = (index, cells, emptyCell, count) => {
    const cell = cells[index];
    const leftDist = Math.abs(emptyCell.left - cell.left);
    const topDist = Math.abs(emptyCell.top - cell.top);

    if (leftDist + topDist > 1) {
        return;
    }

    cell.element.style.left = `${emptyCell.left * cellSize}px`;
    cell.element.style.top = `${emptyCell.top * cellSize}px`;

    const emptyLeft = emptyCell.left;
    const emptyTop = emptyCell.top;
    emptyCell.left = cell.left;
    emptyCell.top = cell.top;
    cell.left = emptyLeft;
    cell.top = emptyTop;

    moveAudio.play();

    const isFinish = cells.every(cell => {
       return cell.value === (cell.top * cellCounts + cell.left + 1) % (cellCounts ** 2);
    })

    if (isFinish) {
        saveBestResults(count);
        let timeText = document.querySelector('#time h3').innerHTML.slice(6);
        document.querySelector('.field').innerHTML = '';
        const message = document.createElement('div');
        message.className = 'message';
        message.innerHTML = `Hooray! You solved the puzzle in ${timeText} and ${count} moves!`;
        document.querySelector('.field').append(message);
        resetTimer();
    }

}

const restartGame = () => {
    resetTimer();
    document.querySelector('.field').innerHTML = '';
    const countField = document.querySelector('#moves h3');
    countField.innerHTML = "Movies: 0";
    game();
    moveCells();
}