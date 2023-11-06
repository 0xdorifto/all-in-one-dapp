import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiCameraLensFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 inset-x-0 p-4">
      <p className="flex justify-center mb-2">Made in 🇵🇹</p>

      {/* change color on hover */}
      <div className="flex justify-center">
        <a
          className="mx-2"
          href="https://www.linkedin.com/in/gastaosf/"
          target="_blank"
        >
          <FaLinkedin size="2em" />
        </a>
        <a className="mx-2" href="https://github.com/0xdorifto" target="_blank">
          <FaGithub size="2em" />
        </a>
        <a
          className="mx-2"
          href="https://twitter.com/0xdorifto"
          target="_blank"
        >
          <FaXTwitter size="2em" />
        </a>
        <a className="mx-2" href="https://hey.xyz/u/0xdorifto" target="_blank">
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
  );
}
