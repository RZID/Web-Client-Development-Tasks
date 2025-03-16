import { Interface } from "readline";

const checkEven = (rl: Interface) => {
  rl.question("Enter a number: ", (n) => {
    const result = parseInt(n) % 2 === 0;
    console.log("\n[Result]");
    console.log(`isEven: ${result}`);
    rl.close();
  });
};

export default checkEven;
