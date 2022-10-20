// // function factorial(n) {
// //   if (n === 0 || n === 1) {
// //     return 1;
// //   }

// //   if (n < 0) {
// //     return -1;
// //   }

// //   return n * factorial(n - 1);
// // }

// // console.log(factorial(4));

// // function factorial(n) {
// //   let result = 1;
// //   while (n > 1) {
// //     result *= n;
// //     n--;
// //   }
// //   return result;
// // }
// // console.log(factorial(4));

// // function getLetter(s) {
// //   let letter;
// //   // Write your code here
// //   switch (true) {
// //     case ["a", "e", "i", "o", "u"].includes(s[0]):
// //       letter = "A";
// //       break;
// //     case ["b", "c", "d", "f", "g"].includes(s[0]):
// //       letter = "B";
// //       break;
// //     case ["h", "j", "k", "l", "m"].includes(s[0]):
// //       letter = "C";
// //       break;
// //     case ["n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"].includes(s[0]):
// //       letter = "D";
// //       break;
// //     default:
// //   }

// //   return letter;
// // }

// // console.log(getLetter("asdf"));

// // function getSecondLargest(nums) {
// //   // Complete the function
// //   return [...new Set(nums)].sort((a, b) => a - b).reverse()[1];
// // }

// // console.log(getSecondLargest([2, 3, 6, 6, 5]));

// // console.log("1234".split("").reverse().join(""));

// // function isPositive(a) {
// //   if (a > 0) {
// //     return "YES";
// //   } else if (a === 0) {
// //     throw "Zero Error";
// //   } else {
// //     throw "Negative Error";
// //   }
// // }

// // try {
// //   isPositive(a);
// // } catch (error) {
// //   console.log(error);
// // }

// function findFirst(s) {
//   let count = {};

//   for (let i = 0; i < s.length; i++) {
//     count[s[i]] ? count[s[i]]++ : (count[s[i]] = 1);
//   }

//   for (let key in count) {
//     if (count[key] === 1) {
//       return s.indexOf(key);
//     }
//   }
//   return -1;
// }

// console.log(findFirst("loveleetcode"));
// console.log(findFirst("leetcode"));
// console.log(findFirst("aabb"));

var foo = function foo() {
  console.log(foo === foo);
};
foo();

function aaa() {
  return {
    test: 1,
  };
}
console.log(typeof aaa);
console.log(true + false > 2 + true);
