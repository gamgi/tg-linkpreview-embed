import type { ProgramInfo } from './shader/types';
import type { Buffers } from './types';
import { positions, faceColors, triangleVertexIndices } from './bufferData';

export function initBuffers(gl: WebGL2RenderingContext, programInfo: ProgramInfo): Buffers {
  // bind VertexArray for cube
  const cubeVertexArray = gl.createVertexArray();
  gl.bindVertexArray(cubeVertexArray);

  // Positions
  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  {
    const numComponents = 3;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, numComponents, type, normalize, stride, offset);
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
  }

  // Colors
  // convert arrray of colors into table for all vertices
  let colors: number[] = [];

  for (const color of faceColors) {
    for (let v = 0; v < 4; v++) {
      // for all 4 vertices of a face
      colors = colors.concat(color);
    }
  }

  const colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

  {
    const numComponents = 4;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.vertexAttribPointer(programInfo.attribLocations.vertexColor, numComponents, type, normalize, stride, offset);
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexColor);
  }

  // Element array
  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(triangleVertexIndices), gl.STATIC_DRAW);

  // Unbind VertexArray
  gl.bindVertexArray(null);

  return {
    position: positionBuffer,
    color: colorBuffer,
    indices: indexBuffer,
    cubeVertexArray,
  };
}
