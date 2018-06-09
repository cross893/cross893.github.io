console.clear();

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let userMoved = false;

let width;
let height;
function onResize () {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}
window.addEventListener('resize', onResize);
onResize();

const colors = ['#D90000', '#FF2D00', '#FF8C00', '#04756F'];
const backgroundColor = '#2E0927';
class Circle {
  constructor(x, y, siblings) {
    this.x = x;
    this.y = y;
    this.siblings = siblings;
    this.r = 0;
    this.speed = (Math.random() * 1) + 0.2;
    this.grow = true;
    this.babies = [];
    this.parent = null;
    this.getColor();
  }
  
  getColor() {
    // Make sure child doesn't have parent color
    if (this.parent) {
      let tempColors = colors.slice(0, colors.length);
      tempColors.splice(tempColors.indexOf(this.parent.color), 1);
      this.color = tempColors[Math.floor(Math.random() * tempColors.length)];
    } else {
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }
  }
  update() {
    // Check if radius is smaller than half width
    if (this.r > width * 0.5) {
      this.grow = false;
      return;
    }
    
    // Check if it doesn't collide with siblings
    let collide = false;
    this.siblings.forEach((circle) => {
      if (collide === false && circle !== this) {
        collide = this.checkCollision(circle);
      }
    });
    if (collide) {
      this.grow = false;
    }
    
    // Check if it doesn't overlap parent
    if (this.parent) {
      const dist = Math.hypot(this.x - this.parent.x, this.y - this.parent.y);
      if (dist > (this.parent.r - this.r)) {
        this.grow = false;
      }
    }
    
    if (this.grow) {
      this.r += this.speed;
    }
  }
  
  checkCollision(circle) {
    const dist = Math.hypot(this.x - circle.x, this.y - circle.y);
    if ((dist - 1) > (this.r + circle.r)) {
      return false;
    }
    return true;
  }
  
  clickedInside(x, y) {
    const dist = Math.hypot(this.x - x, this.y - y);
    if (dist > this.r) {
      return false;
    }
    return true;
  }
  
  draw() {
    ctx.fillStyle = this.color;
    ctx.save();
    ctx.beginPath();
    ctx.translate(this.x, this.y);
    ctx.arc(0, 0, this.r, 0, Math.PI*2);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    
    this.babies.forEach((circle) => {
      if (circle.grow) {
        circle.update();
      }
      circle.draw();
    });
  }
}

const circles = [];
let prevFrame = 0;
let i = 0;
function render (now){
  
  if (!userMoved && circles.length < 1000 && now - prevFrame > 60) {
    
    addCircle(noise.simplex2(i * 0.01, 0) * (width * 0.5) + (width * 0.5), noise.simplex2(0, i * 0.01) * (height * 0.5) + (height * 0.5), true);
    
    prevFrame = now;
  }
  i+=1;
  
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, width, height);
  
  circles.forEach((circle) => {
    if (circle.grow) {
      circle.update();
    }
    circle.draw();
  });
  
  requestAnimationFrame(render);
}

let prevMove = Date.now();
window.addEventListener('mousemove', (e) => {
  userMoved = true;
  const now = Date.now();
  if (now - prevMove > 80) {
    addCircle(e.clientX, e.clientY);
    prevMove = now;
  }
});
window.addEventListener('touchmove', (e) => {
  userMoved = true;
  const now = Date.now();
  if (now - prevMove > 80) {
    addCircle(e.touches[0].clientX, e.touches[0].clientY);
    prevMove = now;
  }
});

function addCircle(x, y, fromLoop) {
  x = x >= 0 ? x : Math.random() * width;
  y = y >= 0 ? y : Math.random() * height;
  
  let insideCircle = false;
  let parentCircle = null;
  // Check if user clicked inside a circle
  circles.forEach((circle) => {
    if (!insideCircle) {
      insideCircle = circle.clickedInside(x, y);
      if (insideCircle) {
        parentCircle = circle;
      }
    }
  });
  const circle = new Circle(x, y);
  if (!fromLoop && insideCircle && parentCircle.r > 12 && parentCircle.babies.length < 10) {
    circle.parent = parentCircle;
    circle.getColor();
    circle.siblings = parentCircle.babies;
    parentCircle.babies.push(circle);
  } else {
    circle.siblings = circles;
    circles.push(circle);
  }
}
requestAnimationFrame(render);