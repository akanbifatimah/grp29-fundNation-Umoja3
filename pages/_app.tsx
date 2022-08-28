import React from "react";
// import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AppProvider } from "../context";
import Modal from "../Components/modal";
import { useGlobalContext } from "../context";

import "../NAWA/index.css";
import { AnimatePresence } from "framer-motion";
import Nav from "../Components/Nav";
import Footer from "../NAWA/Assets/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  const { setShowModal } = useGlobalContext();
  return (
    <AppProvider>
      <Modal key={"modal"} />
      {/* <AppBar /> */}
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
      {/* <Footer /> */}
      <Footer />
    </AppProvider>
  );
}

export default MyApp;
