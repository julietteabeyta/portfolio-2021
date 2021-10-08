import { Fragment, useEffect } from 'react';
import * as THREE from 'three';
import vertex from 'GLSL/vertex.glsl'
import fragment from 'GLSL/fragment.glsl'

export default function Introduction() {
  useEffect(() => {
    let states = {};
    const lerp = (min, max, theta) => min * (1 - theta) + max * theta;
    const baseMaterial = new THREE.ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      transparent: true,
      blending: THREE.NormalBlending,
      uniforms: {
        uTime: { value: 1.0 },
        uTexture: { value: null },
        uOpacity: { value: 0.0 },
        uHover: { value: 0.0 },
      },
      side: THREE.DoubleSide
    });

    const canvas = document.querySelector('canvas');
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setClearColor(0xffffff, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    const clock = new THREE.Clock();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.z = 1.7;
    const scene = new THREE.Scene();
    const imgURLs = [
      'wrwg-case-study.png',
      'spacex-case-study.png',
      'task-case-study.png',
      'fibonacci-case-study.png',
      'halloween-case-study.png',
    ];
    const textures = imgURLs.map(url => new THREE.TextureLoader().load(url));
    const els = document.getElementsByClassName('project-link')
    Array.from(els).forEach(el => {
      el.addEventListener('mouseover', () => {
        const elName = el.name
        states[elName].opacity = 1.0;
        states[elName].hover = 0.1;
      });
      el.addEventListener('mouseout', () => {
        const elName = el.name
        states[elName].opacity = 0;
        states[elName].hover = 0;
      });
    });
    const render = () => {
      scene.children.forEach(child => {
        child.material.uniforms.uTime.value = clock.getElapsedTime();
        const stateToTweenTo = states[child.name];
        child.material.uniforms.uOpacity.value = lerp(child.material.uniforms.uOpacity.value, stateToTweenTo.opacity, .2);
        child.material.uniforms.uHover.value = lerp(child.material.uniforms.uHover.value, stateToTweenTo.hover, .2);
      });
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }

    const createMeshes = () => {
      textures.forEach((texture) => {
        const instancedMaterial = baseMaterial.clone();
        instancedMaterial.uniforms.uTexture.value = texture;

        const ratio = texture.image.naturalWidth / texture.image.naturalHeight;
        const geometry = new THREE.PlaneGeometry( ratio / 2, 1, 20, 20 );
        const name = texture.image.currentSrc.split('/')[3].split('-')[0];
        const mesh = new THREE.Mesh( geometry, instancedMaterial );
        mesh.name = name;
        scene.add( mesh );
      });
      scene.children.forEach((mesh) => {
        states[mesh.name] = { opacity: 0.0, hover: 0.0 };
      });
      render();
    }

    THREE.DefaultLoadingManager.onProgress = (item, loaded, total) => {
      if (loaded === total) {
        createMeshes();
      }
    };
  });

  return (
    <Fragment>
      <div id="projects-container" className="projects-container">
        <canvas />
        <div className='projects-subtext subtext'>
          <div>
            work
          </div>
        </div>
        <div className="projects-list">
          <a
            className="project-link"
            href="https://whatrhymeswithgod.com"
            target="_blank"
            rel="noreferrer"
            name="wrwg"
            >
            <div
              className="project-name-a"
              pseudo-content="What Rhymes With God"
            >
              What Rhymes With God
            </div>
          </a>
          <a
            className="project-link"
            href="https://spacex.juliette.dev"
            target="_blank"
            rel="noreferrer"
            name="spacex"
            >
            <div
              className="project-name-b"
              pseudo-content="SpaceX Launches"
            >
              SpaceX Launches
            </div>
          </a>
          <a
            className="project-link"
            href="https://tasktracker.juliette.dev"
            target="_blank"
            rel="noreferrer"
            name="task"
            >
            <div
              className="project-name-a"
              pseudo-content="That view task tracker that everyone makes"
            >
              That view task tracker that everyone makes
            </div>
          </a>
          <a
            className="project-link"
            href="https://fibonacci.juliette.dev"
            target="_blank"
            rel="noreferrer"
            name="fibonacci"
            >
            <div
              className="project-name-b"
              pseudo-content="Fibonacci Generator"
            >
              Fibonacci Generator
            </div>
          </a>
          <a
            className="project-link"
            href="https://halloween.juliette.dev"
            target="_blank"
            rel="noreferrer"
            name="halloween"
            >
            <div
              className="project-name-a"
              pseudo-content="Halloween Countdown"
            >
              Halloween Countdown
            </div>
          </a>
        </div>
      </div>
    </Fragment>
  );
}