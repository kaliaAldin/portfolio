function setup() {
    createCanvas(1920, 1080);
  }
  
  function draw() {
    background(255);
    

    const random = [800 , 800 , 1800 , 1920 ];
    for (let i = 100; i < 1080 ; i += 300){
        
            line(0, i,  i + 1000 , i);

            stroke(255,0,0);

    
        

    }

  }
 