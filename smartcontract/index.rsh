"reach 0.1";
// "use strict"

// Users can doante to a fund
// users can create fund by saying
//    - How much you need
//    - Project name
//    - Project Description
const TOTAL = 1;
const DEADLINE = 2500;
const name = Bytes(12);
const description = Bytes(280);
const amount = UInt;
const DEFAULT_FUND = Object({
  raise_amount: UInt,
  amount_raised: UInt,
  project_name: name,
  project_desc: description,
  owner: Address,
});
export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true, connectors: [ALGO] });
  const A = Participant("Deployer", { notify: Fun([], Null) });
  // const randomFunc = API("randomFunc", {
  //   informTimeout: Fun([], Bool),
  // });
  const Fund = API("raiser", {
    raiseFund: Fun([name, description, amount], Bool),
    addToFund: Fun([Address, amount], Null),
    fetch: Fun([Maybe(Address)], DEFAULT_FUND),
  });

  const E = Events("notify", {
    send: [DEFAULT_FUND],
  });

  init();

  A.publish();
  commit();
  A.interact.notify();
  A.publish();
  const fundMap = new Map(DEFAULT_FUND);
  const start = {
    raise_amount: 0,
    amount_raised: 0,
    project_name: name.pad(""),
    project_desc: description.pad(""),
    owner: this,
  };
  const startArr = Array.replicate(TOTAL, start);

  const [bal, noOfP] = parallelReduce([0, 0])
    .invariant(balance() == bal)
    .while(true)
    .define(() => {})
    .api(
      Fund.raiseFund,
      (_, s, a) => {
        check(
          isNone(fundMap[this]),
          "This user already has a fund pending, can only create one"
        );
      },
      (_, a, b) => 0,
      (fund_name, desc, amt, k) => {
        const new_fund = {
          raise_amount: amt,
          project_name: fund_name,
          project_desc: desc,
          amount_raised: 0,
          owner: this,
        };
        fundMap[this] = new_fund;
        E.send(new_fund);
        k(true);

        return [bal, noOfP + 1];
      }
    )
    .api(
      Fund.addToFund,
      (_, a) => {
        check(true, "");
      },
      (_, a) => a,
      (addr, amt, k) => {
        const specific_fund = fromSome(fundMap[addr], start);
        const { amount_raised } = specific_fund;
        const newFunds = {
          ...specific_fund,
          amount_raised: amount_raised + amt,
        };
        fundMap[addr] = newFunds;

        k(null);
        return [bal + amt, noOfP];
      }
    )
    .api(
      Fund.fetch,
      (_) => {
        check(true, "");
      },
      (_) => 0,
      (addr, k) => {
        const specific_fund = isSome(addr)
          ? fromSome(fundMap[this], start)
          : fromSome(fundMap[fromSome(addr, A)], start);

        k(specific_fund);
        return [bal, noOfP];
      }
    )

    .timeout(false);

  transfer(balance()).to(A);
  commit();

  exit();
});
