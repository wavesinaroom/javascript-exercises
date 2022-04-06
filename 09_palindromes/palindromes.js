const palindromes = function (inputString) {

  let isPalindrome = false;
  const regexp = new RegExp (/\w/g);

  let palindrome = [...inputString.matchAll(regexp)].reverse().join('');
  let inputRegex = [...inputString.matchAll(regexp)].join('');

   if (inputRegex.toLowerCase()===palindrome.toLowerCase())
   {
     isPalindrome = true;
   }
   return isPalindrome;
 }


//palindromes("racecar");
palindromes("lkajdgkdASDG!lidjfg");

// Do not edit below this line
module.exports = palindromes;
