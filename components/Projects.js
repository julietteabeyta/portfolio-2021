import { Fragment, useEffect } from 'react';
import * as THREE from 'three';
import vertex from 'GLSL/vertex.glsl'
import fragment from 'GLSL/fragment.glsl'

export default function Introduction() {
  let setOpacity = () => {};
  useEffect(() => {
    const baseMaterial = new THREE.ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      transparent: true,
      blending: THREE.NormalBlending,
      uniforms: {
        uTime: { value: 1.0 },
        uTexture: { value: null },
        uOpacity: { value: 0.0 },
      },
      side: THREE.DoubleSide
    });

    const canvas = document.querySelector('canvas');
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setClearColor(0xffffff, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    const clock = new THREE.Clock();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.z = 2;
    const scene = new THREE.Scene();
    const imgURLs = [
      // 'wrwg-case-study.png',
      // 'spacex-case-study.png',
      'task-case-study.png',
      // 'fibonacci-case-study.png',
      // 'halloween-case-study.png',
    ];
    const textures = imgURLs.map(url => new THREE.TextureLoader().load(url));

    const render = () => {
      scene.children.forEach(child => {
        child.material.uniforms.uTime.value = clock.getElapsedTime();
      });
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }

    const createMeshes = () => {
      textures.map((texture) => {
        const instancedMaterial = baseMaterial.clone();
        instancedMaterial.uniforms.uTexture.value = texture;
        const ratio = texture.image.width / texture.image.height;
        const geometry = new THREE.PlaneGeometry( ratio / 2, 1, 20, 20 );
        const name = texture.image.currentSrc.split('/')[3].split('-')[0];
        const mesh = new THREE.Mesh( geometry, instancedMaterial );
        mesh.name = name;
        scene.add( mesh );
      });
      render();
    }

    THREE.DefaultLoadingManager.onProgress = (item, loaded, total) => {
      if (loaded === total) {
        createMeshes();
      }
    };

    setOpacity = (name, opacity) => {
      const mesh = scene.children.find(child => child.name === name);
      if (mesh) mesh.material.uniforms.uOpacity.value = opacity;
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
            href="https://whatrhymeswithgod.com"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={ () => setOpacity('wrwg', 1.0) }
            onMouseLeave={ () => setOpacity('wrwg', 0.0) }
            >
            <div
              className="project-name-a"
              pseudo-content="What Rhymes With God"
            >
              What Rhymes With God
            </div>
          </a>
          <a
            href="https://spacex.juliette.dev"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={ () => setOpacity('spacex', 1.0) }
            onMouseLeave={ () => setOpacity('spacex', 0.0) }
            >
            <div
              className="project-name-b"
              pseudo-content="SpaceX Launches"
            >
              SpaceX Launches
            </div>
          </a>
          <a
            href="https://tasktracker.juliette.dev"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={ () => setOpacity('task', 1.0) }
            onMouseLeave={ () => setOpacity('task', 0.0) }
            >
            <div
              className="project-name-a"
              pseudo-content="That view task tracker that everyone makes"
            >
              That view task tracker that everyone makes
            </div>
          </a>
          <a
            href="https://fibonacci.juliette.dev"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={ () => setOpacity('fibonacci', 1.0) }
            onMouseLeave={ () => setOpacity('fibonacci', 0.0) }
            >
            <div
              className="project-name-b"
              pseudo-content="Fibonacci Generator"
            >
              Fibonacci Generator
            </div>
          </a>
          <a
            href="https://halloween.juliette.dev"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={ () => setOpacity('halloween', 1.0) }
            onMouseLeave={ () => setOpacity('halloween', 0.0) }
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