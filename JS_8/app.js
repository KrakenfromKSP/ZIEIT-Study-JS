const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

function changeColorPredetirmened(){
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
    document.querySelector('.color').textContent = colors[randomIndex];
};