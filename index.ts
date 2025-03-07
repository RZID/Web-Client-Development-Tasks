// Deps
import * as readline from "readline"; // NOTE: I'll using readline to make the prompt more interactive

// Features
import circle from "./features/circle";
import rectangle from "./features/rectangle";
import triangle from "./features/triangle";
import days from "./features/days";
import name from "./features/name";

// Initialize readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// NOTE: Main menu
const showMenu = (): void => {
  console.log("\nWeb Client Development - Task #1");
  console.log("Name: Ramadhanu");
  console.log("\n[Please select one of these options]");
  console.log("1. Calculate area of a rectangle");
  console.log("2. Calculate properties of a circle");
  console.log("3. Find missing triangle angle");
  console.log("4. Find difference between two dates");
  console.log("5. Get initials from name");
  console.log("0. Exit");
};

const quitProgram = (): void => {
  console.log("Exiting...");
  rl.close();
};

// NOTE: Main program
const start = (): void => {
  showMenu();
  rl.question("Enter your choice: ", (choice) => {
    switch (choice) {
      case "0": // Quit program
        quitProgram();
        break;

      case "1": // Find area of a rectangle
        rectangle(rl);
        break;

      case "2": // Find diameter, circumference and area of a circle
        circle(rl);
        break;

      case "3": // Find angles of triangle if two angles are given
        triangle(rl);
        break;

      case "4": // Get difference between dates in days
        days(rl);
        break;

      case "5": // Print your name initial in uppercase
        name(rl);
        break;

      default: // None of those options are selected
        console.log("Invalid choice, try again.");
        start();
    }
  });
};

// NOTE: Run program
start();
