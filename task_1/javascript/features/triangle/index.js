const triangle = (rl) => {
  return rl.question("Enter first angle (a): ", (angleA) => {
    rl.question("Enter second angle (b): ", (angleB) => {
      const a = parseFloat(angleA),
        b = parseFloat(angleB),
        missingAngle = 180 - (a + b);
      console.log("\n[Result]");
      console.log("Third angle: ".concat(missingAngle));
      return rl.close();
    });
  });
};
exports.default = triangle;
