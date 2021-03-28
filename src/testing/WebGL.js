class MockWebGLRenderingContext {
    
    COMPILE_STATUS = 0x8B81;
    FRAGMENT_SHADER = 0x8B30;
    VERTEX_SHADER = 0x8B31;
    
    
    constructor(contextId) {
        if (contextId === 'webgl' || contextId === 'webgl2') {
            this.renderer = contextId;
        } else {
            throw TypeError(`Invalid context id: '${contextId}'`);
        }
    }
    
    
    compileShader(shader) {}
    
    createShader(type) {
        return new MockWebGLShader(type);
    }
    
    deleteShader(shader) {}
    
    getShaderInfoLog(shader) {
        return 'ShaderInfo';
    }
    
    getShaderParameter(shader, status) {
        return true;
    }
    
    shaderSource(shader, source) {}
    
}


class MockWebGLShader {}


export { MockWebGLRenderingContext };
