function funcName() {

    let arr = [1, 2, 4, 8, 'c', NaN, 0, 0, 0, 5];
    let zeroElements = 0, evenElements = 0, oddElements = 0;
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        zeroElements++;
      } else if (typeof +arr[i] == 'number' && !isNaN(+arr[i])) {
        if (arr[i] % 2 === 0) evenElements++;
        else oddElements++;
      }
    }
      console.log(`There are ${zeroElements} zeroes, ${evenElements} even and ${oddElements} odd numbers in array.`);
    };
    funcName();