const removeSubstring = (rl) => {
  rl.question("Enter the main string: ", (mainStr) => {
    rl.question("Enter the search string: ", (searchStr) => {
      const result = mainStr.replace(searchStr, "");
      console.log("\n[Result]");
      console.log('Updated string: "'.concat(result, '"'));
      rl.close();
    });
  });
};

exports.default = removeSubstring;
