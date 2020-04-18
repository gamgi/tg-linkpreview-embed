import { mat4 } from 'gl-matrix';
import type { Buffers } from './types';
import type { ProgramInfo } from './shader/types';

let rotation = 0;

export function drawScene(
  gl: WebGL2RenderingContext,
  programInfo: ProgramInfo,
  buffers: Buffers,
  deltaTime: number,
): void {
  resize(gl.canvas as HTMLCanvasElement);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  // clear
  gl.clearDepth(1.0);
  gl.enable(gl.DEPTH_TEST);
  gl.depthFunc(gl.LEQUAL);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // perspective matrix
  const canvas = gl.canvas as HTMLCanvasElement;
  const fieldOfView = (45 * Math.PI) / 180; // in radians
  const aspect = canvas.clientWidth / canvas.clientHeight;
  const zNear = 0.1;
  const zFar = 100.0;
  const projectionMatrix = mat4.create();
  mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

  // model view matrix
  const modelViewMatrix = mat4.create();

  // draw rotating cube
  mat4.translate(modelViewMatrix, modelViewMatrix, [-0.0, 0.0, -6.0]);
  mat4.rotate(modelViewMatrix, modelViewMatrix, rotation, [0, 1, 0]);
  mat4.rotate(modelViewMatrix, modelViewMatrix, rotation * 0.7, [1, 0.33, 0]);

  // specify Vertexarray as source for everything
  gl.bindVertexArray(buffers.cubeVertexArray);

  // shader indices
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
  gl.useProgram(programInfo.program);

  // shader uniform data
  gl.uniformMatrix4fv(programInfo.uniformLocations.projectionMatrix, false, projectionMatrix);
  gl.uniformMatrix4fv(programInfo.uniformLocations.modelViewMatrix, false, modelViewMatrix);

  // Draw
  {
    const vertexCount = 36;
    const type = gl.UNSIGNED_SHORT;
    const offset = 0;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }

  // update rotation
  rotation += deltaTime;
}

function resize(canvas: HTMLCanvasElement): void {
  // check browser canvas size
  const displayWidth = canvas.clientWidth;
  const displayHeight = canvas.clientHeight;

  if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
    // resize
    canvas.width = displayWidth;
    canvas.height = displayHeight;
  }
}
