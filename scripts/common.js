$(document).ready(function () {
    if (window.location.pathname.indexOf('index.html') > -1) {
        $("#header").load("html/header.html");
         document.addEventListener("DOMContentLoaded", function () {
             alert('test');
            document.getElementById('logo-link').removeAttribute('href');
             document.getElementById('logo-link').setAttribute('href', 'index.html');
        });
    }
    else {
        $("#header").load("../html/header.html");
    }
});