function selfDividing(left, right) {
  //   let temp = [];
  //   let result = [];

  //   for (let i = left; i <= right; i++) {
  //     if (!i.toString().includes(0)) temp.push(i);
  //   }

  //   for (let i = 0; i < temp.length; i++) {
  //     if (temp[i] < 10) {
  //       result.push(temp[i]);
  //     }

  //     while (temp[i] >= 10) {
  //       let lastDigit = temp[i] % 10;

  //       if (temp[i] % lastDigit !== 0 && temp[i]) {
  //         break;
  //       }

  //       result.push(temp[i]);

  //       temp[i] = Math.floor(temp[i] / 10);
  //     }
  //   }

  let result = [];

  for (let i = left; i <= right; i++) {
    for (digit of i.toString()) {
      if (Number(digit) == 0 || i % Number(digit) != 0) {
        break;
      }
      result.push(i);
    }
  }

  return result;
}

console.log(selfDividing(9, 15));
// console.log(selfDividing(47, 85));
