// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true){
    return true;
  } return false;
} 

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2; 
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(arrayStrings) {
  let concatString = arrayStrings[arrayStrings.length - 1] + ', ' + arrayStrings[0];
  return concatString;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(array) {
  
  let biggestNumber = array[0]
  for (let index = 1; index < array.length; index += 1){
    if (array[index] > biggestNumber) {
      biggestNumber = array[index];
    }
  }

  let highestCount = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === biggestNumber){
      highestCount += 1;
    }
  }
  return highestCount;
}

// Desafio 7
function catAndMouse(mousePosition, cat1Position, cat2Position) {
  if (Math.abs(cat1Position - mousePosition) > Math.abs(cat2Position - mousePosition)){
    return 'cat2';
  } else if (Math.abs(cat2Position - mousePosition) > Math.abs(cat1Position - mousePosition)) {
    return 'cat1';
  } return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
