var c = document.getElementsByTagName("canvas")[0];
var ctx = c.getContext("2d");
c.width = 800;
c.height = 500;
var cw = c.width;
var ch = c.height;
var ccw = c.width / 2;
var cch = c.height / 2;

var time = 1; // seconds
var num = 20; // of flowers (even number)
var colors = ["#F9D6A6", "#F9B69D", "#866668", "#E25D6F", "#4A374B"]; //["#2b2d42", "#4B88A2", "#FF6B6C"];
ctx.lineWidth = 2;

var i, ran, coorx, coory;

function run() {
    i = 0;

    ran = [];
    coorx = [];
    coory = [];

    for (var l = 0; l < num; l++) {
        coorx.push(Math.round(cw * l / num));
        coory.push(Math.round(ch * l / num));
    }

    for (var k = 0; k < num; k++) {
        var cox = Math.floor(Math.random() * coorx.length);
        ran.push(coorx[cox]);
        coorx.splice(cox, 1);
        var coy = Math.floor(Math.random() * coory.length);
        ran.push(coory[coy]);
        coory.splice(coy, 1);
        ran.push(Math.floor(Math.random() * 60) + 30);
        ran.push(Math.floor(Math.random() * 10) + 6);
        ran.push(
            colors[
                Math.round(
                    (k / colors.length - Math.floor(k / colors.length)) *
                        colors.length
                )
            ]
        );
    }

    draw();
}
function draw() {
    ctx.clearRect(0, 0, cw, ch);

    for (var j = 0; j < num / 2; j++) {
        draw_flower(
            i,
            ran[j * 5],
            ran[j * 5 + 1],
            ran[j * 5 + 2],
            ran[j * 5 + 3],
            ran[j * 5 + 4]
        );
    }

    for (var m = num / 2 + 1; m < num; m++) {
        draw_flower_2(
            i,
            ran[m * 5],
            ran[m * 5 + 1],
            ran[m * 5 + 2],
            ran[m * 5 + 3],
            ran[m * 5 + 4]
        );
    }

    i += 0.01;

    if (i < 1) {
        window.setTimeout(draw, time * 1000 * 0.01);
    }
}

function draw_petal(n, x_st, y_st, s, ang) {
    var n_1, n_2;
    if (n < 0.5) {
        n_1 = n * 2;
        n_2 = 0;
    } else {
        n_1 = 1;
        n_2 = n * 2 - 1;
    }
    ctx.translate(x_st, y_st);
    ctx.rotate(-1 * ang * Math.PI / 180);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(
        -1 * s * n_1,
        s * n_1,
        s * 2 * n_1 * (n_1 - 1),
        s * 2 * n_1
    );
    ctx.moveTo(0, s * 2);
    ctx.quadraticCurveTo(
        s * n_2,
        s * (2 - n_2),
        -1 * s * 2 * n_2 * (n_2 - 1),
        -1 * s * 2 * (n_2 - 1)
    );
    ctx.stroke();
    ctx.closePath();
    ctx.rotate(ang * Math.PI / 180);
    ctx.translate(-1 * x_st, -1 * y_st);
}

function draw_flower(n, x_st, y_st, s, num_petals, col) {
    ctx.strokeStyle = col;
    for (var j = 0; j < num_petals; j++) {
        draw_petal(n, x_st, y_st, s, 360 * j / num_petals);
    }
}

function draw_petal_2(n, x_st, y_st, s, ang) {
    var n_21, n_22, n_23, n_24;
    if (n < 0.25) {
        n_21 = n * 4;
        n_22 = 0;
        n_23 = 0;
        n_24 = 0;
    } else if (n > 0.25 && n < 0.5) {
        n_21 = 1;
        n_22 = (n - 0.25) * 4;
        n_23 = 0;
        n_24 = 0;
    } else if (n > 0.5 && n < 0.75) {
        n_21 = 1;
        n_22 = 1;
        n_23 = (n - 0.5) * 4;
        n_24 = 0;
    } else {
        n_21 = 1;
        n_22 = 1;
        n_23 = 1;
        n_24 = (n - 0.75) * 4;
    }
    ctx.translate(x_st, y_st);
    ctx.rotate(-1 * ang * Math.PI / 180);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(
        -0.6 * s * n_21,
        s * n_21 / 2,
        0.4 * s * n_21 * (n_21 - 2),
        s * n_21
    );
    ctx.moveTo(-0.4 * s, s);
    ctx.quadraticCurveTo(
        s * (0.2 * n_22 - 0.4),
        s * (0.2 * n_22 + 1),
        -0.4 * s * (1 - n_22),
        -0.15 * n_22 * s + s
    );
    ctx.moveTo(0, 0.85 * s);
    ctx.quadraticCurveTo(
        s * 0.2 * n_23,
        0.35 * s * n_23 + 0.85 * s,
        0.4 * s * n_23,
        0.15 * s * n_23 + 0.85 * s
    );
    ctx.moveTo(0.4 * s, s);
    ctx.quadraticCurveTo(
        s * (0.2 * n_24 + 0.4),
        s * (1 - n_24 / 2),
        s * 0.4 * (1 - n_24 * n_24),
        s * (1 - n_24)
    );
    ctx.stroke();
    ctx.closePath();
    ctx.rotate(ang * Math.PI / 180);
    ctx.translate(-1 * x_st, -1 * y_st);
}

function draw_flower_2(n, x_st, y_st, s, num_petals, col) {
    ctx.strokeStyle = col;
    for (var j = 0; j < num_petals; j++) {
        draw_petal_2(n, x_st, y_st, s, 360 * j / num_petals);
    }
}

run();