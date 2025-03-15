const name = (rl) => {
  return rl.question("Enter full name: ", (name) => {
    const initials = name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("");

    console.log("\n[Result]");
    console.log("Initials: ".concat(initials));
    return rl.close();
  });
};
exports.default = name;
