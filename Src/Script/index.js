var logo = document.getElementById('logo');
logo.onclick = function(){location.reload()};
window.addEventListener('contextmenu', function(event){
    event.preventDefault();
    var contextElement = document.getElementById("contex-menu")
    contextElement.style.left = event.pageX + "px";
    contextElement.style.top = event.pageY + "px";
    contextElement.classList.add("active");
});
window.addEventListener("click", function(){
    document.getElementById("contex-menu").classList.remove("active")
})

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