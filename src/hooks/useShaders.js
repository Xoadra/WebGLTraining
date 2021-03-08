function useShaders(webGl, shaderConfigs) {
    return !webGl ? null : shaderConfigs.reduce((shaders, { type, body }) => {
        const values = `${body.values.join(';\n')}${body.values.length > 0 ? ';\n' : ''}`;
        const main = `${body.main.join(';\n\t')}${body.values.main > 0 ? ';\n\t' : ''}`;
        const shader = webGl.createShader(type);
        webGl.shaderSource(shader, `${values}void main() {\n\t${main};\n}`);
        webGl.compileShader(shader);
        if (webGl.getShaderParameter(shader, webGl.COMPILE_STATUS)) {
            return { ...shaders, [type]: shader };
        } else {
            console.error(webGl.getShaderInfoLog(shader));
            webGl.deleteShader(shader);
            return { ...shaders, [type]: null };
        }
    }, {});
}


export default useShaders;
