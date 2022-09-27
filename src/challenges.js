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
function fizzBuzz(array) {
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      newArray.push('fizz');
    } else if (array[index] % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
}     return newArray;

}

// Desafio 9
function encode(string) {
  let stringArray = string.split('');
  let newString = [];

  for (let index = 0; index < stringArray.length; index += 1) {
    if (stringArray[index] === 'a'){
      newString.push('1');
    } else if (stringArray[index] === 'e'){
      newString.push('2');
    } else if (stringArray[index] === 'i'){
      newString.push('3');
    } else if (stringArray[index] === 'o'){
      newString.push('4');
    } else if (stringArray[index] === 'u'){
      newString.push('5');
    } else {
      newString.push(stringArray[index])
    }

  }   return newString.join('');
}

function decode(stringLetrasNumeros) {
  let stringArray = stringLetrasNumeros.split('');
  let newString = [];

  for (let index = 0; index < stringArray.length; index += 1) {
    if (stringArray[index] == 1){
      newString.push('a');
    } else if (stringArray[index] == 2){
      newString.push('e');
    } else if (stringArray[index] == 3){
      newString.push('i');
    } else if (stringArray[index] == 4){
      newString.push('o');
    } else if (stringArray[index] == 5){
      newString.push('u');
    } else {
      newString.push(stringArray[index])
    }

  }   return newString.join('');
}

// Desafio 10
function techList(arrayTech, nameUser) {
  if (arrayTech.length !== 0) {   
    let arrayTechSorted = arrayTech.sort();
    let list = [];

    for (let index = 0; index < arrayTechSorted.length; index += 1) {
      let result = {'tech': arrayTechSorted[index], 'name': nameUser};
      list.push(result);

    } return list;
    
  } return 'Vazio!'; 
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
