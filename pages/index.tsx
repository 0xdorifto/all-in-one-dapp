import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>All In One Dapp</title>
        <meta content="Created by 0xdorifto" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <header>
        <ConnectButton />
      </header>

      <main>
        <div>
          <h1>0xdorifto</h1>
          <h2>Web3/Blockchain Developer</h2>
        </div>

        <Image src="/takumi.jpg" width={250} height={250} alt="Takumi" />
      </main>

      <footer>
        <p>
          <a href="https://www.linkedin.com/in/gastaosf/" target="_blank">
            linkedIn
          </a>
        </p>
        <p>
          <a href="https://github.com/0xdorifto" target="_blank">
            github
          </a>
        </p>
        <p>
          <a href="https://twitter.com/0xdorifto" target="_blank">
            X
          </a>
        </p>
        <p>
          <a href="https://www.lensfrens.xyz/0xdorifto.lens" target="_blank">
            lens
          </a>
        </p>
        <p>
          <a
            href="https://discord.com/users/373964924134883339"
            target="_blank"
          >
            discord
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
