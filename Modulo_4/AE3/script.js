


const handleClick = (element) => {
    element.innerText = "Clicked!";
}


// SELECTORES
document.querySelectorAll('.btn-click').forEach((btn) => {
    console.log(btn);
    btn.addEventListener('dblclick', () => {
        btn.innerText = "Double Clicked!"
    });
});

const body = document.querySelector('body');
console.log(body);
/* body.innerHTML +=
    `<button class="btn-click" onclick="handleClick(this)">Click Me!</button>`; */
const newButton = document.createElement('button');
newButton.classList.add('btn-click');
newButton.innerText = "Click Me!";
newButton.onclick = () => handleClick(newButton);
body.appendChild(newButton);


const inputText = document.querySelector('#inputText');

inputText.setAttribute('placeholder', 'Escribe algo...');
inputText.setAttribute('type', 'date');
inputText.style.backgroundColor = 'lightblue';
inputText.style.border = '2px solid black';
inputText.style.padding = '10px';
inputText.style.fontSize = '16px';
inputText.style.borderRadius = '5px';

setTimeout(() => {
    document.body.removeChild(newButton);
}, 5000);



const pacman = document.querySelector('#pacman');
let position = [0, 0]; // [x, y]
let direction = 'right';
const step = 10;
let intervalId = null;
document.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
    switch (event.key) {
        case 'ArrowUp':
            pacman.style.transform = 'rotate(-90deg)';
            direction = 'up';
            break;
        case 'ArrowDown':
            pacman.style.transform = 'rotate(90deg)';
            direction = 'down';
            break;
        case 'ArrowLeft':
            pacman.style.transform = 'scaleX(-1)';
            direction = 'left';
            break;
        case 'ArrowRight':
            pacman.style.transform = 'scaleX(1)';
            direction = 'right';
            break;
    }
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(() => {
        switch (direction) {
            case 'up':
                position[1] -= step;
                break;
            case 'down':
                position[1] += step;
                break;
            case 'left':
                position[0] -= step;
                break;
            case 'right':
                position[0] += step;
                break;
        }
        pacman.style.left = `${position[0]}px`;
        pacman.style.top = `${position[1]}px`;
    }, 10);

});