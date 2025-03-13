const decreaseBtn = document.querySelector('.decrease')
const increaseBtn = document.querySelector('.increase')
const forwardBtn = document.querySelector('.forward')
const backwardBtn = document.querySelector('.backward')
const playBtn = document.querySelector('.play')
const video = document.querySelector('video')




playBtn.addEventListener('click', playHandler);
decreaseBtn.addEventListener('click', decreaseHandler);
increaseBtn.addEventListener('click', increaseHandler);







let isPlaying = false;

function playHandler() {
    isPlaying = !isPlaying;
    playBtn.innerHTML = isPlaying ? '<i class="fa-solid fa-pause"></i>' : '<i class="fa-solid fa-play"></i>';
    
    isPlaying ? video.play() : video.pause();
}




function decreaseHandler() {
    video.currentTime -= 10
}

function increaseHandler() {
    video.currentTime += 10
}

