const decreaseBtn = document.querySelector('.decrease')
const increaseBtn = document.querySelector('.increase')
const forwardBtn = document.querySelector('.forward')
const backwardBtn = document.querySelector('.backward')
const playBtn = document.querySelector('.play')
const audio = document.querySelector('audio')
const nextBtn = document.querySelector('.forward')
const previousBtn = document.querySelector('.backward')
const imgCover = document.querySelector('img')
const musicTitle = document.querySelector('.music-title')



let currentIndex = 0

let musics = [
    {id: 1, title: 'Band Naf', src: 'media/bende-naf-ta-khate-saf.mp3' , cover: 'images/cover1.jpg'},
    {id: 2, title: 'Sefareshi', src: 'media/sefareshi.mp3', cover: 'images/cover2.jpg'},
    {id: 3, title: 'Sarkoob', src: 'media/sarkoob.mp3', cover: 'images/cover3.jpg'}
];


let isPlaying = false;

function playHandler() {
    isPlaying = !isPlaying;
    playBtn.innerHTML = isPlaying ? '<i class="fa-solid fa-pause"></i>' : '<i class="fa-solid fa-play"></i>';
    
    isPlaying ? audio.play() : audio.pause();
}



function decreaseHandler() {
    audio.currentTime -= 10
}


function increaseHandler() {
    audio.currentTime += 10
}


function forwardHandler() {
    currentIndex++;

    if(currentIndex > musics.length -1) {
        currentIndex = 0
    }

    audio.src = musics[currentIndex].src;
    imgCover.src = musics[currentIndex].cover
    musicTitle.textContent = musics[currentIndex].title
    audio.play()
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>'
    isPlaying = true;
}



function backwardHandler() {
    currentIndex--;

    if(currentIndex < 0) {
        currentIndex = musics.length - 1
    }

    audio.src = musics[currentIndex].src;
    imgCover.src = musics[currentIndex].cover
    musicTitle.textContent = musics[currentIndex].title
    audio.play()
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>'
    isPlaying = true;
}




playBtn.addEventListener('click', playHandler);
decreaseBtn.addEventListener('click', decreaseHandler);
increaseBtn.addEventListener('click', increaseHandler);
nextBtn.addEventListener('click', forwardHandler);
previousBtn.addEventListener('click', backwardHandler);