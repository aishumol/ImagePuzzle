function startGame() {
  document.querySelector("#p11").style.transform = "rotate(180deg)";
  document.querySelector("#p12").style.transform = "rotate(90deg)";
  document.querySelector("#p13").style.transform = "rotate(270deg)";
  document.querySelector("#p21").style.transform = "rotate(90deg)";
  document.querySelector("#p22").style.transform = "rotate(270deg)";
  document.querySelector("#p23").style.transform = "rotate(180deg)";
  document.querySelector("#p31").style.transform = "rotate(90deg)";
  document.querySelector("#p32").style.transform = "rotate(180deg)";
  document.querySelector("#p33").style.transform = "rotate(270deg)";

  let totalTime = 100;
  let min = 0;
  let sec = 0;
  let counter = 0;

  let timer = setInterval(function () {
    counter++;
    min = Math.floor((totalTime - counter) / 60);
    sec = totalTime - min * 60 - counter;
    document.getElementById("time").innerHTML = min + " : " + sec;

    if (counter == totalTime) {
      clearInterval(timer);
      document.getElementById("p11").style.visibility = "hidden";
      document.getElementById("p12").style.visibility = "hidden";
      document.getElementById("p13").style.visibility = "hidden";
      document.getElementById("p21").style.visibility = "hidden";
      document.getElementById("p22").style.visibility = "hidden";
      document.getElementById("p23").style.visibility = "hidden";
      document.getElementById("p31").style.visibility = "hidden";
      document.getElementById("p32").style.visibility = "hidden";
      document.getElementById("p33").style.visibility = "hidden";
      document.getElementById("tiles").style.background = 'url("https://media3.giphy.com/media/gLjD6hjRaLcFslzpvR/giphy.gif")';


    }
//console.log(min);
//console.log(sec)
}, 500);

  var current_rotation = 0;
  var rotation = 0;
  document.querySelector("#p11").addEventListener("click", function () {
    current_rotation += 90;
    document.querySelector("#p11").style.transform =
      "rotate(" + current_rotation + "deg)";
    rotation++;
    document.getElementById("rotation").textContent = "Rotations : " + rotation;

  });

  document.querySelector("#p12").addEventListener("click", function () {
    current_rotation += 90;
    document.querySelector("#p12").style.transform =
      "rotate(" + current_rotation + "deg)";
    rotation++;
    document.getElementById("rotation").textContent = "Rotations : " + rotation;


  });

  document.querySelector("#p13").addEventListener("click", function () {
    current_rotation += 90;
    document.querySelector("#p13").style.transform =
      "rotate(" + current_rotation + "deg)";
    rotation++;
    document.getElementById("rotation").textContent = "Rotations : " + rotation;

  });
  document.querySelector("#p21").addEventListener("click", function () {
    current_rotation += 90;
    document.querySelector("#p21").style.transform =
      "rotate(" + current_rotation + "deg)";
    rotation++;
    document.getElementById("rotation").textContent = "Rotations : " + rotation;

  });
  document.querySelector("#p22").addEventListener("click", function () {
    current_rotation += 90;
    document.querySelector("#p22").style.transform =
      "rotate(" + current_rotation + "deg)";
    rotation++;
    document.getElementById("rotation").textContent = "Rotations : " + rotation;

  });
  document.querySelector("#p23").addEventListener("click", function () {
    current_rotation += 90;
    document.querySelector("#p23").style.transform =
      "rotate(" + current_rotation + "deg)";
    rotation++;
    document.getElementById("rotation").textContent = "Rotations : " + rotation;

  });
  document.querySelector("#p31").addEventListener("click", function () {
    current_rotation += 90;
    document.querySelector("#p31").style.transform =
      "rotate(" + current_rotation + "deg)";
    rotation++;
    document.getElementById("rotation").textContent = "Rotations : " + rotation;

  });

  document.querySelector("#p32").addEventListener("click", function () {
    current_rotation += 90;
    document.querySelector("#p32").style.transform =
      "rotate(" + current_rotation + "deg)";
    rotation++;
    document.getElementById("rotation").textContent = "Rotations : " + rotation;

  });
  document.querySelector("#p33").addEventListener("click", function () {
    current_rotation += 90;
    document.querySelector("#p33").style.transform =
      "rotate(" + current_rotation + "deg)";
    rotation++;
    document.getElementById("rotation").textContent = "Rotations : " + rotation;

  });
}


function endGame(){
  location.replace("https://google.com")
}
