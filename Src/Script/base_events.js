window.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    var contextElement = document.getElementById("contex-menu");

    // Hide context menu if it's already active
    if (contextElement.classList.contains("active")) {
        contextElement.classList.remove("active");
    }

    contextElement.style.left = event.pageX + "px";
    contextElement.style.top = event.pageY + "px";
    contextElement.classList.add("active");
});

window.addEventListener("click", function () {
    document.getElementById("contex-menu").classList.remove("active");
});

const setCookie = function (cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

const getCookie = function (cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};

let darkMode = getCookie('darkMode');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    setCookie('darkMode', 'enabled', 30);
};

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    setCookie('darkMode', "disabled", 30);
};

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

function show(elementID) {
    const ele = document.getElementById(elementID);
    if (!ele) {
        console.error("No such element with ID:", elementID);
        return;
    }
    const pages = document.getElementsByClassName('page');
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    ele.style.display = 'block';
}

// Set the date we're counting down to
var countDownDate = new Date("Aug 31, 2024 15:00:00").getTime();

// Validate countdown date
if (isNaN(countDownDate)) {
    console.error("Invalid date for countdown");
    document.getElementById("countdown-timer").innerHTML = "Invalid countdown date";
} else {
    // Update the countdown every 1 second
    var countdownFunction = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the countdown date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes, and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="countdown-timer"
        document.getElementById("countdown-timer").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        // If the countdown is finished, display some text
        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("countdown-timer").innerHTML = "EXPIRED";
        }
    }, 1000);
}

const items = document.querySelectorAll('.timeline-item, .skill');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        } else {
            entry.target.classList.remove('in-view');
        }
    });
});

items.forEach(item => observer.observe(item));
