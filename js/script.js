const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud');
const textStart = document.querySelector('#text-start');
const audioStart = new Audio('./audio/theme.mp3');
const audioGameOver = new Audio('./audio/gameover.mp3');
const scoreElement = document.querySelector('#score');

let score = 0;

//Start do jogo//
const start = () => {
    textStart.style.color = "rgb(236, 236, 236)";
    pipe.classList.add('pipe-animation');
    cloud.classList.add('cloud-animation');

    audioStart.play();
}
document.addEventListener('keydown', (event) => {
    if (event.code === "Space") {
        start();
    }
});

//evento de pulo//
const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}
document.addEventListener('keydown', jump);

//evento de fim de jogo//
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const cloudPosition = cloud.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        cloud.style.animation = 'none';
        cloud.style.left = `${cloudPosition}px`;
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/game-over.png';
        mario.style.width = '70px'
        mario.style.marginLeft = '20px'

        textStart.style.color = "black";
        textStart.innerHTML = "<strong>GAME OVER</strong>";

        function stopAudioStart() {
            audioStart.pause();
        } stopAudioStart();

        audioGameOver.play();

        function stopAudio() {
            audioGameOver.pause();
        } setTimeout(stopAudio, 8000);

        clearInterval(loop);

        //Recarrega a tela//
        setTimeout(function () {
            location.reload();
        }, 9000);
    } 
    else if (pipePosition <= -50) {
        // O jogador passou pelo obstáculo com sucesso
        score++;
        scoreElement.textContent = score;
    }
}, 10);
