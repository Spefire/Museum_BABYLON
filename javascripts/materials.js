// ---------------------------- //
//   Application : Museum REV   //
//   Author : Nicholas Brun     //
//   File : materials.js        //
// ---------------------------- //

var textureSize = 2.5;

var mat_base;
var mat_iron;
var mat_bigbase;
var mat_marble;
var mat_wall;
var mat_wallint;
var mat_fence;
var mat_floor;
var mat_glass;
var mat_roof;
var mat_ground;

function createMaterials(scene) {
	mat_base = new BABYLON.StandardMaterial("mat_base");
	mat_base.diffuseTexture = new BABYLON.Texture("assets/panneaux/base.jpg");

	mat_iron = new BABYLON.StandardMaterial("mat_iron");
	mat_iron.diffuseTexture = new BABYLON.Texture("assets/batiment/iron.jpg");

	mat_bigbase = new BABYLON.StandardMaterial("mat_bigbase");
	mat_bigbase.diffuseTexture = new BABYLON.Texture("assets/panneaux/bigbase.jpg");

	mat_marble = new BABYLON.StandardMaterial("mat_marble");
	mat_marble.diffuseTexture = new BABYLON.Texture("assets/batiment/marble.jpg");
	mat_marble.diffuseTexture.uScale = 2.0;
	mat_marble.diffuseTexture.vScale = 1.0;

	mat_wall = new BABYLON.StandardMaterial("mat_wall");
	mat_wall.diffuseTexture = new BABYLON.Texture("assets/batiment/wall.jpg");
	mat_wall.diffuseTexture.uScale = 30/textureSize;
	mat_wall.diffuseTexture.vScale = 1.0;

	mat_wallint = new BABYLON.StandardMaterial("mat_wallint");
	mat_wallint.diffuseTexture = new BABYLON.Texture("assets/batiment/wall_int.jpg");
	mat_wallint.diffuseTexture.uScale = 30/textureSize;
	mat_wallint.diffuseTexture.vScale = 1.0;

	mat_fence = new BABYLON.StandardMaterial("mat_fence");
	mat_fence.diffuseTexture = new BABYLON.Texture("assets/batiment/fence.png");
	mat_fence.diffuseTexture.uScale = 30/textureSize;
	mat_fence.diffuseTexture.vScale = 1.0;
	mat_fence.diffuseTexture.hasAlpha = true;

	mat_floor = new BABYLON.StandardMaterial("mat_floor");
	mat_floor.diffuseTexture = new BABYLON.Texture("assets/batiment/floor.jpg");
	mat_floor.diffuseTexture.uScale = 30/textureSize;
	mat_floor.diffuseTexture.vScale = 30/textureSize;

	mat_glass = new BABYLON.StandardMaterial("mat_glass");
	mat_glass.diffuseTexture = new BABYLON.Texture("assets/batiment/glass.png");
	mat_glass.alpha = 0.4;

	mat_roof = new BABYLON.StandardMaterial("mat_roof");
	mat_roof.diffuseTexture = new BABYLON.Texture("assets/batiment/roof.jpg");
	mat_roof.diffuseTexture.uScale = 30/textureSize;
	mat_roof.diffuseTexture.vScale = 30/textureSize;

	mat_ground = new BABYLON.StandardMaterial("mat_ground");
	mat_ground.diffuseTexture = new BABYLON.Texture("assets/batiment/grass.jpg");
	mat_ground.diffuseTexture.uScale = 30/textureSize;
	mat_ground.diffuseTexture.vScale = 30/textureSize;
}