import { CiTimer } from "react-icons/ci";
import { SiOpensourceinitiative } from "react-icons/si";
import { MdOutlineGppGood } from "react-icons/md";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";

const features = [
  {
    title: "Real-time Conversion",
    description:
      "Effortless Communication: " +
      "Seamlessly convert speech to text and vice versa in real-time ",
    icon: CiTimer,
  },
  {
    title: "Open Source ",
    description:
      "Empowering Developers: Access our open-source codebase for" +
      " seamless integration into your projects. ",
    icon: SiOpensourceinitiative,
  },
  {
    title: "Accurate Transcription:",
    description:
      "Precision at Your Fingertips: Experience accurate transcription of " +
      "spoken words into text",
    icon: MdOutlineGppGood,
  },
  {
    title: "Multilingual Support:",
    description:
      " Enjoy multilingual support for speech-to-text conversion, " +
      "facilitating communication in various languages. ",
    icon: RiCheckboxMultipleBlankLine,
  },
];

export default features;
