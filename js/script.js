function trocarCor() {
    if(document.body.style.backgroundColor == "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
}


function addText() {
    var novoParagrafo = document.createElement("p");

    var text = "O mágico de OZ - 20:00hs - Hoje"

    novoParagrafo.textContent = text;

    document.body.appendChild(novoParagrafo);
}

addText();

document.querySelectorAll('h1').forEach(function(h1){
    h1.style.color = "#fcb000";
})