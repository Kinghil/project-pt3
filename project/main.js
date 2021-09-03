canvas = document.getElementById("myCanvas");
color= "red";
ctx = canvas.GetContext("2d")
ctx.beginpath();
ctx.strokeStyle = color;
ctx.linewidth = 2;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();
canvas.addeventListener("mousedown", my_mousedown)
function my_mousedown (e)
{
    //takingcolor from input box
    //additional activity stary
    color = doucment.getelementbyid("color").value;
console.log(color) ;
// addition activity ends
}
mouse_x = clientX - canvas.offsetLeft;
mouse_y = e.clientY - canvas.ofsetTop;

console.log(("X=" + mouse_x  +" ,Y= " + mouse_y));
circle(mouse_x , mouse_y);

function circle(mouse_x , mouse_y)
{
    ctx.beginpath();
    ctx.strokeStyle
    ctx.linewidth
    ctx.arc(mouce_x, mouse_x, 40, 0, 2*Math.PI);
    ctx.stroke();
}