window.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    var contextElement = document.getElementById("contex-menu")
    contextElement.style.left = event.pageX + "px";
    contextElement.style.top = event.pageY + "px";
    contextElement.classList.add("active");
});
window.addEventListener("click", function () {
    document.getElementById("contex-menu").classList.remove("active")
});

const setCookie = function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};
const getCookie = function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};

let darkMode = getCookie('darkMode');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    setCookie('darkMode', 'enabled');
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    setCookie('darkMode', "disabled");
}
if (darkMode === 'enabled') {
    enableDarkMode();
}

function changeColor() {
    darkMode = getCookie('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
};


var percent = document.querySelector(".percent");
var progress = document.querySelector(".progress");
var text = document.querySelector(".text");
var preloader = document.querySelector('.loader');
let count = 4;
let per = 16;
var loading = setInterval(animate, 50);

function animate() {
    if (count == 100 && per == 400) {
        percent.classList.add("text-blink");
        text.style.display = "block";
        clearInterval(loading);
        preloader.style.display = "none";
    } else {
        per = per + 4;
        count = count + 1;
        progress.style.width = per + "px";
        percent.textContent = count + '%';
    }
};

function show(elementID) {
    const ele = document.getElementById(elementID);
    if (!ele) {
        alert("no such element");
        return;
    }
    const pages = document.getElementsByClassName('page');
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    ele.style.display = 'block';
}