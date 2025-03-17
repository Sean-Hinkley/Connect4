
let tilerow;
const cont = document.querySelector("container");
for(var x = 0; x < 7; x++) {
    tilerow = document.createElement("div");
    tilerow.setAttribute("class", "row m-auto");
    console.log(tilerow);
    cont.appendChild(tilerow);
    for(var y = 0; y < 6; y++) {
        let tile = document.createElement("div");
        tile.setAttribute("class", "col-2 block bg-primary m-2");
        tilerow.appendChild(tile);
    }
    
}