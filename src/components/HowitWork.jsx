import img1 from "/how-1.jpg";
import img2 from "/how-2.jpg";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
function HowitWork() {
  return (
    <section className={"pb-[96px] "}>
      <div className={"container"}>
        <h2 className={"text-3xl text-[#0f172a] text-center  font-semibold"}>
          How it Work
        </h2>
      </div>
      <div className={"container grid grid-cols-2 gap-x-16 gap-y-24"}>
        {/*    step-1*/}
        <div>
          <p className={"text-[86px] font-semibold text-[#ddd] mb-6"}>01</p>
          <h3
            className={"text-3xl leading-3 mb-8 text-[#1e293b] font-semibold"}
          >
            speech to text (STT)
          </h3>
          <p className={"text-xl leading-8 text-[#3f3f46] mb-6"}>
            Effortlessly transcribe spoken words into written text, even in
            Amharic. Our speech-to-text conversion technology accurately
            captures verbal communication in real-time, supporting multiple
            languages including Amharic. Experience seamless integration and
            enhance productivity with our intuitive solution.
          </p>
          <Button className={""}>
            Test Speech to Text
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        {/*    img*/}
        <div className={"flex  items-center justify-center"}>
          <img src={img1} alt={"img-1"} />
        </div>
        {/*    img*/}
        <div className={"flex  items-center justify-center"}>
          <img src={img2} alt={"img-1"} />
        </div>
        <div>
          <p className={"text-[86px] font-semibold text-[#ddd] mb-3"}>02</p>
          <h3
            className={"text-3xl leading-3 mb-8 text-[#1e293b] font-semibold"}
          >
            Text to Speech (TSS)
          </h3>
          <p className={"text-xl leading-8 text-[#3f3f46]  mb-3"}>
            Transform written text into lifelike speech effortlessly. Our
            text-to-speech conversion technology seamlessly synthesizes text
            into natural-sounding speech in real-time. While we support various
            languages, please note that Amharic is currently not supported.
            Experience fluid communication and accessibility with our intuitive
            solution
          </p>
          <Button className={""}>
            Test Text to Speech
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HowitWork;
