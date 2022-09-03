import { IFCWALL, IFCSLAB, IFCWALLSTANDARDCASE } from "web-ifc";
import * as THREE from "three";
import { Vector3, BufferGeometry } from "three";

export async function explode(ifcLoader, model, scene, exploded) {
  if (!exploded) {
    let ids = [];
    let walls = await ifcLoader.ifcManager.byType(
      model.modelID,
      "IFCWALLSTANDARDCASE"
    );
    let slabs = await ifcLoader.ifcManager.byType(model.modelID, "IFCSLAB");
    let elements = [...walls, ...slabs];
    ids = elements.map((e) => e.expressID);
    for (let id of ids) {
      let subset = ifcLoader.ifcManager.createSubset({
        modelID: model.modelID,
        ids: [id],
        scene: scene,
        removePrevious: true,
        customID: id.toString(),
      });
      let points = [];
      let posArray = subset.geometry.attributes.position;
      let index = subset.geometry.index.array;
      for (let k = 0; k < index.length; k++) {
        let x = posArray.getX(index[k]);
        let y = posArray.getY(index[k]);
        let z = posArray.getZ(index[k]);
        points.push(new Vector3(x, y, z));
      }

      if (points.length > 0) {
        let geo = new BufferGeometry().setFromPoints(points);
        geo.computeBoundingBox();
        geo.computeBoundingSphere();
        let center = geo.boundingSphere.center;
        subset.position.set(center.x, center.y, center.z);
      }
      hideModel(model, scene);
    }
  } else {
    model.visible = true;
    console.log(scene, model);
    let meshes = scene.children.filter((c) => c.type === "Mesh");
    meshes
      .filter((m) => m.uuid !== model.uuid)
      .forEach((m) => {
        scene.remove(m);
      });
  }
}

function hideModel(model, scene) {
  model.visible = false;
}
