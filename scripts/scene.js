import * as THREE from "https://cdn.skypack.dev/three@v0.122.0/build/three.module.js";
import gsap from 'https://cdn.skypack.dev/gsap@3.5.1';

import notebook from '../models/notebook/index.js';
import apple from '../models/apple/index.js';

const scene = new THREE.Scene();
scene.fog = new THREE.Fog( 0xfff8cd, 100, 300 );

apple.position.set(25, 20, 0);
notebook.position.set(-35, 7, 0);
scene.add(notebook, apple);

gsap.from(apple.position, {
  y: 100,
  duration: 2.5, 
  ease: "bounce.out"
});


const light = new THREE.PointLight( 0xffffcc, 1, 100 );
light.position.set( -25, 30, 40 );
light.castShadow = true;
light.shadow.camera.near = 1;
light.shadow.camera.far = 60;
light.shadow.bias = - 0.005;

scene.add( light );

const backLight = new THREE.PointLight( 0xffccff, 1, 90 );
backLight.position.set( 25, 30, -40 );
scene.add( backLight );

const ambientLight = new THREE.AmbientLight( 0x20202A, 6, 100 );
scene.add( ambientLight );

const geometry = new THREE.PlaneGeometry( 3000, 3000, 16 );
const material = new THREE.MeshPhongMaterial( {color: 0xf5a25d, side: THREE.DoubleSide, shininess: 10 } );
const plane = new THREE.Mesh( geometry, material );
plane.rotation.set(Math.PI / 2, 0, 0);
scene.add( plane );

export { scene };
export default scene;
