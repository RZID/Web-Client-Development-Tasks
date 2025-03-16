const checkPalindrome = (rl) => {
  rl.question("Enter a string: ", (str) => {
    const isPal = str === str.split("").reverse().join("");
    console.log("\n[Result]");
    console.log("Palindrome: ".concat(isPal));
    rl.close();
  });
};

exports.default = checkPalindrome;
