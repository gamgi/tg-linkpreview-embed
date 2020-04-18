
function main(): void {
  const canvas = getCanvas();
  const gl = canvas.getContext('webgl2');

  if (gl === null) {
    throw new Error('Unable to initialize WebGL. Your browser or machine may not support it.');
  }

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

}

window.onload = main;
