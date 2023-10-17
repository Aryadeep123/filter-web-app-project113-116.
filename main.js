function preload() {

}

function setup() {
    canvas= createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    canvas.center();

    tint_color =" ";
}

function draw() {

}

function take_snapshot() {
    save(" Filter.png");
}
