import { useRef, useState, useEffect } from 'react';

import './ViewArea.css';


function ViewArea() {
    const canvas = useRef(null);
    const [webGL, setWebGL] = useState(null);
    const [message, setMessage] = useState('');
    useEffect(() => {
        setWebGL(() => {
            const newWebGL = canvas.current.getContext('webgl');
            setMessage(newWebGL ? 'Content coming soon...' : 'WebGL won\'t work! So sad...');
            return newWebGL;
        });
    }, []);
    return (
        <figure>
            <div id="overlay"/>
            <figcaption>{message}</figcaption>
            <canvas ref={canvas}/>
        </figure>
    );
}


export default ViewArea;
