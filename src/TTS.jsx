import { useEffect, useState } from "react";
import { CiPlay1, CiPause1, CiStop1 } from "react-icons/ci";
import NavBarComp from "./NavBar.jsx";

const TextToVoice = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [utterence, setUtterence] = useState(null);
  const [voice, setVoice] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  const [volume, setVolume] = useState(1);
  const [text, setText] = useState("");
  useEffect(() => {
    const synt = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance();
    setUtterence(u);
    const voices = synt.getVoices();
    // .find((voice)=>voice.lang==='am-ET');
    setVoice(voices[0]);
    return () => synt.cancel();
  }, [text]);
  const handlePlay = () => {
    const synt = window.speechSynthesis;
    if (isPaused) {
      synt.resume();
    } else {
      utterence.text = text;
      utterence.voice = voice;
      utterence.pitch = pitch;
      utterence.rate = rate;
      utterence.volume = volume;
      synt.speak(utterence);
    }
    setIsPaused(false);
    if (window.speechSynthesis.speaking) {
      const audioCtx = new AudioContext(); // Create AudioContext if available
      const source = audioCtx.createBufferSource(); // Create audio source

      // Connect speechSynthesis to audioCtx (if available)
      if (audioCtx) {
        const gainNode = audioCtx.createGain();
        gainNode.gain.setValueAtTime(volume, audioCtx.currentTime);
        source.connect(gainNode);
        gainNode.connect(audioCtx.destination);
      } else {
        source.connect(audioCtx.destination); // For browsers without AudioContext
      }

      // Function to capture audio stream (triggered on utterance end)
      const handleSpeechEnd = () => {
        if (audioCtx) {
          source.disconnect();
          audioCtx.close(); // Close AudioContext after capturing
        }

        source.onended = null; // Remove event listener

        // Get audio data
        const audioBlob = new Blob([source.buffer], { type: "audio/mpeg" }); // Assuming MP3 format

        // Create download link (add styling as needed)
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(audioBlob);
        downloadLink.download = "converted_audio.mp3"; // Set download filename
        downloadLink.click();

        URL.revokeObjectURL(audioBlob); // Revoke object URL after download
      };

      source.onended = handleSpeechEnd; // Attach event listener to capture audio
    }
  };

  const handlePause = () => {
    window.speechSynthesis.pause();
    setIsPaused(true);
  };
  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsPaused(false);
  };
  const handleVoiceChange = (e) => {
    const voices = window.speechSynthesis.getVoices();
    setVoice(voices.find((v) => v.name === e.target.value));
  };
  const handlePitchChange = (e) => {
    setPitch(parseFloat(e.target.value));
  };
  const handleRateChange = (e) => {
    setRate(parseFloat(e.target.value));
  };
  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <NavBarComp />
      <div className="flex items-center gap-4 flex-col">
        <h1>Welcome to Text To Speech convertor</h1>
        <textarea
          placeholder="Type Your Text"
          className="textarea textarea-bordered textarea-lg w-full max-w-xs"
          value={text}
          onChange={handleTextChange}
        ></textarea>
        <div>
          <label className="flex items-center gap-4">
            <span>Choose your dialect</span>
            <select
              value={voice?.name}
              onChange={handleVoiceChange}
              className="select select-primary w-full max-w-xs"
            >
              <option disabled>please choose your favorite voice</option>
              {window.speechSynthesis.getVoices().map((voice) => (
                <option key={voice.name} value={voice.name}>
                  {voice.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="flex items-center flex-col gap-8">
          <h2>play around with settings</h2>
          <div className="flex items-start gap-4">
            <label>
              Pitch:
              <input
                type="range"
                min="0"
                max="2"
                step="0.1"
                value={pitch}
                onChange={handlePitchChange}
                className="range"
              />
            </label>

            <label>
              Speed:
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={rate}
                onChange={handleRateChange}
                className="range"
              />
            </label>

            <label>
              Volume:
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="range"
              />
            </label>
          </div>
        </div>

        <br />
        <div className="flex items-center gap-4">
          <button
            onClick={handlePlay}
            className="btn btn-outline btn-secondary"
          >
            <CiPlay1 size={25} /> Play
          </button>
          <button onClick={handlePause} className="btn btn-outline btn-warning">
            <CiPause1 size={25} />
            Pause
          </button>
          <button onClick={handleStop} className="btn btn-outline btn-error">
            <CiStop1 size={25} /> Stop
          </button>
          <button
            className="btn btn-outline btn-success"
            disabled={window.speechSynthesis.speaking}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextToVoice;
