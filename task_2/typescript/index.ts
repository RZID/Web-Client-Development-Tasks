// Deps
import * as readline from "readline"; // Using readline for interactive prompts

// Features
import temperature from "./features/temperature";
import length from "./features/length";
import number from "./features/number";
import string from "./features/string";
import palindrome from "./features/palindrome";

// Constants
import data from "../../constants/data.json";

// Initialize readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// NOTE: Main menu
const showMenu = (): void => {
  console.log("\nWeb Client Development - Task #2");
  console.log(`Name: ${data.name}`);
  console.log("\n[Please select one of these options]");
  console.log("1. Convert Fahrenheit to Celsius");
  console.log("2. Convert Length (cm/km)");
  console.log("3. Check if a number is even");
  console.log("4. Remove first occurrence of a substring");
  console.log("5. Check if a string is a palindrome");
  console.log("0. Exit");
};

const quitProgram = (): void => {
  console.log("Exiting...");
  rl.close();
};

// NOTE: Main program
const start = (): void => {
  showMenu();
  rl.question("\nEnter your choice: ", (choice) => {
    switch (choice) {
      case "0": // Quit program
        quitProgram();
        break;

      case "1": // Convert Fahrenheit to Celsius
        temperature(rl);
        break;

      case "2": // Convert Length (cm/km)
        length(rl);
        break;

      case "3": // Check if a number is even
        number(rl);
        break;

      case "4": // Remove first occurrence of a substring
        string(rl);
        break;

      case "5": // Check if a string is a palindrome
        palindrome(rl);
        break;

      default: // Invalid choice
        console.log("Invalid choice, try again.");
        start();
    }
  });
};

// NOTE: Run program
start();
