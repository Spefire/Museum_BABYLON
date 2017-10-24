// ------------------------------- //
//   Application : Museum REV      //
//   Author : Nicholas Brun        //
//   File : modelEnvironnement.js  //
// ------------------------------- //

function createEnvironnement(epaisseurMur, hauteurMur, epaisseurSol, detailsTexture, scene){
	createGround(0,-hauteurMur/2,0,100,100);
	return scene;
}

function createGround(x, y, z, width, height, scene) {

	var ground = BABYLON.Mesh.CreateGround("ground", width, height, 10, scene);
	ground.position = new BABYLON.Vector3(x,y,z) ;
	ground.checkCollisions = true;
	var mat = new BABYLON.StandardMaterial("ground_mat",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/batiment/grass.jpg",scene);
	mat.diffuseTexture.uScale = width/detailsTexture;
	mat.diffuseTexture.vScale = width/detailsTexture;
	ground.material = mat;
}