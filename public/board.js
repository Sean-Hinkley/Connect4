const socket = io();
let tilerow;
let tile;
const cont = document.querySelector(".holder");

for(var x = 0; x < 6; x++) {

    tilerow = document.createElement("div");
    tilerow.setAttribute("class", "row m-auto justify-content-center");
    
    cont.appendChild(tilerow);
    for(var y = 0; y < 7; y++) {
        tile = document.createElement("div");
        tile.setAttribute(`class`, `border-3 border border-dark mx-3 col-2 block bg-primary-subtle m-1 `);
        tile.setAttribute("id", `O-${x}-${y}`);
        tilerow.appendChild(tile);
    }
    
}

const blocks = document.querySelectorAll(".block");
for(var s = 0; s < blocks.length; s++) {
    let f = blocks[s];
    f.addEventListener('click', (event) => {
        let c = f.getAttribute('id');
        let n = c.charAt(4);
        socket.emit("buttonPressed",  n);
        console.log(n);

    });
}

class Block {

    constructor(x,y) {
        this.div = document.createElement('div');
        this.div.setAttribute('class', `block col-2 m-1 bg-danger mx-auto border border-3 border-dark`)
    }
}

class Board {
    constructor() {
        this.board = [];
        this.createBoard();
    }

    createBoard() {
        for(var x = 0; x < 6; x++) {
            this.board.push([]);
            let n = document.createElement('div');
            n.setAttribute('class', "row m-auto  justify-content-center");
            this.board[x].push(n);
            for(var y = 0; y < 7; y++) {
                let c = new Block(x,y);
                this.board[x].push(c.div);
            }
        }
    }



    addBoard(container) {
        for(var x = 0; x < this.board.length; x++) {
            let b = this.board[x][0];
            container.appendChild(b);
            for(var y = 1; y < this.board[x].length; y++) {
                let n = this.board[x][y];
                b.appendChild(n);
            }
        }
        
    }
}

let B = new Board();

B.addBoard(cont);