const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name');
const song = document.getElementById('audio');
const cover = document.getElementById('cover');
const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('previous');

const balaFini = {
    songName : 'Bala Fini',
    artist : 'Djonga',
    file: 'balafini'
};
const contatin= {
    songName : 'Contatin',
    artist : 'Djonga',
    file: 'contatin'
};
const domQuixote = {
    songName : 'Dom Quixote',
    artist : 'Djonga',
    file: 'domquixote'
};
const toBem = {
    songName : 'To Bem',
    artist : 'Djonga',
    file: 'tobem'
};
let isPlaying = false;
const playlist = [balaFini, contatin, domQuixote, toBem];
let index = 0;

function playSong(){
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isPlaying = true;
}
function pauseSong(){
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    song.pause();
    isPlaying = false;
}
function playPauseDecider (){
    if(isPlaying === true){
        pauseSong();
    }
    else{
        playSong();
    }

}

function initializeSong(){
    cover.src = `img/${playlist[index].file}.jpg`;
    song.src = `songs/${playlist[index].file}.mp3`;
    songName.innerText = playlist[index].songName;
    bandName.innerText = playlist[index].artist;
}

function previousSong(){
    if (index === 0) {
        index = playlist.length - 1;
    } else {
        index -= 1;
    }
    initializeSong();
    playSong();
}
function nextSong(){
    if (index === playlist.length - 1) {
        index = 0;
    } else {
        index += 1;
    }
    initializeSong();
    playSong();
}

initializeSong();

play.addEventListener('click', playPauseDecider);
previous.addEventListener('click', previousSong);
next.addEventListener('click', nextSong);
