// Variables to store the width and height of the window
var w = window.innerWidth;
var h = window.innerHeight;
var resize = w/20 ;

// Setup function to create canvas
function setup() {
    canvas = createCanvas(w, h);

    
}

// Draw function to be continuously executed
function draw() {
    // Set background color
    background(255);

    // Draw grid and write text
    if(w>500){ 
    cicrclePos = drawGrid();
    writeText(100 , mouseX , 1);
    print (cicrclePos.length);
    for ( i = 0 ; i <= cicrclePos.length ; i++){
        
        circle(cicrclePos[i+1], cicrclePos[i] , 15);
        
    }
    
    subjects(cicrclePos);
    

    
    }
    else{
        drawGrid();
        writeText(40 , 60 ,1);

    }
}

// Function to draw a grid on the canvas
function drawGrid() {
    // Draw horizontal lines
    var cicrclePos = [];
    for (let i = 100; i < w + 1000; i += 300) {
        for (let j = 100; j < h + 1000; j += 300) {
            stroke(255, 0, 0);
            line(0, i, i + 1000, i);
            stroke(255, 0, 0);
            line(j, 0, j, j + 100);
            

            let pos = (i,j);
            cicrclePos.push(pos);

            
        }
    
        
        
    }

    // Draw vertical lines
   

    // Set frame rate
    frameRate(5);
    return cicrclePos;
    
}

// Function to write text on the canvas
function writeText(text1 , text2 , positionRate) {

    textSize(text1);
    noFill( )
    textFont('Courier New');
    text('A', w  /1.2 , 100/positionRate );
    text('H', w  /1.2 , 180/positionRate );
    text('M', w  /1.2 , 260/positionRate );
    text('E', w  /1.2 , 340/positionRate );
    text('D', w  /1.2 , 420/positionRate );


    // Set text size based on mouseX position
    textSize(text2);
    

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

function subjects(params){
    textSize(resize);
    stroke(0);
    fill(0);
    text1 = text("3D" , cicrclePos[1] , cicrclePos[0] );
    text2 = text("UX/UI" , cicrclePos[2] , cicrclePos[1] );
    text3 = text("Print" , cicrclePos[3] , cicrclePos[2] );

    //text1.mouseOver(scale(w));
    return text1 , text2 , text3 
};
// Event handler for window resize
window.onresize = function () {
    // Update width and height variables
    w = window.innerWidth;
    h = window.innerHeight;

    // Resize canvas accordingly
    canvas.size(w, h);
};

function resiize (){
    resize = w /10 ; 
    
}