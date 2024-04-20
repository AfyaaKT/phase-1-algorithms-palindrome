function isPalindrome(word) {
  const lettersArray = word.toLowerCase().split('')
  
  console.log('splitting sting into array=> ',lettersArray)
  const reversedArray = lettersArray.reverse().join('')
  console.log('reversed Array => ', reversedArray)
  console.log(word)
  if(word === reversedArray){
    return true;
  }else{
    return false;
  }
}
console.log(isPalindrome('level'))
/* 
  Add your pseudocode here
1. reverse the word 
2.compare the word with its reverse 
3. if thay are equal return true
4. if not reverse false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));
}

module.exports = isPalindrome;
