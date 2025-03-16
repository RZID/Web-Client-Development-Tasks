import { Interface } from "readline";

const convertTemperature = (rl: Interface) => {
  rl.question("Enter temperature in Fahrenheit: ", (f) => {
    const celsius = ((parseFloat(f) - 32) * 5) / 9;
    console.log("\n[Result]");
    console.log(`Celsius: ${celsius.toFixed(2)}`);
    rl.close();
  });
};

export default convertTemperature;
