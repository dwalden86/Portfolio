var squares = [];

function setup() {
  createCanvas(800,800);

  while (squares.length < 250) {

    var red = Math.floor((Math.random() * 255) + 1)
    var green = Math.floor((Math.random() * 255) + 1)
    var blue = Math.floor((Math.random() * 255) + 1)

    var square = {
      x: random(width),
      y: random(height),
      r: random(14, 32),
      red: red,
      green: green,
      blue: blue
    };

    var overlapping = false;

    for (var j = 0; j< squares.length; j++) {
      var other = squares[j];
      var d = dist(square.x, square.y, other.x, other.y);
      if (d < square.r + other.r) {
        overlapping = true;
      }
    }

    if (!overlapping) {
      squares.push(square);
      console.log("overlap");         
    }

 
  }


  console.log(squares.length);

  
}



function draw() {

  for (var i = 0; i < squares.length; i++) {

      fill(squares[i].red, squares[i].green, squares[i].blue);
      noStroke();

      rect(squares[i].x, squares[i].y, squares[i].r*2, squares[i].r*2);
  }

}