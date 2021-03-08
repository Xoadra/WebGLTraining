import { useRef, useState, useEffect } from 'react';

import useProfile from '../hooks/useProfile';
import './ViewArea.css';


function ViewArea() {
    const canvas = useRef(null);
    const [webGl, setWebGl] = useState(null);
    const [message, setMessage] = useState('');
    const profile = useProfile(webGl, '1.0');
    useEffect(() => {
        setWebGl(() => {
            const newWebGl = canvas.current.getContext(profile.context);
            setMessage(newWebGl ? 'Content coming soon...' : 'WebGL won\'t work! So sad...');
            return newWebGl;
        });
    }, [profile.context]);
    return (
        <figure>
            <div id="overlay"/>
            <figcaption>{message}</figcaption>
            <canvas ref={canvas}/>
        </figure>
    );
}


export default ViewArea;
