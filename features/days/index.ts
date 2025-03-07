import { Interface } from "readline";

const days = (rl: Interface) =>
  rl.question("Enter first date (YYYY-MM-DD): ", (date1) => {
    rl.question("Enter second date (YYYY-MM-DD): ", (date2) => {
      const d1 = new Date(date1);
      const d2 = new Date(date2);
      const differenceInTime = Math.abs(d2.getTime() - d1.getTime());
      const differenceInDays = differenceInTime / (1000 * 60 * 60 * 24);

      console.log("\n[Result]");
      console.log(`Date difference: ${differenceInDays} days`);
      rl.close();
    });
  });

export default days;
