const canvas = document.querySelector('canvas');


function drawHorLine(y){
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = "red" ;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0 , y );
    ctx.lineTo(300,y);
    ctx.stroke();
}
function drawVerLine(x){
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = "red" ;
    ctx.lineWidth = 2;
    
    ctx.beginPath();
    ctx.moveTo(x , 0 );
    ctx.lineTo(x,300);
    ctx.stroke();
}
for ( let i = 10 ;  i < 150 ;  i+=50 ) {
    drawHorLine(i);

}
for ( let i = 10 ;  i < 300 ;  i+=50 ) {
    drawVerLine(i);

}
