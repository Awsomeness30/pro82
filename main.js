 canvas=document.getElementById("myCanvas"); 

 ctx=canvas.getContext("2d");

 var mouseEvent="empty";

 var last_x,last_y;



color ="black";
width_of_line= 1;

canvas.addEventListener("mousedown",my_mousedown);

canvas.addEventListener("mouseup",my_mouseup);

canvas.addEventListener("mouseleave",my_mouseleave);

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{ 
    x =e.clientX - canvas.offsetLeft;

    y =e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {

     ctx.beginPath();
     ctx.strokeStyle = color;
     ctx.lineWidth =width_of_line;
     ctx.moveTo(last_x,last_y);
     ctx.lineTo(x, y);
     ctx.stroke();
    }
    
     last_x=x;
     last_y=y;         

}

function my_mouseup(e) {
    
    mouseEvent = "mouseUP"; }

function my_mouseleave(e) {
    
    
    
    mouseEvent = "mouseleave"; }

function my_mousedown(e) { 
    
    
    
    mouseEvent = "mouseDown"; }