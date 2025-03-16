const readline = require("readline");

// Initialize readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display main menu
const showMenu = () => {
  console.log("\n📌 Web Client Development Tasks");
  console.log("\n[Please select a task]");
  console.log("1. Task 1 - Mathematical Operations");
  console.log("2. Task 2 - String & Number Operations");
  console.log("0. Exit");
};

// Handle user selection
const startProgram = () => {
  showMenu();
  rl.question("\nEnter your choice: ", (choice) => {
    switch (choice) {
      case "1":
        console.log("\nStarting Task 1...");
        rl.close();
        require("./task_1/javascript");
        break;
      case "2":
        console.log("\nStarting Task 2...");
        rl.close();
        require("./task_2/javascript");
        break;
      case "0":
        console.log("Exiting...");
        rl.close();
        break;
      default:
        console.log("Invalid choice, try again.");
        startProgram();
    }
  });
};

// Run the program
startProgram();
