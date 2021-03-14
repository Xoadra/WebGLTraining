import { useRef, useState, useEffect } from 'react';

import useEngine from '../hooks/useEngine';
import './ViewArea.css';


function ViewArea() {
    const canvas = useRef(null);
    const [message, setMessage] = useState('');
    const engine = useEngine(canvas, '1.0');
    useEffect(() => {
        const available = canvas.current.getContext(engine.profile.context);
        setMessage(available ? 'Content coming soon...' : 'WebGL won\'t work! So sad...');
    }, [engine.profile.context]);
    return (
        <figure>
            <div id="overlay"/>
            <figcaption>{message}</figcaption>
            <canvas ref={canvas}/>
        </figure>
    );
}


export default ViewArea;
