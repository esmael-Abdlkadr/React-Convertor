import img from "/voice-assistant.jpg";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
function Hero() {
  return (
    <section className={"bg-[#fff] pt-[48px] pb-[96px]"}>
      <div
        className={
          "max-w-[1300px]  mx-0 my-auto py-0 px-8 grid grid-cols-2 gap-24 items-center "
        }
      >
        {/*text*/}
        <div>
          <h1
            className={
              "font-bold text-[#333]  tracking[-0.5px]  text-5xl    mb-8"
            }
          >
            Explore Speech-to-Text and Text-to-Speech Easily with{" "}
            <span className={"text-[#0284c7]"}> React Converter</span>
          </h1>
          <p className={"text-xl mb-12 text-[#444] leading-9"}>
            Seamlessly convert speech to text and text to speech with our
            intuitive application. Communicate effortlessly, across boundaries
            and barriers.
          </p>
          <Button className={""}>
            Start Conversion
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        {/*  img*/}
        <div>
          <img src={img} alt="voice assistant" className={"w-full"} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
