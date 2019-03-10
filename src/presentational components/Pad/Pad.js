import React from 'react'

const Pad = props => {
    return(
        <div>
            <button id={props.id} className="drum-pad" onClick={props.playSound}>
                {props.letter}
                <audio 
                ref={props.reference}
                id={props.letter} 
                className="clip" 
                src={props.sound}>
                </audio>
            </button>
        </div>
    )
}

export default Pad