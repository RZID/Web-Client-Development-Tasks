import { Interface } from "readline";

const circle = (rl: Interface) =>
  rl.question("Enter radius: ", (radius) => {
    const r = parseFloat(radius),
      diameter = 2 * r,
      circumference = 2 * Math.PI * r,
      area = Math.floor(Math.PI * Math.pow(r, 2) * 1000) / 1000;

    console.log("\n[Result]");
    console.log(`Diameter: ${diameter}`);
    console.log(`Circumference: ${circumference.toFixed(4)}`);
    console.log(`Area: ${area.toFixed(3)}`);

    return rl.close();
  });

export default circle;
