const convertTemperature = (rl) => {
  rl.question("Enter temperature in Fahrenheit: ", (f) => {
    const celsius = ((parseFloat(f) - 32) * 5) / 9;
    console.log("\n[Result]");
    console.log("Celsius: ".concat(celsius.toFixed(2)));
    rl.close();
  });
};

exports.default = convertTemperature;
