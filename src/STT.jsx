import {Mic, MicOff} from 'lucide-react'
import { useVoiceToText } from "react-speakup";
function STT() {
    const { startListening, stopListening, transcript } = useVoiceToText({ continuous: true, lang: "am-ET"});
    return (
      <div className='flex flex-col gap-4'>
        <h1>Welcome to Amharic Speech To Text</h1>
        <div className='flex items-center gap-4'>
        <button onClick={startListening} className='flex items-center gap-2'>
          <Mic /> <span>Start Record</span>
        </button>
        <button onClick={stopListening} className='flex items-center gap-2'>
          <MicOff /> <span>Stop Record</span>
        </button>
        </div>
        <textarea placeholder="Transcribed Text" className="textarea textarea-bordered textarea-lg w-full max-w-xs" value={transcript} readOnly ></textarea>
    
        
      </div>
    );
    }

export default STT