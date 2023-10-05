import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiCameraLensFill } from "react-icons/ri";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>All In One Dapp</title>
        <meta content="Created by 0xdorifto" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <header className="p-8 flex flex-row-reverse">
        <ConnectButton />
      </header>

      <main className="flex justify-around">
        <div>
          <h1>0xdorifto</h1>
          <h2>Web3/Blockchain Developer</h2>
        </div>

        <Image
          className="rounded-full"
          src="/takumi.jpg"
          width={250}
          height={250}
          alt="Takumi"
        />
      </main>

      <footer>
        <p className="flex justify-center my-2">Made with 🔥 in 🇵🇹</p>

        {/* change color on hover */}
        <div className="flex justify-center">
          <a
            className="mx-2"
            href="https://www.linkedin.com/in/gastaosf/"
            target="_blank"
          >
            <FaLinkedin size="2em" />
          </a>
          <a
            className="mx-2"
            href="https://github.com/0xdorifto"
            target="_blank"
          >
            <FaGithub size="2em" />
          </a>
          <a
            className="mx-2"
            href="https://twitter.com/0xdorifto"
            target="_blank"
          >
            <FaXTwitter size="2em" />
          </a>
          <a
            className="mx-2"
            href="https://www.lensfrens.xyz/0xdorifto.lens"
            target="_blank"
          >
            <RiCameraLensFill size="2em" />
          </a>
          <a
            className="mx-2"
            href="https://discord.com/users/373964924134883339"
            target="_blank"
          >
            <FaDiscord size="2em" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
