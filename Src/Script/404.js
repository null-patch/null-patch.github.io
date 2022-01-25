var container = document.getElementById('container');
window.onmousemove = function(e){
    var x = e.clientX,
        y = e.clientY;
    container.style.backgroundPositionX = x + 'px';
    container.style.backgroundPositionY = y + 'px';
};
document.addEventListener('contextmenu', event => event.preventDefault());

window.ondeviceorientation = function(f){
    var x = f.clientX,
        y = f.clientY;
    container.style.backgroundPositionX = x + 'px';
    container.style.backgroundPositionX = y + 'px';
};