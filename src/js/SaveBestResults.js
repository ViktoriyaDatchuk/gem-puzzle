export const resultsArray = [];

export const createTableResult = () => {
    const results = document.createElement('div');
    results.className = 'results-table';
    for (let i = 0; i < 10; i++) {
        let result = document.createElement('div');
        result.className = 'result';
        result.innerHTML = '0';
        results.append(result);
    }
    document.querySelector('.container').append(results);
}

export const saveBestResults = (count) => {
    resultsArray.push(`Moves: ${count}`);
    resultsArray.sort((a, b) => b - a);
    resultsArray.length = 10;
    
    const results = document.querySelectorAll('.result');
    results.forEach((item, index) => {
        item.innerHTML = resultsArray[index];
        if (!resultsArray[index]) {
            item.innerHTML = '0';
        }
    })
}

export const addResultButtonClickHandler = () => {
    document.querySelector('.button-result').addEventListener('click', watchResults);
}

const watchResults = () => {
    // const cells = document.querySelectorAll('.cell');
    // cells.forEach(item => {
    //     item.classList.toggle('visibilityOff');
    // })
    document.querySelector('.results-table').classList.toggle('visibilityOn');
}