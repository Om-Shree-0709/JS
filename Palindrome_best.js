/*
1. Using String Reversal (Simple & Readable)
🟢 Pros: Simple, easy to understand.
🔴 Cons: Uses extra space for string conversion.
*/
const isPalindrome = (num) => {
  const str = num.toString();
  return str === [...str].reverse().join("");
};

console.log(isPalindrome(1234321));

/*2. Math-Based Approach (Optimized, No Extra Space)
🟢 Pros:
✅ No extra space (O(1) space complexity).
✅ More efficient than string-based methods.
🔴 Cons:
❌ More complex logic than the string method.
*/

const palindrome = (num) => {
  if (num < 0 || (num % 10 === 0 && num !== 0)) return false;

  let reversed = 0,
    original = num;
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return original === reversed;
};

console.log(palindrome(1213));
