import React from 'react'

const Pad = (props) => {
    const letter = props.letter
    return(
        <div>
            <button id={props.sound} className="drum-pad" onClick={document.getElementById({letter}).play()}>
                {letter}
                <audio id={props.letter} className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
            </button>
        </div>
    )
}

export default Pad