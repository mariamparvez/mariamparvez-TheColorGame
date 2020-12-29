var arrboxes = 6;
var colors = [];
var pickedColor;

var boxes = document.querySelectorAll(".boxy");
var colorHead = document.querySelector("#name");
var messageDisplay = document.querySelector("#message");
var h2 = document.querySelector("h2");
var resetButton = document.querySelector("#reset");
var hardButtons = document.querySelectorAll(".mode");
var easyButton = document.querySelector(".mode");
var modeButtons=document.getElementsByClassName("mode");

function init() {
    colorHead.textContent = pickedColor;
    setBoxes();
    setMode();
    reset();
}

//generating random clr
function makeColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"; 
}

resetButton.addEventListener("click", function() {
    reset();
}); 


function setBoxes() {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = colors[i];
        boxes[i].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again";
                changeColors(pickedColor);
            }
            else {
                this.style.backgroundColor = "black";
                messageDisplay.textContent = "Try again";
            }
        });
    }
}


//function for setting up mode
function setMode() {
    for(var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            for (var i = 0; i < modeButtons.length; i++) {
                modeButtons[i].classList.remove("selected");
            }
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                arrboxes = 3;
            }
            else {
                arrboxes = 6;
            }
            reset();
        });
    }
}


//function for reset

function reset() {
    colors = genRandomColors(arrboxes);
    pickedColor = chooseColor();
    colorHead.textContent = pickedColor;
    h2.style.backgroundColor = "gold";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    for (var i = 0; i < boxes.length; i++) {
        if(colors[i]) { 
            boxes[i].style.display = "block";
            boxes[i].style.backgroundColor = colors[i];
        }
        else {
            boxes[i].style.backgroundColor = "black";
        }
    }
}

resetButton.addEventListener("click", function() {
    reset();
});

//pushing clrs to array
function genRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(makeColor());
    }
    return arr;
}

// random choosing random clr
function chooseColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


// change clr function
function changeColors(color) {
    for(var i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = color;
        h2.style.backgroundColor = color;
    }
}

init();
