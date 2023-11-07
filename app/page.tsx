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

        <div className="flex flex-col items-center justify-center mt-16">
          <Button onClick={copyToClipboard} className="w-[260px]">
            {copyState !== "Copied!" && (
              <HiOutlineMail className="mr-2 h-4 w-4" />
            )}
            {copyState}
          </Button>

          <DownloadButton />
        </div>
      </div>
    </main>
  );
}
