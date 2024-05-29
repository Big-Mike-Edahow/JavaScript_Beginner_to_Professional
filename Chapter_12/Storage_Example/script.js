// script.js

window.localStorage.setItem("name", "That name!");
function whatName() {
    window.localStorage.clear();
    document.getElementById("whatname").innerText =
        window.localStorage.getItem("name");
}
