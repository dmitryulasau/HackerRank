function bottles(numBottles, numExchange) {
  let bottlesToDrink = numBottles; // 9

  while (numBottles >= 1) {
    bottlesToDrink += numBottles / numExchange;
    numBottles /= numExchange;
  }

  return Math.floor(bottlesToDrink);
}

console.log(bottles(9, 3));
console.log(bottles(15, 4));
