import '../style.css';

function getCanvas(): HTMLCanvasElement {
  return document.getElementsByTagName('canvas')[0];
}

function main(): void {
  // eslint-disable-next-line no-console
  console.log('running');
  const canvas = getCanvas();
  const gl = canvas.getContext('webgl2');

  if (gl === null) {
    // eslint-disable-next-line no-console
    console.error('Unable to initialize WebGL. Your browser or machine may not support it.');
    return;
  }

  document.querySelector('#loading-container').classList.add('hidden');
}

window.onload = main;
