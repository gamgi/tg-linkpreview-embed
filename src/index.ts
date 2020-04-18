import { initBuffers } from './buffers';
import shader, { initShaderProgram } from './shader';
import { drawScene } from './draw';
import type { Buffers } from './types';
import type { ProgramInfo } from './shader/types';

function main(): void {
  const canvas = getCanvas();
  const gl = canvas.getContext('webgl2');

  if (gl === null) {
    throw new Error('Unable to initialize WebGL. Your browser or machine may not support it.');
  }

  const programInfo = initShaderProgram(gl, shader.vs, shader.fs);
  const buffers = initBuffers(gl, programInfo);
  setLoading(false);
  renderLoop(gl, programInfo, buffers);
}
function getCanvas(): HTMLCanvasElement {
  const container = document.querySelector('#canvas-container');
  const element: HTMLCanvasElement = document.createElement('canvas');
  element.width = 640;
  element.height = 480;
  container.appendChild(element);
  return element;
}

function setLoading(loading: boolean): void {
  if (loading) {
    document.querySelector('#loading-container').classList.remove('hidden');
  } else {
    document.querySelector('#loading-container').classList.add('hidden');
  }
}

function renderLoop(gl: WebGL2RenderingContext, programInfo: ProgramInfo, buffers: Buffers): void {
  let then = performance.now() * 0.001 - 0.01;
  function render(now: number): void {
    // timing
    now *= 0.001;
    const timeDelta = now - then;
    then = now;

    drawScene(gl, programInfo, buffers, timeDelta);
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

window.onload = main;
