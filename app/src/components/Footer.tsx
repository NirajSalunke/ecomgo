import { Link, PersonStandingIcon } from "lucide-react";
import { Spotlight } from "./ui/Spotlight";
import { Vortex } from "./ui/vortex";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { LinkPreview } from "./ui/link-preview";
// import { SparklesCore } from "./ui/sparkles";

const Footer = () => {
  return (
    <>
      <footer className="w-screen h-[20vh] bg-black text-white md:hidden">
        <div className="flex px-5 gap-1 items-center text-7xl  Head ">
          <PersonStandingIcon className="scale-[2]" />
          Goodsly
        </div>
        <LinkPreview
          className="text-lg px-6 Head text-white"
          url="https://nirajsalunke.netlify.app/"
        >
          By Niraj Salunke
        </LinkPreview>
      </footer>
      <div className="h-[40rem] md:flex items-center hidden flex-col bg-black justify-center">
        <TextHoverEffect automatic text="GOODSLY" />
        <div className="text-3xl pt-24 p-5 Head text-white">
          <LinkPreview
            className="text-white flex items-center gap-5"
            url="https://nirajsalunke.netlify.app/"
          >
            Developed by Niraj Salunke
          </LinkPreview>
        </div>
        {/* <div className="text-xl p-5  Head text-white"></div> */}
      </div>
    </>
  );
};

export default Footer;
