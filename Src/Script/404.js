var container = document.getElementById('container');
window.onmousemove = function(e){
    var x = e.clientX,
        y = e.clientY;
    container.style.backgroundPositionX = x + 'px';
    container.style.backgroundPositionY = y + 'px';
}