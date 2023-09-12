import Bg from "../assets/img/background.jpg";
import Wood from "../assets/img/wooden-boards-background.jpg";
import Volume from "../assets/img/volume-on.ico";
import { createTableResult } from "./SaveBestResults";
import { createSizeSelection } from "./CreateSizeSelection";
import { cellCounts } from "..";

export const createMarkUp = () => {
  const container = document.createElement('div');
  container.className = 'container';
  const buttonsList = document.createElement('div');
  buttonsList.className = 'buttons-list';
  const buttonContainer = document.createElement('div');
  buttonContainer.classList = 'button__container';
  const button = document.createElement('button');
  button.className = 'button';
  button.classList.add('button-restart');
  button.style.backgroundImage = `url('${Wood}')`;
  button.innerHTML = 'Restart';
  buttonContainer.append(button);
  buttonsList.append(buttonContainer);
  const buttonContainerSec = document.createElement('div');
  buttonContainerSec.classList = 'button__container';
  const buttonSec = document.createElement('button');
  buttonSec.className = 'button';
  buttonSec.classList.add('button-save');
  buttonSec.style.backgroundImage = `url('${Wood}')`;
  buttonSec.innerHTML = 'Save';
  buttonContainerSec.append(buttonSec);
  buttonsList.append(buttonContainerSec);
  const buttonContainerThird = document.createElement('div');
  buttonContainerThird.classList = 'button__container';
  const buttonThird = document.createElement('button');
  buttonThird.className = 'button';
  buttonThird.classList.add('button-result');
  buttonThird.style.backgroundImage = `url('${Wood}')`;
  buttonThird.innerHTML = 'Result';
  buttonContainerThird.append(buttonThird);
  buttonsList.append(buttonContainerThird);
  const buttonContainerFour = document.createElement('div');
  buttonContainerFour.classList = 'button__container';
  const buttonSound = document.createElement('div');
  buttonSound.className = 'button__sound';
  buttonSound.classList.add('volume');
  buttonSound.style.backgroundImage = `url('${Volume}')`;
  buttonContainerFour.append(buttonSound);
  buttonsList.append(buttonContainerFour);
  container.append(buttonsList);
  const containerStats = document.createElement('div');
  containerStats.className = 'container__stats';
  const time = document.createElement('div');
  time.id = 'time';
  const timeText = document.createElement('h3');
  timeText.innerHTML = 'Time: 00:00';
  time.append(timeText);
  const moves = document.createElement('div');
  moves.id = 'moves';
  const movesText = document.createElement('h3');
  movesText.innerHTML = 'Moves: 0';
  moves.append(movesText);
  containerStats.append(moves);
  containerStats.append(time);
  container.append(containerStats);
  const field = document.createElement('div');
  field.className = 'field';
  field.classList.add(`field-${cellCounts}`);
  field.style.backgroundImage = `url('${Wood}')`;
  // field.style.width = `${cellCount * cellSize}px`;
  // field.style.height = `${cellCount * cellSize}px`;
  container.append(field);
  document.body.append(container);
  setBg();
  createTableResult();
  createSizeSelection();
};

const setBg = () => {
  const img = new Image();
  img.src = Bg;
  img.onload = () => {
      document.body.style.backgroundImage = `url('${Bg}')`;
  }
  document.body.style.backgroundSize = 'cover';
}


