function preload(){
    img= loadImage('https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg');
}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);

}
function draw(){
    image(img,250,170,70,70);
    fill(0,128,0);
circle(220,160,30);
circle(330,160,30);
circle(330,240,30);
circle(220,240,30);

}
function take_snapshot(){
    save('student_name.png');

}
