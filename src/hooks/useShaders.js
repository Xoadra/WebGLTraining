function useShaders(webGl, shaderConfigs) {
    return !webGl ? null : shaderConfigs.map(({ type, body }) => {
        const { values, main } = body;
        const topLevel = `${values.join(';\n')}${values.length > 0 ? ';\n' : ''}`;
        const mainFunction = `${main.join(';\n\t')}${main.length > 0 ? ';\n\t' : ''}`;
        const rawSource = `${topLevel}void main() {\n\t${mainFunction};\n}`;
        const webGlShader = webGl.createShader(type);
        webGl.shaderSource(webGlShader, rawSource);
        webGl.compileShader(webGlShader);
        const isSuccess = webGl.getShaderParameter(webGlShader, webGl.COMPILE_STATUS);
        if (!isSuccess) {
            console.error(webGl.getShaderInfoLog(webGlShader));
            webGl.deleteShader(webGlShader);
        }
        return { type, source: rawSource, shader: isSuccess ? webGlShader : null };
    });
}


export default useShaders;
