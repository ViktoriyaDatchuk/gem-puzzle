import { addSizeButoonHandler } from "./js/ChangeFieldSize";
import { createMarkUp } from "./js/CreateMarkUp";
import { moveCells } from "./js/DragNDrop";
import { game } from "./js/Game";
import { addResultButtonClickHandler } from "./js/SaveBestResults";
import { addSaveButtonClickHandler, getBestResultsFromLocalStorage, getGameFromLocalStorage, setBestResultsToLocalStorage } from "./js/SaveToLocalStorage";
import { addVolumeButtonClickHandler } from "./js/SoundVolume";

export let cellSize;
export let cellCounts = 4;

window.addEventListener('beforeunload', setBestResultsToLocalStorage);

createMarkUp();

document.addEventListener('DOMContentLoaded', () => {
    getBestResultsFromLocalStorage();
    cellSize = document.querySelector('.field').offsetWidth / cellCounts;
    getCellCount();
    game();
    addVolumeButtonClickHandler();
    addResultButtonClickHandler();
    addSizeButoonHandler();
    addSaveButtonClickHandler();
    moveCells();
    getGameFromLocalStorage();
})

export const getCellCount = () => {
    const inputs = document.querySelectorAll('.input__container input');
    inputs.forEach(item => {
        if (item.checked === true) {
            cellCounts = +item.value;
        }
    })
}

