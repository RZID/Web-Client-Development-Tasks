import { Interface } from "readline";

const rectangle = (rl: Interface) =>
  rl.question("Length: ", (l) => {
    rl.question("Width: ", (w) => {
      console.log("\n[Result]");
      console.log(`Area: ${parseFloat(l) * parseFloat(w)}`);
      return rl.close();
    });
  });

export default rectangle;
