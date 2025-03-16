const checkEven = (rl) => {
  rl.question("Enter a number: ", (n) => {
    const result = parseInt(n) % 2 === 0;
    console.log("\n[Result]");
    console.log("isEven: ".concat(result));
    rl.close();
  });
};

exports.default = checkEven;
