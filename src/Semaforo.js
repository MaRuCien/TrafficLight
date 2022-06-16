import React, { useState } from 'react';
import "./Semaforo.css";

const Semaforo = () => {
    const [selectedLight, setLight] = useState('');

    return (
        <div>
            <div className="trafficBar"></div>
            <div className="semaforo">
                <div className={"red light " + (selectedLight === 'red' ? 'selected' : '')} 
                onClick={() => setLight('red')}></div>
                <div className={"yellow light " + (selectedLight === 'yellow' ? 'selected' : '')} 
                onClick={() => setLight('yellow')}></div>
                <div className={"green light " + (selectedLight === 'green' ? 'selected' : '')} 
                onClick={() => setLight('green')}></div>
            </div>
        </div>
    );
}

export default Semaforo; 