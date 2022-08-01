const hamburger = document.querySelector(".wrapper .hamburger");
hamburger.onclick = function () {
    body = document.querySelector(".body");
    body.classList.toggle("active");
};