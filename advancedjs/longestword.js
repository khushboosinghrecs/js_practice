function findLongestWord(sentence) {
  console.log(sentence, "** split");
  let words = sentence.split(" ");
  let word2 = sentence.split("");

  console.log(words, "**");

  console.log(word2, "**");

  let longestword = "";
  for (let w of words) {
    if (w.length > longestword.length) {
      longestword = w;
    }
  }

  return longestword;
}

findLongestWord("Write a function that reverses a given string.");

function findLongestWord2(sentence) {
  console.log(sentence, "** split");
  let words = sentence.split(" ");
  let word2 = sentence.split("");

  console.log(words, "**");

  console.log(word2, "**");

  let longestword = words.reduce((longestword, currentword) => {
    return currentword.length > longestword.length ? currentword : longestword;
  }, "");

  return longestword;
}

findLongestWord2("Write a function that reverses a given string.");
