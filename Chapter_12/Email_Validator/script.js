// script.js

const output = document.querySelector(".output");
const emailVal = document.querySelector("input");
const btn = document.querySelector("button");
const emailExp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;

btn.addEventListener("click", (e) => {
    const val = emailVal.value;
    const result = emailExp.test(val);
    let response = "";

    if (!result) {
        response = "Invalid Email";
        output.style.color = "red";
    } else {
        response = "Valid Email";
        output.style.color = "green";
    }
    
    emailVal.value = "";
    output.textContent = response;
});
