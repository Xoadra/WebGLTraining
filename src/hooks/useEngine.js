import { useState, useEffect } from 'react';

import useProfile from '../hooks/useProfile';
import useShaders from '../hooks/useShaders';


function useEngine(canvasRef, profileId) {
    const [webGl, setWebGl] = useState(null);
    const profile = useProfile(webGl, profileId);
    const shaders = useShaders(webGl, profile.shaders);
    useEffect(() => {
        setWebGl(canvasRef.current.getContext(profile.context));
    }, [canvasRef, profile.context]);
    return {
        webGl,
        profile: {
            ...profile,
            shaders: shaders?.reduce((shaders, { type, source }) => {
                return { ...shaders, [type]: source };
            }, {}) ?? null
        },
        shaders: shaders?.reduce((shaders, { type, shader }) => {
            return { ...shaders, [type]: shader };
        }, {}) ?? null
    };
}


export default useEngine;
