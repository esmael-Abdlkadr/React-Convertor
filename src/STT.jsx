import { Mic, MicOff } from "lucide-react";
import { useVoiceToText } from "react-speakup";
import { Link } from "react-router-dom";
function STT() {
  const { startListening, stopListening, transcript } = useVoiceToText({
    continuous: true,
    lang: "am-ET",
  });
  return (
    <section className={"bg-[#fff]"}>
      <div className={"container pb-[48px] "}>
        <h2 className={"text-3xl text-[#0f172a] text-center  font-semibold"}>
          welcome to Amharic speech to text convertor
        </h2>
      </div>
      <div className={"grid grid-cols-2 gap-x-16 gap-y-24"}>
        <div className="flex items-center gap-4">
          <button onClick={startListening} className="flex items-center gap-2">
            <Mic /> <span>Start Record</span>
          </button>
          <button onClick={stopListening} className="flex items-center gap-2">
            <MicOff /> <span>Stop Record</span>
          </button>
          <textarea
            placeholder="Transcribed Text"
            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
            value={transcript}
            readOnly
          ></textarea>
        </div>

        {/*    text*/}
        <div>
          <h3 className={"text-2xl text-[#475569] text-center  font-semibold"}>
            React speech to text convertor
          </h3>
          <p
            className={
              "flex flex-col gap-2  text-[#475569] text-[18px] leading-8 "
            }
          >
            <span>
              <Link
                to={"https://www.npmjs.com/package/react-speakup"}
                className={"underline"}
              >
                react-speakup
              </Link>{" "}
              is a simple and easy-to-use speech-to-text library for React. It
              allows you to convert spoken words into written text with just a
              few lines of code. With support for multiple languages, including
              Amharic,
            </span>
            <span>
              React SpeakUp is a versatile tool that can be used in a wide range
              of applications. Whether you're building a voice-controlled app, a
              transcription tool, or anything in between, React SpeakUp has you
              covered. So why wait? Install React SpeakUp today and start
              converting speech to text in no time!
            </span>
            <span>
              you can install it from
              <div className="mockup-code">
                <pre data-prefix="$">
                  <code>npm i react-speakup</code>
                </pre>
              </div>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default STT;
