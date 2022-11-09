var dictionary = require('./dictionary.js');

function search(word, dictionary) {
  for(w in dictionary) {
    if(dictionary[w] == word) {
      return true;
    }
  }
  return false;
}

console.log('mi search:' + search('banana',dictionary));