import { Interface } from "readline";

const removeSubstring = (rl: Interface) => {
  rl.question("Enter the main string: ", (mainStr) => {
    rl.question("Enter the search string: ", (searchStr) => {
      const result = mainStr.replace(searchStr, "");
      console.log("\n[Result]");
      console.log(`Updated string: "${result}"`);
      rl.close();
    });
  });
};

export default removeSubstring;
