// script.js

const output = document.getElementById("output");
const findValue = document.getElementById("sText");
const replaceValue = document.getElementById("rText");

document.querySelector("button").addEventListener("click", lookUp);

function lookUp() {
    let s = output.textContent;
    let rt = replaceValue.value;
    let re = new RegExp(findValue.value, "gi");

    if (s.match(re)) {
        let newValue = s.replace(re, rt);
        output.textContent = newValue;
    }
}
