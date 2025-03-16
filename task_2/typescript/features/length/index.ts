import { Interface } from "readline";

const convertLength = (rl: Interface) => {
  rl.question("Enter value: ", (value) => {
    rl.question('Enter unit ("cm" or "km"): ', (unit) => {
      let result =
        unit === "cm"
          ? `${parseFloat(value) / 100000} km`
          : `${parseFloat(value) * 100000} cm`;

      console.log("\n[Result]");
      console.log(`Converted length: ${result}`);
      rl.close();
    });
  });
};

export default convertLength;
