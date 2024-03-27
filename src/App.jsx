import Home from "./Home";
import STT from "./STT";
import TextToVoice from "./TTS";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/tss" element={<TextToVoice />} />
      <Route path="/stt" element={<STT />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
