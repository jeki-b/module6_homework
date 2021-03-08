num1 = 5
num2 = 15
function getList() {
  if (num1 <= num2) {
    console.log(num1);
    num1 += 1;
  } else {
    return 0;
  }
}

setInterval(getList, 1000);
