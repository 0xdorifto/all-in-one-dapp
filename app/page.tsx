"use client";

import { DownloadButton } from "@/components/download-button";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";

export default function Home() {
  const email = "gastaosousafaria@gmail.com";
  const [copyState, setCopyState] = useState(email);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyState("Copied!");

      setTimeout(() => {
        setCopyState(email);
      }, 3000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main>
      <div className="flex flex-row-reverse m-4">
        <ModeToggle />
      </div>
      <div className="flex flex-col items-center justify-center m-4">
        <Image
          className="rounded-full"
          src="/takumi.jpg"
          width={250}
          height={250}
          alt="Takumi"
        />

        <div className="my-4 text-center">
          <h1>0xdorifto</h1>
          <h2>Web3/Blockchain Developer</h2>
        </div>

        <div className="flex flex-col items-center justify-center mt-4">
          <Button onClick={copyToClipboard} className="w-[260px]">
            {copyState !== "Copied!" && (
              <HiOutlineMail className="mr-2 h-4 w-4" />
            )}
            {copyState}
          </Button>

          <DownloadButton />
        </div>

        {/* <div>
          <h2>Achievements</h2>
          <ul>
            <li>ETH Global Lisbon</li>
            <li>ETH Global Paris</li>
            <li>Solved Ethernaut Challenges</li>
            <li>IST Computer Science Graduate</li>
            <li>English C2 certified</li>
          </ul>
        </div>

        <div>
          <h2>About me</h2>
          <p>
            Hello, I'm 0xdorifto, a Web3/Blockchain developer from Lisbon,
            Portugal. In my second year of university, I stumbled across bitcoin
            which made me so interested in blockchain I changed my major to
            computer science so I could eventually work with this technology.
            I've been working full time in web3 for more than a year, in which I
            participated in some hackathons, and did front-end development for
            over 2 years. Right now, I'm particularly interested in NFTs and
            their use cases, such as gatekeeping, digital identification,
            tokenization of real world assets, etc...
          </p>
        </div> */}
      </div>
    </main>
  );
}
