import profileConfigs from '../profiles.json';


function useProfile(webGl, profileId) {
    const { shaders } = profileConfigs[profileId];
    return { ...profileConfigs[profileId], id: profileId, shaders: webGl ? shaders : null };
}


export default useProfile;
