import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>All In One Dapp</title>
        <meta content="Created by 0xdorifto" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <ConnectButton />

        <h1 className={styles.title}>Welcome to All in One Dapp!</h1>

        <h1 className={styles.title}>Chain:</h1>

        <h1 className={styles.title}>Wallet:</h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/0xdorifto"
          rel="noopener noreferrer"
          target="_blank"
        >
          Made by @0xdorifto 🇵🇹
        </a>
      </footer>
    </div>
  );
};

export default Home;
