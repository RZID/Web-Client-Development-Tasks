const circle = (rl) => {
  return rl.question("Enter radius: ", (radius) => {
    const r = parseFloat(radius),
      diameter = 2 * r,
      circumference = 2 * Math.PI * r,
      area = Math.floor(Math.PI * Math.pow(r, 2) * 1000) / 1000;
    console.log("\n[Result]");
    console.log("Diameter: ".concat(diameter));
    console.log("Circumference: ".concat(circumference.toFixed(4)));
    console.log("Area: ".concat(area.toFixed(3)));
    return rl.close();
  });
};
exports.default = circle;
