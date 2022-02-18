import { Group } from "https://cdn.skypack.dev/three@0.122.0/build/three.module.js";
import { MTLLoader } from "https://cdn.skypack.dev/three@0.122.0/examples/jsm/loaders/MTLLoader.js";
import { OBJLoader } from "https://cdn.skypack.dev/three@0.122.0/examples/jsm/loaders/OBJLoader.js";

const apple = new Group();

const mtlLoader = new MTLLoader();
const objLoader = new OBJLoader();

mtlLoader.load("./models/apple/Apple.mtl", function(materials){
  objLoader.setMaterials(materials);
  objLoader.load("./models/apple/Apple.obj", function(obj) {
    obj.children[0].geometry.center();
    obj.scale.set(0.25, 0.25, 0.25);
    apple.add(obj);
  });
});


export { apple }
export default apple;