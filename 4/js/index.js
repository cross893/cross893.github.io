var canvas = d3.select("canvas");

var ctx = canvas.node().getContext("2d");

var canvasWidth = +canvas.attr("width"),
  canvasHeight = +canvas.attr("height");

var projection = d3.geoOrthographic();

var geoPathGenerator = d3
  .geoPath()
  .projection(projection)
  .context(ctx);

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.fillStyle = "white";

d3
  .json("https://unpkg.com/world-atlas@1.1.4/world/50m.json")
  .then(function(loadedTopoJson) {
    var worldGeoJson = topojson.feature(
      loadedTopoJson,
      loadedTopoJson.objects.land
    );

    projection.fitExtent([[0, 5], [canvasWidth, canvasHeight - 5]], worldGeoJson);

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "white";
    geoPathGenerator({ type: "Sphere" });
    ctx.stroke();
    ctx.closePath();

    var clearSmearCounter = 0;

    d3.timer(function(elapsed) {
      clearSmearCounter++;

      if (clearSmearCounter > 200) {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        clearSmearCounter = 0;

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "white";
        geoPathGenerator({ type: "Sphere" });
        ctx.stroke();
        ctx.closePath();
      }

      projection.rotate([elapsed * 0.005 + 120, 30, -23.4]);

      ctx.beginPath();
      ctx.lineWidth = 0.3;
      ctx.strokeStyle = "deeppink";
      geoPathGenerator(worldGeoJson);
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    });
  });