document.addEventListener('contextmenu', event => event.preventDefault());

let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
}
if (darkMode === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

let video = document.querySelectorAll('video');
video.forEach(play => play.addEventListener('click', () => {
    play.classList.toggle('active');
    if(play.pause){
        play.play();
    }else{
        play.pause();
        play.currentTime = 0
    }
}));