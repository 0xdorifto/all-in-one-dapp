import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiCameraLensFill } from "react-icons/ri";

const Home: NextPage = () => {
  return (
    <div className="px-16">
      <Head>
        <title>0xdorifto</title>
        <meta content="Created by 0xdorifto" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <header className="p-8 flex flex-row-reverse">
        <ConnectButton />
      </header>

      <main>
        <div className="flex justify-around">
          {/* <Image alt="bridge" src="/background.jpg" fill /> */}

          <div className="place-content-center">
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
        </div>

        <div className="mt-16">
          <h3>About myself:</h3>
          <p>I&apos;m a 24 year old Software Engineer from Lisbon, Portugal</p>
          <p>
            In my second year of university, I stumbled across bitcoin which
            made me interested so interested in blockchain I changed my major to
            computer science so I could eventually work with this technology.
          </p>
          <p>
            I&apos;ve been working full time in web3 for more than a year, in
            which I participated in some hackathons, and doing front-end
            development for over 2 years.
          </p>
          <p>
            Right now, I&apos;m particularly interested in NFTs and their use
            cases, such as gatekeeping, digital identification, tokenization of
            real world assets, etc...
          </p>
        </div>
      </main>

      <footer className="border-t absolute bottom-0 inset-x-0 p-4">
        <p className="flex justify-center mb-2">Made with 🔥 in 🇵🇹</p>

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
