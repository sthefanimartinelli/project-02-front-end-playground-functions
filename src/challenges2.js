
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
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
}
