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

window.addEventListener('contextmenu', function(event){
    event.preventDefault();
    var contextElement = document.getElementById("contex-menu")
    contextElement.style.left = event.pageX + "px";
    contextElement.style.top = event.pageY + "px";
    contextElement.classList.add("active");
});
window.addEventListener("click", function(){
    document.getElementById("contex-menu").classList.remove("active")
});