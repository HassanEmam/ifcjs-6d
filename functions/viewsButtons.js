import { MeshBasicMaterial } from "three";

export function leftView(cameraControls, model) {
    cameraControls.setLookAt(-50, 2.7, 0, 0, 2.7, 0);
    cameraControls.fitToBox(model, true, {paddingTop:0, paddingLeft: 0, paddingBottom:0, paddingRight:0});
}

export function frontView(cameraControls, model) {
    cameraControls.setLookAt(0, 2.7, 50, 0, 2.7, 0);
    cameraControls.fitToBox(model, true, {paddingTop:0, paddingLeft: 0, paddingBottom:0, paddingRight:0});
}

export function rightView(cameraControls, model) {
    cameraControls.setLookAt(50, 2.7, 0, 0, 2.7, 0);
    cameraControls.fitToBox(model, true, {paddingTop:0, paddingLeft: 0, paddingBottom:0, paddingRight:0});
}

export function backView(cameraControls, model) {
    cameraControls.setLookAt(0, 2.7, -50, 0, 2.7, 0);
    cameraControls.fitToBox(model, true, {paddingTop:0, paddingLeft: 0, paddingBottom:0, paddingRight:0});
}

// Fit Camera to the model bounding Box
export function fitView(cameraControls, model, scene) {
    let cameraPositionX = cameraControls.getPosition().x;
    let cameraPositionY = cameraControls.getPosition().y;
    let cameraPositionZ = cameraControls.getPosition().z;
    let cameraTargetX = cameraControls.getTarget().x;
    let cameraTargetY = cameraControls.getTarget().y;
    let cameraTargetZ = cameraControls.getTarget().z;
    cameraControls.fitToBox(model, false, {paddingTop:0, paddingLeft: 0, paddingBottom:0, paddingRight:0})
    let newCameraPositionX = cameraControls.getPosition().x;
    let newCameraPositionY = cameraControls.getPosition().y;
    let newCameraPositionZ = cameraControls.getPosition().z;
    let difPositionX = Math.abs(newCameraPositionX / cameraPositionX);
    let difPositionY = Math.abs(newCameraPositionY / cameraPositionY);
    let difPositionZ = Math.abs(newCameraPositionZ / cameraPositionZ);
    let distanceCoefficient = Math.max(difPositionX, difPositionY, difPositionZ)
    cameraControls.setPosition(cameraPositionX * distanceCoefficient, cameraPositionY * distanceCoefficient, cameraPositionZ * distanceCoefficient)
    cameraControls.setTarget(cameraTargetX, cameraTargetY, cameraTargetZ);
}

// Wireframe View
const wireframeMaterial = new MeshBasicMaterial({
    color: 0x222222,
    wireframe: true,
})
let originalMaterials = {}
export function wireframeView(model) {
    if (Object.keys(originalMaterials).length === 0) {
        model.traverse( function(child) {
            if (child.isMesh){
                originalMaterials[child.name] = child.material;
                child.material = wireframeMaterial;
            }
            if (child.isPlane){
                originalMaterials[child.name] = child.material;                                
                child.material = wireframeMaterial;
            }
        });
    }
}

// Colored View
export function materializedView(model) {
    if (Object.keys(originalMaterials).length !== 0) {
        model.traverse( function(child) {
            if (child.isMesh){
                child.material = originalMaterials[child.name];
            }
            if (child.isPlane){
                child.material = originalMaterials[child.name];                               
            }
        });
        originalMaterials = {} ;
    }
}