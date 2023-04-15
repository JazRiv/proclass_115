nariz_x = 0;
nariz_y = 0;

function tomar() {
    save("MiFotoConFiltro.png")
}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();
    background("white");
    video = createCapture(VIDEO);
    video.size(600,400);
    video.hide();
    pos = ml5.poseNet(video, modelo_listo);
    pos.on("pose",obtener);
}

function preload() { 

}

function draw() {
    image(video, 0, 0, 600, 400);
}

function modelo_listo() {
    console.log("Modelo Cargado");
}

function obtener(result) {
    console.log(result);
    if(result.lenght > 0) {
        nariz_x = result[0].pos.nose.x;
        nariz_y = result[0].pos.nose.y;
    }
}