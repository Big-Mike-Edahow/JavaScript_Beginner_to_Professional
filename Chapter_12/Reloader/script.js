// script.js

let myList = [
    {
        name: "Learn JavaScript",
        status: true,
    },
    {
        name: "Try JSON",
        status: false,
    },
];

function reloader() {
    myList.forEach((el) => {
        console.log(`${el.name} = ${el.status}`);
    });
}

reloader();
