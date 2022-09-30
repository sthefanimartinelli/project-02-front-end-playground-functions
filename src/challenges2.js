
// // Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let key in array) {
    if (array[key] < 0 || array[key] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  const result = {};
  for (let index = 0; index < array.length; index += 1) {
    const number = array[index];
    if (result[number] === undefined) {
      result[number] = 1;
    } else {
      result[number] += 1;
    }
  } 

  for (let key in result) {
    if (result[key] >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let numeroTelefone = '';

  for (let index = 0; index < array.length; index += 1) {
    if(index === 0) {
      numeroTelefone = '(' + array[index];
    } else if (index === 1) {
      numeroTelefone = numeroTelefone + array[index] + ')';
    } else if (index === 2) {
      numeroTelefone = numeroTelefone + ' ' + array[index];
    } else if (index === 7) {
      numeroTelefone = numeroTelefone + '-' + array[index];
    } else {
      numeroTelefone = numeroTelefone + array[index];
    }
  } return numeroTelefone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let isTriangle = true;

  let requisito1 = (lineA >= lineB + lineC || lineB >= lineA + lineC || lineC >= lineA + lineB);

  let requisito2 = (lineA <= Math.abs(lineB - lineC) || lineB <= Math.abs(lineA - lineC) || lineC <= Math.abs(lineA - lineB));

  if (requisito1 === true || requisito2 === true) {
    isTriangle = false;
  }
  return isTriangle;     
}

// Desafio 13
function hydrate(string) {
  let stringArray = string.split('');
  let sum = 0;

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] == 1 || string[index] == 2 || string[index] == 3 || string[index] == 4 || string[index] == 5 || string[index] == 6 || string[index] == 7 || string[index] == 8 || string[index] == 9) {
      let indexAtual = parseInt(string[index]);
      sum = sum + indexAtual;
    }
  }
  
  if (sum == 1) {
    return sum + ' copo de água'
  } return sum + ' copos de água'

} console.log(hydrate('7 cachaça, 8 cervejas e 9 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
}
