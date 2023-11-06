"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineFile } from "react-icons/ai";
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
    <main className="flex flex-col items-center justify-center m-12">
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

      <div className="flex flex-col items-center justify-center mt-16">
        <Button onClick={copyToClipboard} className="w-[260px]">
          {copyState !== "Copied!" && (
            <HiOutlineMail className="mr-2 h-4 w-4" />
          )}
          {copyState}
        </Button>

        <a href="../public/CV.pdf" download>
          <Button className="mt-2 w-[260px]">
            <AiOutlineFile className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </a>
      </div>
    </main>
  );
}
