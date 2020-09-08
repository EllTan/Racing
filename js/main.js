const score = document.querySelector('.score');
const start = document.querySelector('.start');
const gameArea = document.querySelector('.gameArea');
const car = document.createElement('div');

car.classList.add('car')

start.addEventListener('click', startGame);
document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stoptRun);

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false
};

const setting = {
    start: false,
    score: 0,
    speed: 3
};

function startGame() {
    start.classList.add('hide'); 
    setting.start = true;
    gameArea.appendChild(car);
    requestAnimationFrame(playGame);
}

function playGame() {
    console.log('go');
    if(setting.start === true){
        requestAnimationFrame(playGame);
    }
    
}

function startRun(event) {
    event.preventDefault(); // отключили стандартное поведение браузера при событии
    keys[event.key] = true;
}

function stoptRun() {
    event.preventDefault();
    keys[event.key] = false;
}
    