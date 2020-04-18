import vertShader from './vert.glsl';
import fragShader from './frag.glsl';
import type { ProgramInfo } from './types';

const program = {
  vs: vertShader,
  fs: fragShader,
};
export default program;

export function initShaderProgram(gl: WebGL2RenderingContext, vsSource: string, fsSource: string): ProgramInfo {
  const vertexShader: WebGLShader = loadShader(gl, gl.VERTEX_SHADER, vsSource, 'vertex');
  const fragmentShader: WebGLShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource, 'fragment');

  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);

  gl.bindAttribLocation(shaderProgram, 0, 'aVertexPosition');
  gl.bindAttribLocation(shaderProgram, 1, 'aVertexColor');

  gl.linkProgram(shaderProgram);

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    throw new Error(`Failed to init shader: ${gl.getShaderInfoLog(shaderProgram)}`);
  }

  return {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: 0,
      vertexColor: 1,
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
    },
  };
}

function loadShader(gl: WebGL2RenderingContext, type: GLenum, source: string, name?: string): WebGLShader {
  const shader = gl.createShader(type);

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(`Failed to compile ${name} shader: ${gl.getShaderInfoLog(shader)}`);
  }
  return shader;
}
