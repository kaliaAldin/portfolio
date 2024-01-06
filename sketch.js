// Variables to store the width and height of the window
var w = window.innerWidth;
var h = window.innerHeight;

// Setup function to create canvas
function setup() {
    canvas = createCanvas(w, h);
}

// Draw function to be continuously executed
function draw() {
    // Set background color
    background(255);

    // Draw grid and write text
    drawGrid();
    writeText();
}

// Function to draw a grid on the canvas
function drawGrid() {
    // Draw horizontal lines
    for (let i = 100; i < w + 1000; i += 300) {
        stroke(255, 0, 0);
        line(0, i, i + 1000, i);
    }

    // Draw vertical lines
    for (let i = 100; i < h + 1000; i += 300) {
        stroke(255, 0, 0);
        line(i, 0, i, i + 100);
    }

    // Set frame rate
    frameRate(5);
}

// Function to write text on the canvas
function writeText() {

    textSize(100);
    noFill( )
    textFont('Courier New');
    text('A', w  /1.2 , 100 );
    text('H', w  /1.2 , 180 );
    text('M', w  /1.2 , 260 );
    text('E', w  /1.2 , 340 );
    text('D', w  /1.2 , 420 );


    // Set text size based on mouseX position
    textSize(mouseX);
    

    // Set frame rate
    frameRate(10);

    // Set text properties
    noFill();
    textFont('Courier New');
    stroke(255, 0, 0);

    // Display text
    text('Portfolio', w / 20, h / 1.4);

    // Set text alignment to LEFT
    textAlign(LEFT);
}

// Event handler for window resize
window.onresize = function () {
    // Update width and height variables
    w = window.innerWidth;
    h = window.innerHeight;

    // Resize canvas accordingly
    canvas.size(w, h);
};
