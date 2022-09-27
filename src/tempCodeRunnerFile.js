// Desafio 4
function concatName(arrayStrings) {
  let concatString = [arrayStrings[arrayStrings.length - 1], arrayStrings[0]];
  return concatString;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
