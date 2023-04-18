
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud');
textStart = document.querySelector('text-start');
audioStart = new Audio('./audio/theme.mp3');
audioGameOver = new Audio('./audio/gameover.mp3');

const start = () => {

    document.getElementById("text-start").style.color = "rgb(236, 236, 236)";

    pipe.classList.add('pipe-animation');

    mario.src = './imagens/mario.gif';
    mario.style.width = '120px';

    audioStart.play();
}

document.addEventListener('keydown', start);



const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}
document.addEventListener('keydown', jump);


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

        document.getElementById("text-start").style.color = "black";
        document.getElementById("text-start").innerHTML = "<strong>GAME OVER</strong>";


        function stopAudioStart() {
            audioStart.pause();
        } stopAudioStart();

        audioGameOver.play();

        function stopAudio() {
            audioGameOver.pause();
        } setTimeout(stopAudio, 8000);
        //Limpa o Loop//
        clearInterval(loop);


        setTimeout(function () {
            location.reload();
        }, 10000);
    }

}, 10);


