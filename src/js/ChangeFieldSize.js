import { cellCounts, getCellCount } from "..";
import { moveCells } from "./DragNDrop";
import { game } from "./Game";
import { resetTimer } from "./Timer";

export const addSizeButoonHandler = () => {
    const buttons = document.querySelectorAll('.input__container input');
    buttons.forEach(item => {
        item.addEventListener('change', (e) => {
            changeSize();
        })
    })
}

const changeSize = () => {
    const field = document.querySelector('.field');
    const countField = document.querySelector('#moves h3');
    field.classList.remove(`field-${cellCounts}`);
    getCellCount();
    field.classList.add(`field-${cellCounts}`);
    field.innerHTML = '';
    resetTimer();
    countField.innerHTML = "Movies: 0";
    game();
    moveCells();
} 