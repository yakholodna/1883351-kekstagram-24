function getRandomInt(from, to) {
  return Math.floor(Math.random()*(to - from + 1) + from);
}

getRandomInt(2, 10);

function checkLengthRequirement(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  
  return false;
}

checkLengthRequirement('hello, world!', 5);
