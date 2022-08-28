import React from "react";
// @ts-ignore
import logo from "../image/kickstarter logo.png";
import Image from "next/image";
import { useGlobalContext } from "../../context";
import Link from "next/link";
import Nav from "../../Components/Nav";
function Hero() {
  const { isConnected, connectWallet, DisconnectWallet } = useGlobalContext();
  // const

  return (
    <section className="hero-container">
     {/* <Nav  /> */}
      <div className="hero">
        <h2>Raise and Invest</h2>
        <p>
          Unlock your Brilliance with our hands-on{" "}
          <Link className="link" href="/">
            beginner
          </Link>{" "}
          and{" "}
          <Link className="link" href="https://internship.zuri.team">
            expert training
          </Link>
          . Team has been immensely successful in creating a global network of a
          highly adept intelligent workforce that can help your company achieve
          their mission-critical{" "}
          <Link className="link" href="/">
            projects and goals
          </Link>
        </p>
        <div className="btn-div">
          <Link href="/raise">
            <button className=" my-btn btn-red">Raise Funds</button>
          </Link>
          <br className="d-block d-md-none"></br>
          <Link href="/fund">
            <button className=" my-btn btn-red-outline">Fund A Project</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
