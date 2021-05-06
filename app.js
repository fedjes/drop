let zone1 = document.querySelector('#pic');
let zone2 = document.querySelector('#pole');

let img = document.querySelector('#img');

zone1.ondragover = allowDrop;
zone2.ondragover = allowDrop;


function allowDrop(event) {
    event.preventDefault();
}

img.ondragstart = drag;
function drag(event) {
    event.dataTransfer.setData('id', event.target.id);
}

zone1.ondrop = drop;
zone2.ondrop = drop;

function drop(event) {
    let itemId = event.dataTransfer.getData('id');
    event.target.append(document.getElementById(itemId));
}