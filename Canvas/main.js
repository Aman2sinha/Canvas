var Piece;

function rectr() {
    
    mov.start();
}
function Piece(){
    Piece = new component(70, 70, "skyblue", 20, 120);
    
}

var mov = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 780;
        this.canvas.height = 370;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = mov.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }    
}

function updateGameArea() {
    mov.clear();
    Piece.newPos();    
    Piece.update();
}

function moveleft() {
    Piece.speedX = -1; 
}

function moveright() {
    Piece.speedX = 1; 
}

function clearmove() {
    Piece.speedX = 0; 
    Piece.speedY = 0; 
}
function remove(){
    window.location.reload();
}