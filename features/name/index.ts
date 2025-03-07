import { Interface } from "readline";

const name = (rl: Interface) =>
  rl.question("Enter full name: ", (name) => {
    const initials = name
      .split(" ") // Split by space
      .map((word) => word.charAt(0).toUpperCase()) // Get first letter and capitalize
      .join(""); // Join them together

    console.log("\n[Result]");
    console.log(`Initials: ${initials}`);
    rl.close();
  });

export default name;
