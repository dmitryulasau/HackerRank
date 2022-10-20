// Given an array of strings wordsDict and two different strings that already
// exist in the array word1 and word2, return the shortest distance between these
// two words in the list.

function words(array, string1, string2) {
  if (string1 === string2) {
    return 0;
  }

  let min_dist = array.length + 1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === string1) {
      for (let j = 0; j < array.length; j++) {
        if (array[j] === string2) {
          let curr = Math.abs(i - j);
          if (curr < array.length + 1) {
            min_dist = curr;
          }
        }
      }
    }
  }
  return min_dist;
}

console.log(
  words(
    ["practice", "makes", "perfect", "coding", "makes"],
    "coding",
    "practice"
  )
);

console.log(
  words(["practice", "makes", "perfect", "coding", "makes"], "makes", "coding")
);
