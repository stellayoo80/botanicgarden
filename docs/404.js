
console.log("here");

var bd = document.body;
bd.style.backgroundColor = "rgb(255, 0, 0)";

var headerElement = document.createElement('h1');
headerElement.textContent = "There is no page that exists here. Creepy";
document.body.appendChild(headerElement);
headerElement.style.color = "rgb(0,255, 75)";


// grab elemnts from the html
var grabbed = document.getElementById( "a" );
grabbed.style.color = "rgb(255, 0, 255)";
grabbed.style.color = "rgb(50, 50, 50)";

for ( let i = 0; i < 255; i = i + 3 ) { // a for-loop

  var temp = document.createElement('h1');
  temp.textContent = "a element added--" + String( i );
  temp.style.color = "hsl(" + i+", 100%, 50%)";

  bd.appendChild(temp);

}

var grabbed = document.getElementById( "a" );
grabbed.style.backgroundColor = "rgb(255, 0, 255)";
grabbed.style.color = "rgb(0, 50, 150)";
