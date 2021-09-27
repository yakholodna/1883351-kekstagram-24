function getRandomInt(from, to) {
  return Math.floor(Math.random()*(to - from + 1) + from);
}

function checkLengthRequirement(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  
  return false;
}
