import profileConfigs from '../profiles.json';


function useProfile(webGl, profileId) {
    return {
        ...profileConfigs[profileId],
        id: profileId,
        shaders: profileConfigs[profileId].shaders.map(shader => {
            switch (shader.type) {
                case 'vertex':
                    return { ...shader, type: webGl?.VERTEX_SHADER };
                case 'fragment':
                    return { ...shader, type: webGl?.FRAGMENT_SHADER };
                default:
                    throw new TypeError(`Shader type must be either 'vertex' or 'fragment'`);
            }
        })
    };
}


export default useProfile;
