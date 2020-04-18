export type ProgramInfo = {
  program: WebGLProgram;
  attribLocations: { [key: string]: number };
  uniformLocations: {
    projectionMatrix: WebGLUniformLocation;
    modelViewMatrix: WebGLUniformLocation;
  };
};
