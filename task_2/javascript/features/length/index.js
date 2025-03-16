const convertLength = (rl) => {
  rl.question("Enter value: ", (value) => {
    rl.question('Enter unit ("cm" or "km"): ', (unit) => {
      const result =
        unit === "cm"
          ? "".concat(parseFloat(value) / 100000, " km")
          : "".concat(parseFloat(value) * 100000, " cm");
      console.log("\n[Result]");
      console.log("Converted length: ".concat(result));
      rl.close();
    });
  });
};

exports.default = convertLength;
