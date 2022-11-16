function caesarCipherEncryptor(string, key) {
  // Write your code here.

  if (key > 26) {
    key = key % 26;
  }

  let result = "";

  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < string.length; i++) {
    let chipper = alphabet.indexOf(string[i]) + key;
    if (chipper > 25) {
      result += alphabet[chipper - 26];
    } else {
      result += alphabet[chipper];
    }
  }

  return result;
}

console.log(caesarCipherEncryptor("xyz", 54));
