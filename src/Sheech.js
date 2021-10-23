import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

const Speech = () => {

    const { speak } = useSpeechSynthesis()

    const [value , setValue] = useState("")
    const handleArea = (e) => {
        setValue(e.target.value)
    }

    const ReadNow = () =>{
       speak ({text : value})
    }

    return (
        <div className="speech">
            <div className="group"><h2>Text Reader App</h2></div>
            <div className="group">
                <textarea rows="11" cols="50" placeholder="write here..." value={value} onChange={handleArea} />
            </div>
            <div className="group">
                <button onClick={ReadNow}>Read</button>
            </div>
        </div>
    )
}

export default Speech
