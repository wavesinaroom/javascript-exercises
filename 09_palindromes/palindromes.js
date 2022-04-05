const palindromes = function (inputString) {

  let isPalindrome = false;

  let palindrome = inputString.split('').reverse('').join('');

   if (inputString===palindrome)
   {
     isPalindrome = true;
   }
   return isPalindrome;
 }


palindromes("racecar");

// Do not edit below this line
module.exports = palindromes;
