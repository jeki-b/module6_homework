let num = prompt('введите число')
if (typeof +num == 'number' && !isNaN(+num)) {
  checkNumber(num);
} else {
  console.log('данные неверны.');
}
function checkNumber(num) {
  if (num > 1000) {
    console.log('введено больше 1 000.')
  } else if (num == 0 || num == 1) {
    console.log(`Вы ввели ${num}.`);
  } else if (num == 2 || num == 3 || num == 5 || num == 7 || (num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 0 && num % 7 !== 0)) {

    console.log('Простой.');
  } else {
    console.log('Не простой.');
  }
}