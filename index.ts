// Deps
import * as readline from "readline"; // NOTE: I'll using readline to make the prompt more interactive

// Features
import circle from "./features/circle";
import rectangle from "./features/rectangle";
import triangle from "./features/triangle";
import days from "./features/days";

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
  },
  notImplemented = (): void => {
    console.log("Oops, this feature is not implemented yet.");
    quitProgram();
  };

// NOTE: Main program
const start = (): void => {
  showMenu();
  rl.question("Enter your choice: ", (choice) => {
    switch (choice) {
      case "0": // Quit program
        quitProgram();
        break;

      // NOTE: Find area of a rectangle
      case "1":
        rectangle(rl);
        break;

      // NOTE: Find diameter, circumference and area of a circle
      case "2":
        circle(rl);
        break;

      // NOTE: Find angles of triangle if two angles are given
      case "3":
        triangle(rl);
        break;

      // NOTE: Get difference between dates in days
      case "4":
        days(rl);
        break;

      case "5":
        // TODO: Print your name initial in uppercase
        notImplemented();
        break;

      // NOTE: None of those options are selected
      default:
        console.log("Invalid choice, try again.");
        start(); // Restart
    }
  });
};

// NOTE: Run program
start();
