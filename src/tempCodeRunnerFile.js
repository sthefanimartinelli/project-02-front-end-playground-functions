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

console.log(encode('hello there!'));