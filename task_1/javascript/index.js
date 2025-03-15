"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Deps
const readline = require("readline"); // NOTE: I'll using readline to make the prompt more interactive
// Features
const circle_1 = require("../javascript/features/circle");
const rectangle_1 = require("../javascript/features/rectangle");
const triangle_1 = require("../javascript/features/triangle");
const days_1 = require("../javascript/features/days");
const name_1 = require("../javascript/features/name");
// Constants
const data_json_1 = require("../../constants/data.json");
// Initialize readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// NOTE: Main menu
const showMenu = () => {
  console.log("\nWeb Client Development - Task #1");
  console.log("Name: ".concat(data_json_1.name));
  console.log("\n[Please select one of these options]");
  console.log("1. Calculate area of a rectangle");
  console.log("2. Calculate properties of a circle");
  console.log("3. Find missing triangle angle");
  console.log("4. Find difference between two dates");
  console.log("5. Get initials from name");
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
      case "1": // Find area of a rectangle
        (0, rectangle_1.default)(rl);
        break;
      case "2": // Find diameter, circumference and area of a circle
        (0, circle_1.default)(rl);
        break;
      case "3": // Find angles of triangle if two angles are given
        (0, triangle_1.default)(rl);
        break;
      case "4": // Get difference between dates in days
        (0, days_1.default)(rl);
        break;
      case "5": // Print your name initial in uppercase
        (0, name_1.default)(rl);
        break;
      default: // None of those options are selected
        console.log("Invalid choice, try again.");
        start();
    }
  });
};
// NOTE: Run program
start();
