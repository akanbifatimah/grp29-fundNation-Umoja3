import React, { useEffect, useState } from "react";
import styles from "../styles/fund.module.scss";
import Layout from "../Components/Layout";
import { useGlobalContext } from "../context";

type dataType = {
  raise_amount: number;
  project_name: string;
  project_desc: string;
  amount_raised: number;
  owner: string;
}[];

const Fund = ({ posts }: { posts: any }) => {
  const { isConnected,connectWallet, Api, displayMessage, createAsyncTimeout } =
    useGlobalContext();
  const [amount, setamount] = useState(0);
  const [data, setData] = useState<dataType>([
    {
      raise_amount: 0,
      project_name: "",
      project_desc: "",
      amount_raised: 0,
      owner: "",
    },
  ]);
  const [event, setEvent] = useState("" as any);
  useEffect(() => {
    console.log(amount);
  }, [amount]);

  useEffect(() => {
    (async () => {
      if (isConnected) {
        try {
          console.log("Tryig");
          await Api.ctc.e.notify.send.monitor((e: any) => {
            setEvent(e);
            setData((prev) => {
              const newmap = prev?.map((item) => {
                const { owner } = item;
                console.log({ owner });
                // console.log({index, p:e.what[0].index})
                // @ts-ignore
                if (!(owner === (e.what[0].owner))) {
                return item;
                }
              });
              return [e.what[0], ...newmap];
            });
            console.log(e);
          });
        } catch (error) {
          setEvent("");
          console.log(error);
        }
      }
    })();
  }, [event]);

  useEffect(()=>{
    (async()=>{
      if(!isConnected){
        await connectWallet()
        setEvent("some")
      } 
    })();
  },[])

  useEffect(() => {
    console.log(data);
  }, data);

  const handleClick = (owner: string) => {
    displayMessage(true, <Input address={owner} />);
  };
  const handleSubmit = async (address: string) => {
    try {
      displayMessage(false);
      await createAsyncTimeout(1);
      displayMessage(true, "Attempting to Donate");
      await Api.addToFund(address, amount ?? 1);
      displayMessage(false);
      await createAsyncTimeout(1);
      displayMessage(true, "Successfully donated");
    } catch (error) {
      displayMessage(true, "An error Occured trying to donate");
    }
  };
  const Input = ({ address }: { address: string }) => {
    return (
      <div>
        <input
          placeholder="Enter Amount"
          type={"number"}
          onChange={(e: any) => setamount(e.target.value)}
        />
        <input
          className={styles.btn}
          type={"button"}
          value="Donate"
          onClick={() => handleSubmit(address)}
        />
      </div>
    );
  };
  return (
    <Layout className={`${styles.fund} hero-container`}>
      <div>
        {data?.map(
          (
            { amount_raised, owner, project_desc, project_name, raise_amount },
            index
          ) => {
            if (index == data.length -1) return;
            {
              isConnected ? (
                <>
                  <div
                    key={index}
                    style={{ textAlign: "center", width: "100vw" }}
                  >
                    {!isConnected &&
                      "Connect Wallet to see Available projects to fund"}
                  </div>
                </>
              ) : null;
            }

            return (
              <div className={styles.card} key={index}>
                <h2>{project_name.replace(/\0/g, "")}</h2>
                <p>
                  {" "}
                  <span>Creator: </span>
                  {owner.replace(/\0/g, "").slice(0, 15)}....
                  {owner
                    .replace(/\0/g, "")
                    .slice(
                      owner.replace(/\0/g, "").length - 15,
                      owner.replace(/\0/g, "").length - 1
                    )}
                </p>
                <span>
                  <div>About the project: </div>
                  {project_desc.replace(/\0/g, "")}
                </span>
                <span>
                  <div>Amount seeking</div>
                  {/* @ts-ignore */}
                  {parseInt(raise_amount)}
                </span>
                <span>
                  <div>Amount raised</div>
                  {/* @ts-ignore */}
                  {parseInt(amount_raised)}
                </span>

                <input
                  className={styles.btn}
                  type="button"
                  value="submit"
                  onClick={() => handleClick(owner)}
                />
              </div>
            );
          }
        )}
      </div>
    </Layout>
  );
};

export default Fund;
