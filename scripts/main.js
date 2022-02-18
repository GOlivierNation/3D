import * as THREE from "https://cdn.skypack.dev/three@0.122.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.122.0/examples/jsm/controls/OrbitControls.js";

import scene from './scene.js';

const renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 800 );
camera.position.set(0,80,120);
camera.lookAt(new THREE.Vector3(0,1,0));

window.addEventListener( 'resize', function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}, false );

const controls = new OrbitControls( camera, renderer.domElement );
controls.minDistance = 80;
controls.enableDamping = true;

function render () {
  requestAnimationFrame( render );
  renderer.render( scene, camera );
  controls.update();
}
render();

