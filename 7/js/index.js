var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var img = document.getElementById("source");

var treshold = 2000;

function resize() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
}
window.addEventListener("resize", resize);
resize();

function scaleImage(img, width, height) {
    var canvasRatio = width / height;
    var imgRatio = img.width / img.height;
    var h = height;
    var w = height * imgRatio;
    var x = (width - w) / 2;
    var y = 0;
    ctx.drawImage(img, x, y, w, h);
}

function draw(time) {
    var w = canvas.width;
    var h = canvas.height;
    ctx.fillStyle = '#111';
    ctx.fillRect(0, 0, w, h);
    scaleImage(img, w, h);
    var imageData = ctx.getImageData(0, 0, w, h);
    var data = imageData.data;
    for (var i = 0; i < h; i++) {
        var counter = treshold * 2 - Math.ceil(time) % treshold;
        for (var j = 0; j < w; j++) {
            var index = (i * w + j) * 4;
            var avg = (data[index] + data[index + 1] + data[index + 2]) / 3;
            counter += avg;
            var color = void 0;
            if (counter > treshold) {
                color = [250, 250, 250];
                counter -= treshold / 2;
            } else {
                color = [0, 35, 50];
            }
            var _color = color;

            var _color2 = _slicedToArray(_color, 3);

            data[index] = _color2[0];
            data[index + 1] = _color2[1];
            data[index + 2] = _color2[2];
        }
    }
    ctx.putImageData(imageData, 0, 0);
    requestAnimationFrame(draw);
}
requestAnimationFrame(draw);