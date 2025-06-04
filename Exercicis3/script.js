// Random

function random(min, max) {
  var e = Math.random();

  return e;
}

var numRand = random(2, 4);
console.log(numRand);

// Cap_i_cua

function capIcua(numero) {
  let text = numero.toString();
  text = text.split("");
  console.log(text);
}

capIcua(5369841);
