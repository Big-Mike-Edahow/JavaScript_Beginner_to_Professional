// script.js

const firstArea = document.querySelector("input[name='txtarea']");
const secArea = document.querySelector("input[name='txtarea2']");

document.querySelector("button").addEventListener("click", lookUp);
function lookUp() {
    const rawTxt = firstArea.value;
    const eData = rawTxt.match(
        /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi
    );
    const holder = [];
    for (let x = 0; x < eData.length; x++) {
        if (holder.indexOf(eData[x]) == -1) {
            holder.push(eData[x]);
        }
    }
    secArea.value = holder.join(",");
}
