import { Interface } from "readline";

const triangle = (rl: Interface) =>
  rl.question("Enter first angle (a): ", (angleA) => {
    rl.question("Enter second angle (b): ", (angleB) => {
      const a = parseFloat(angleA);
      const b = parseFloat(angleB);
      const missingAngle = 180 - (a + b);

      console.log("\n[Result]");
      console.log(`Third angle: ${missingAngle}`);
      rl.close();
    });
  });

export default triangle;
