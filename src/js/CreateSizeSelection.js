import Wood from "../assets/img/wooden-boards-background.jpg";

export const createSizeSelection = () => {
    const sizeContainer  = document.createElement('div');
    sizeContainer.className = 'size__container';
    for (let i = 3; i <= 8; i++) {
        const inputContainer = document.createElement('div');
        inputContainer.className = 'input__container';
        const input = document.createElement('input');
        input.type = 'radio';
        input.id = `${i}`;
        input.value = `${i}`;
        input.name = 'size';
        if (i === 4) {
            input.checked = true;
        }
        inputContainer.append(input);
        const label = document.createElement('label');
        label.for = `${i}`;
        label.innerHTML = `${i} x ${i}`;
        label.style.backgroundImage = `url('${Wood}')`;
        inputContainer.append(label);
        sizeContainer.append(inputContainer);
    }
    document.querySelector('.container').append(sizeContainer);
}