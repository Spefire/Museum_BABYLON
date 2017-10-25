// ------------------------------- //
//   Application : Museum REV      //
//   Author : Nicholas Brun        //
//   File : modelEnvironnement.js  //
// ------------------------------- //

function createEnvironnement(epaisseurMur, hauteurMur, epaisseurSol, detailsTexture, scene){
	
	createGround(0,-hauteurMur/2,0,100,100);
	
	//Tree 01
	var heightT01 = 6;
	var nbT01 = 20;
	for (var i = 0; i < nbT01; i++) {
		var x = getRandomInt(-20, 20);
		var z = getRandomInt(-25, -20);
		createTree(x,0+heightT01/4,z,heightT01/2,heightT01);
	}
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

function createTree(x, y, z, width, height, scene) {

	var mat = new BABYLON.StandardMaterial("tree_mat",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/vegetation/arbre01.png",scene);
	mat.diffuseTexture.uScale = 1.0;
	mat.diffuseTexture.vScale = 1.0;
	mat.diffuseTexture.hasAlpha = true;

	var tree01 = BABYLON.MeshBuilder.CreatePlane("tree01", {width:width, height:height, sideOrientation:BABYLON.Mesh.DOUBLESIDE}, scene);
	tree01.position = new BABYLON.Vector3(x,y,z) ;
	tree01.material = mat;
	setRotation(tree01,0,45,0);
	
	var tree02 = BABYLON.MeshBuilder.CreatePlane("tree02", {width:width, height:height, sideOrientation:BABYLON.Mesh.DOUBLESIDE}, scene);
	tree02.position = new BABYLON.Vector3(x,y,z) ;
	tree02.material = mat;
	setRotation(tree02,0,-45,0);
}