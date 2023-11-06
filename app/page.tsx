import Image from "next/image";

export default function Home() {
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
    </main>
  );
}
