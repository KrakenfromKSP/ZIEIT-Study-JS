const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function getRandomHex() {
    return (Math.floor(Math.random() * hex.length));
}

function changeColorHex(){
    let randomHex = "#";
    for (let i = 0; i < 6; i++) {
        randomHex += hex[getRandomHex()];
    }

    document.body.style.backgroundColor = randomHex;
    document.querySelector('.color').textContent = randomHex;
}