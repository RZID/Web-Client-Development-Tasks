import { Interface } from "readline";

const checkPalindrome = (rl: Interface) => {
  rl.question("Enter a string: ", (str) => {
    const isPal = str === str.split("").reverse().join("");
    console.log("\n[Result]");
    console.log(`Palindrome: ${isPal}`);
    rl.close();
  });
};

export default checkPalindrome;
