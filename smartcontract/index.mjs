import { loadStdlib, ask } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";

if (
  process.argv.length < 3 ||
  ["Deployer", "Fund"].includes(process.argv[2]) == false
) {
  console.log("Usage: reach run index [Deployer|Fund]");
  process.exit(0);
}
const role = process.argv[2];

const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(1000);

const Fund = async (info, name = "Unknown") => {
  const acc = await stdlib.newTestAccount(startingBalance);
  const ctc = acc.contract(backend, info);

  const raiseFund = async (name, description, amount) => {
    try {
      const statement = await ctc.apis.raiser.raiseFund(
        name,
        description,
        amount
      );
      console.log(statement);
    } catch (error) {
      console.error(error);
    }
  };
  const addToFund = async (address, amount) => {
    try {
      const statement = await ctc.apis.raiser.addToFund(address, amount);
      console.log(statement);
    } catch (error) {
      console.error(error);
    }
  };
  const fetch = async (addr, show) => {
    try {
      const statement = await ctc.apis.raiser.fetch(addr);
      show && console.log({ statement });
      return statement;
    } catch (error) {
      console.error(error);
    }
  };

  const getBalance = async (acc = acc) => {
    return await stdlib.balanceOf(acc);
  };

  const displayBalance = async () => {
    console.log(`${name}'s balance: ${fmt(await getBalance())}`);
  };
  const getLog = (f) => async () => {
    const { when, what } = await ctc.e.notify.send.next();
    const lastTime = await ctc.e.notify.send.lastTime();
    console.log("what", what);
    return what;
  };

  return {
    raiseFund,
    addToFund,
    fetch,
    getBalance,
    displayBalance,
    getLog,
    acc,
  };
};

const [accAlice, accBob] = await stdlib.newTestAccounts(2, startingBalance);

console.log("Hello, Deployer and Fund!");

console.log("Launching...");

console.log("Starting backends...");

if (role == "Deployer") {
  try {
    const ctc = await accAlice.contract(backend);
    console.log("You the deployer");
    await backend.Deployer(ctc, {
      notify: async () => {
        console.log(`Contract info: ${JSON.stringify(await ctc.getInfo())}`);
      },
    });
  } catch (error) {
    console.log({ error });
  }
}
if (role == "Fund") {
  try {
    const info = await ask.ask("Paste contract info:", (s) => JSON.parse(s));
    const newUSer = await Fund(info);
    const user2 = await Fund(info);
    const user3 = await Fund(info);

    await newUSer.raiseFund(
      "prince",
      "The greatest project in the world",
      stdlib.parseCurrency(1000)
    );
    console.log(stdlib.formatAddress(newUSer.acc));
    await user2.addToFund(
      stdlib.formatAddress(newUSer.acc),
      stdlib.parseCurrency(2)
    );
    await user2.addToFund(
      stdlib.formatAddress(newUSer.acc),
      stdlib.parseCurrency(2)
    );
    await user3.addToFund(
      stdlib.formatAddress(newUSer.acc),
      stdlib.parseCurrency(10)
    );
    "nulFUUSX3IKS45YPKGDHVQFXQX24Q6ONOX2IQ4L5GIK7RUITC5RMC6FLQ3GAMl";
    await stdlib.wait(1);
    const { amount_raised } = await newUSer.fetch([
      "Some",
      ,
      JSON.stringify(
        "EK5BWWRXMLOMWYYBXBGEYYGAPPDJDEKSETQ4FR6HUOZTYMQCR3U2MQX2IU"
      ),
    ]);
    console.log({
      amount_raised: parseInt(stdlib.formatCurrency(amount_raised)),
    });
    // await newUSer.

    // Create a map to call all
  } catch (error) {
    console.log(error);
  }
}
ask.done();
console.log("Goodbye, Deployer and Participants!");
