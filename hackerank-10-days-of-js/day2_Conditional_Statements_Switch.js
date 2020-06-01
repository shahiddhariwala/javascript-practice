function getLetter(s) {
  let letter;
  const aSet = new Set(["a", "e", "i", "o", "u"]);
  const bSet = new Set(["b", "c", "d", "f", "g"]);
  const cSet = new Set(["h", "j", "k", "l", "m"]);

  switch (true) {
    case aSet.has(s[0]):
      letter = "A";
      break;
    case bSet.has(s[0]):
      letter = "B";
      break;
    case cSet.has(s[0]):
      letter = "C";
      break;
    default:
      letter = "D";
      break;
  }
  return letter;
}

(function main() {
  const s = "abcdef";

  console.log(getLetter(s));
})();
