"use client";

import { AiOutlineFile } from "react-icons/ai";
import { Button } from "./ui/button";

export default function DownloadButton() {
  const handleClick = async () => {
    const response = await fetch("/api/file");
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "CV.pdf";
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <Button className="mt-2 w-[260px]" onClick={handleClick}>
      <AiOutlineFile className="mr-2 h-4 w-4" />
      Download CV
    </Button>
  );
}
