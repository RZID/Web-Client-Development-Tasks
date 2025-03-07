import { Interface } from "readline";

const name = (rl: Interface) =>
  rl.question("Enter full name: ", (name) => {
    const initials = name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("");

    console.log("\n[Result]");
    console.log(`Initials: ${initials}`);
    return rl.close();
  });

export default name;
