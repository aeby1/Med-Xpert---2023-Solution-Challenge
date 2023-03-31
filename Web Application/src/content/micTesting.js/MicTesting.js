import { useRef, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import doctorIcon1 from '../../pages/assets/doctorIcon1.svg'
import '../micTesting.js/MicTesting.css'
import { AudioTwoTone, RestTwoTone} from '@ant-design/icons';
import {Input, Button} from 'antd'

const { TextArea } = Input;


function App() {
    const { transcript, resetTranscript } = useSpeechRecognition();
    const [isListening, setIsListening] = useState(false);
    const [name, setName] = useState('');

    const microphoneRef = useRef(null);
    // if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    //   console.log("Hello")
    //   // return (
    //   //   <div className="mircophone-container">
    //   //     Browser is not Support Speech Recognition.
    //   //   </div>
    //   // );
    // }
    const handleListing = () => {
        setIsListening(true);
        microphoneRef.current.classList.add("listening");
        SpeechRecognition.startListening({
            continuous: true,
        });

    };
    const stopHandle = () => {
        setIsListening(false);
        microphoneRef.current.classList.remove("listening");
        SpeechRecognition.stopListening();
        setName(name + transcript)
    };

    const handleReset = () => {
        // stopHandle();
        resetTranscript();
    };

    const handleChange = (event) => {
        setName(name => event.target.value)
    }

    return (
        <div className="microphone-wrapper">
            <div className="mircophone-container">
                <div
                    className="microphone-icon-container"
                    ref={microphoneRef}
                    onClick={handleListing}
                >
                    <img src={doctorIcon1} className="microphone-icon" />
                </div>
                <div className="microphone-status">
                    {isListening ? "Listening........." : "Click to start Listening"}
                </div>
                {isListening && (
                    <Button className="microphone-stop btn" shape='round' onClick={stopHandle}><AudioTwoTone />Stop</Button>
                )}
            </div>

            <div className="microphone-result-container">

                <div className="microphone-result-text">{transcript}</div>
                <TextArea rows={6} style={{ color: 'black'}} value={name} onChange={handleChange}></TextArea>
                <Button className="microphone-reset btn" shape='round' onClick={handleReset}><RestTwoTone/>Reset</Button>
                
            </div>
        </div>
    );
}
export default App;