// ---------------------------- //
//   Application : Museum REV   //
//   Author : Nicholas Brun     //
//   File : materials.js        //
// ---------------------------- //

var textureSize = 2.5;

var mat_base;
var mat_iron;
var mat_buttonactif;
var mat_buttoninactif;
var mat_bigbase;
var mat_marble;
var mat_wall;
var mat_wallint;
var mat_fence;
var mat_floor;
var mat_glass;
var mat_roof;
var mat_ground;
var mat_bird;
var mat_empty;

function createMaterials(scene) {
	mat_base = new BABYLON.StandardMaterial("mat_base");
	mat_base.diffuseTexture = new BABYLON.Texture("assets/panneaux/base.jpg");

	mat_iron = new BABYLON.StandardMaterial("mat_iron");
	mat_iron.diffuseTexture = new BABYLON.Texture("assets/batiment/iron.jpg");
	
	mat_buttonactif = new BABYLON.StandardMaterial("mat_buttonactif");
	mat_buttonactif.diffuseTexture = new BABYLON.Texture("assets/batiment/button_actif.jpg");
	
	mat_buttoninactif = new BABYLON.StandardMaterial("mat_buttoninactif");
	mat_buttoninactif.diffuseTexture = new BABYLON.Texture("assets/batiment/button_inactif.jpg");

	mat_bigbase = new BABYLON.StandardMaterial("mat_bigbase");
	mat_bigbase.diffuseTexture = new BABYLON.Texture("assets/panneaux/bigbase.jpg");

	mat_marble = new BABYLON.StandardMaterial("mat_marble");
	mat_marble.diffuseTexture = new BABYLON.Texture("assets/batiment/marble.jpg");
	mat_marble.diffuseTexture.uScale = 2.0;
	mat_marble.diffuseTexture.vScale = 1.0;

	mat_glass = new BABYLON.StandardMaterial("mat_glass");
	mat_glass.diffuseTexture = new BABYLON.Texture("assets/batiment/glass.png");
	mat_glass.alpha = 0.4;
	
	mat_bird = new BABYLON.StandardMaterial("mat_bird");
	mat_bird.diffuseTexture = new BABYLON.Texture("assets/batiment/wing.png");
	mat_bird.diffuseTexture.hasAlpha = true;
	
	mat_empty = new BABYLON.StandardMaterial("mat_empty");
	mat_empty.diffuseTexture = new BABYLON.Texture("assets/batiment/glass.png");
	mat_empty.alpha = 0.0;
}

function getMatWall(width, speHeight) {
	mat_wall = new BABYLON.StandardMaterial("mat_wall");
	mat_wall.diffuseTexture = new BABYLON.Texture("assets/batiment/wall.jpg");
	mat_wall.diffuseTexture.uScale = width/textureSize;
	mat_wall.diffuseTexture.vScale = speHeight;
	return mat_wall;
}

function getMatWallInt(width, speHeight) {
	mat_wallint = new BABYLON.StandardMaterial("mat_wallint");
	mat_wallint.diffuseTexture = new BABYLON.Texture("assets/batiment/wall_int.jpg");
	mat_wallint.diffuseTexture.uScale = width/textureSize;
	mat_wallint.diffuseTexture.vScale = speHeight;
	return mat_wallint;
}

function getMatFence(width, speHeight) {
	mat_fence = new BABYLON.StandardMaterial("mat_fence");
	mat_fence.diffuseTexture = new BABYLON.Texture("assets/batiment/fence.png");
	mat_fence.diffuseTexture.uScale = width/textureSize;
	mat_fence.diffuseTexture.vScale = speHeight;
	mat_fence.diffuseTexture.hasAlpha = true;
	return mat_fence;
}

function getMatFloor(width) {
	mat_floor = new BABYLON.StandardMaterial("mat_floor");
	mat_floor.diffuseTexture = new BABYLON.Texture("assets/batiment/floor.jpg");
	mat_floor.diffuseTexture.uScale = width/textureSize;
	mat_floor.diffuseTexture.vScale = width/textureSize;
	return mat_floor;
}

function getMatRoof(width) {
	mat_roof = new BABYLON.StandardMaterial("mat_roof");
	mat_roof.diffuseTexture = new BABYLON.Texture("assets/batiment/roof.jpg");
	mat_roof.diffuseTexture.uScale = width/textureSize;
	mat_roof.diffuseTexture.vScale = width/textureSize;
	return mat_roof;
}

function getMatGround(width) {
	mat_ground = new BABYLON.StandardMaterial("mat_ground");
	mat_ground.diffuseTexture = new BABYLON.Texture("assets/batiment/grass.jpg");
	mat_ground.diffuseTexture.uScale = width/textureSize;
	mat_ground.diffuseTexture.vScale = width/textureSize;
	return mat_ground;
}