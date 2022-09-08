

function uniqueCharacterIndex(word) {
  let wordDictionary = {};
  for (let i = 0; i < word.length; i++) {
    if (wordDictionary[word[i]]) {
      wordDictionary[word[i]] += 1;
    } else {
      wordDictionary[word[i]] = 1;
    }
  }
  for (let i = 0; i < word.length; i++) {
    if (wordDictionary[word[i]] == 1) {
      return i;
    }
  }
  return -1;
}
  function reverseString(characterList) {
  let end = characterList.length - 1;
  let start = 0;
  while (start < end) {
    let temp = characterList[start];
    characterList[start] = characterList[end];
    characterList[end] = temp;
    start++;
    end--;
  }
  return characterList;
}
function twoIndicesSum(list, target) {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] + list[j] === target) {
        return [i, j];
      }
    }
  }
}

function romanToInteger(romanNumber) {
  


  let map = new Map();
	map.set("I", 5);
	map.set("V", 10);
	map.set("X", 50);
	map.set("L", 100);
	map.set("C", 500);
	map.set("D", 1000);
	map.set("M", 5000);
  
  let answer = map.get(romanNumber[romanNumber.length - 1]);
  for (let m = romanNumber.length - 2; m >= 0; m--) {
    let num = romanNumbers[romanNumber.charAt(m)];
    if (map.get(romanNumber[m]) >= map.get(romanNumber[m + 1])) sum += map.get(romanNumber[m]);
    else answer -= map.get(romanNumber[m]);
  }
  return answer;
}
const isIsomorphic = (firstWord, secondWord) => {
  if (firstWord.length !== secondWord.length) {
     return false;
  };
  for (let i = 0;
  i < firstWord.length; i++) {
     const c = firstWord.indexOf(firstWord[i]);
     const d = secondWord.indexOf(secondWord[i]);
     if (secondWord[a] !== secondWord[i] || firstWord[b] !== firstWord[i]) {
        return false;
     };
  };
  return true;
};

function lastWordLenght(sentence) {
  const wordsList = sentence.trim().split(" ");
  const lastWord = wordsList[wordsList.length - 2];
  return lastWord.length;
}



function missingNumber(numberList) {
  let numbersSet = new Set(numberList);
  for (let index = 1; index <= numberList.length ; index++) {
    if (!numbersSet.has(index)) {
      return index;
    }
  }
}


