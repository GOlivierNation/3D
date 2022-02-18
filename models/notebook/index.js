import { Group } from "https://cdn.skypack.dev/three@0.122.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.122.0/examples/jsm/loaders/GLTFLoader.js";

const notebook = new Group();

var gltfLoader = new GLTFLoader();
gltfLoader.load("./models/notebook/model.gltf", function(object) {
  // gltf loads an entire scene. You could use the scene directly or pull the objects out of the scene like below:
  let obj = object.scene.children[0];
  obj.rotation.set(0, Math.PI / 1.8, 0);
  obj.scale.set(100, 100, 100);
  obj.geometry.center();
  notebook.add(obj);
});

export { notebook };
export default notebook;