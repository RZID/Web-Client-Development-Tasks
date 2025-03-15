const rectangle = (rl) => {
  return rl.question("Length: ", (l) => {
    rl.question("Width: ", (w) => {
      console.log("\n[Result]");
      console.log("Area: ".concat(parseFloat(l) * parseFloat(w)));
      return rl.close();
    });
  });
};
exports.default = rectangle;
