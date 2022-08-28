import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useGlobalContext } from "../context";

const Nav = () => {
  const { isConnected, connectWallet, DisconnectWallet } = useGlobalContext();
  async function handleClick() {
    try {
      !isConnected ? await connectWallet() : DisconnectWallet();
    } catch (error) {
      console.log(error);
      alert("An error occured while trying to perform action");
    }
  }
  return (
    <div className="center-image">
      <Link href="/">
        <div>
          <Image
            src={"/kickstarter logo.png"}
            alt="logoimage"
            width={100}
            height={100}
          />
        </div>
      </Link>

      <button className=" my-btn btn-red head" onClick={handleClick}>
        {!isConnected ? " Connect Wallet" : "DisconnectWallet"}
      </button>
    </div>
  );
};

export default Nav;
