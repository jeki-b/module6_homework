let num = prompt('введите число');
num = +num;
let exponent = prompt('число');
exponent = +exponent;

function computePower(num, exponent) {
      var result = 1;
      for (i = 0; i < exponent; i++) {
      result *= num;
      }
      return result;
  }
computePower(num, exponent);