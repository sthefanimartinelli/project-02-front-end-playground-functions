 let array = [1, 2, 3, 4, 4, 4, 5, 6, 7, 8, 1];
  if (array.length !== 11) {
    console.log('Array com tamanho incorreto.');
  }
  for (let key in array) {
    if (array[key] < 0 || array[key] > 9) {
      console.log('não é possível gerar um número de telefone com esses valores');
    }
  }

  const result = {};
  for (let index = 0; index < array.length; index += 1) {
    const number = array[index];
    if (!result[number]) {
      result[number] = 0;
    } result[number] += 1;
  }

  for (let key in result) {
    if (result[key] >= 3) {
      console.log('não é possível gerar um número de telefone com esses valores');
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
  }
    console.log(numeroTelefone);