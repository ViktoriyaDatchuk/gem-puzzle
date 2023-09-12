import { moveAudio } from "./Game";
import VolumeOn from "../assets/img/volume-on.ico";
import VolumeOff from "../assets/img/volume-off.ico";

export const addVolumeButtonClickHandler = () => {
    document.querySelector('.volume').addEventListener('click', toggleVolumeButton);
}

const toggleVolumeButton = () => {
    moveAudio.muted = !moveAudio.muted;
    if (moveAudio.muted) {
        document.querySelector('.volume').style.backgroundImage = `url('${VolumeOff}')`;
    } else {
        document.querySelector('.volume').style.backgroundImage = `url('${VolumeOn}')`;
    }
}