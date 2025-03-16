// Deps
const readline = require("readline"); // Using readline for interactive prompts

// Features
const temperature_1 = require("./features/temperature");
const length_1 = require("./features/length");
const number_1 = require("./features/number");
const string_1 = require("./features/string");
const palindrome_1 = require("./features/palindrome");

// Constants
const data_json_1 = require("../../constants/data.json");

// Initialize readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// NOTE: Main menu
const showMenu = () => {
  console.log("\nWeb Client Development - Task #2");
  console.log("Name: ".concat(data_json_1.name));
  console.log("\n[Please select one of these options]");
  console.log("1. Convert Fahrenheit to Celsius");
  console.log("2. Convert Length (cm/km)");
  console.log("3. Check if a number is even");
  console.log("4. Remove first occurrence of a substring");
  console.log("5. Check if a string is a palindrome");
  console.log("0. Exit");
};

const quitProgram = () => {
  console.log("Exiting...");
  rl.close();
};

// NOTE: Main program
const start = () => {
  showMenu();
  rl.question("\nEnter your choice: ", (choice) => {
    switch (choice) {
      case "0": // Quit program
        quitProgram();
        break;
      case "1": // Convert Fahrenheit to Celsius
        (0, temperature_1.default)(rl);
        break;
      case "2": // Convert Length (cm/km)
        (0, length_1.default)(rl);
        break;
      case "3": // Check if a number is even
        (0, number_1.default)(rl);
        break;
      case "4": // Remove first occurrence of a substring
        (0, string_1.default)(rl);
        break;
      case "5": // Check if a string is a palindrome
        (0, palindrome_1.default)(rl);
        break;
      default: // Invalid choice
        console.log("Invalid choice, try again.");
        start();
    }
  });
};
// NOTE: Run program
start();
