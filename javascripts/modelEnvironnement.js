// ------------------------------- //
//   Application : Museum REV      //
//   Author : Nicholas Brun        //
//   File : modelEnvironnement.js  //
// ------------------------------- //

function createEnvironnement(epaisseurMur, hauteurMur, epaisseurSol, detailsTexture, scene){
	
	var offset = -hauteurMur/2;
	createGround(0,offset,0,100,100);
	
	//Tree 01
	var heightT01 = 7;
	var nbT01 = 75;
	for (var i = 0; i < nbT01; i++) {
		var angle = getRandomAngle();
		if (testAngle(angle)){
			var radius = getRandomInt(-40, -30);
			var x = Math.cos(angle)*radius;
			var z = Math.sin(angle)*radius;
			createTree(x,offset+heightT01/2,z,heightT01/2,heightT01,1);
		} else {
			i--;
		}
	}
	
	//Tree 02
	var heightT02 = 5;
	var nbT02 = 75;
	for (var i = 0; i < nbT02; i++) {
		var angle = getRandomAngle();
		if (testAngle(angle)) {
			var radius = getRandomInt(-40, -30);
			var x = Math.cos(angle)*radius;
			var z = Math.sin(angle)*radius;
			createTree(x,offset+heightT02/2,z,heightT02,heightT02,2);
		} else {
			i--;
		}
	}
	
	//Tree 03
	var heightT03 = 5;
	var nbT03 = 75;
	for (var i = 0; i < nbT03; i++) {
		var angle = getRandomAngle();
		if (testAngle(angle)) {
			var radius = getRandomInt(-40, -30);
			var x = Math.cos(angle)*radius;
			var z = Math.sin(angle)*radius;
			createTree(x,offset+heightT03/2,z,heightT03,heightT03,3);
		} else {
			i--;
		}
	}
	
	//Bushes
	var heightB = 1;
	var rotation0 = 0.0;
	var rotation90 = 90.0;
	createBush(-9,offset+heightB/2-0.1,-15.5,rotation0,heightB*5,heightB,1);
	createBush(-4,offset+heightB/2-0.1,-15.5,rotation0,heightB*4,heightB,1);
	createBush(4,offset+heightB/2-0.1,-15.5,rotation0,heightB*4,heightB,1);
	createBush(9,offset+heightB/2-0.1,-15.5,rotation0,heightB*5,heightB,1);
	createBush(-15.5,offset+heightB/2-0.1,-9,rotation90,heightB*5,heightB,1);
	
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

function createTree(x, y, z, width, height, numTree, scene) {

	var mat = new BABYLON.StandardMaterial("tree_mat",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/vegetation/tree0"+numTree+".png",scene);
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

function createBush(x, y, z, rotation, width, height, numBush, scene) {

	var mat = new BABYLON.StandardMaterial("bush_mat",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/vegetation/bush0"+numBush+".png",scene);
	mat.diffuseTexture.uScale = 1.0;
	mat.diffuseTexture.vScale = 1.0;
	mat.diffuseTexture.hasAlpha = true;

	var bush01 = BABYLON.MeshBuilder.CreatePlane("bush01", {width:width, height:height, sideOrientation:BABYLON.Mesh.DOUBLESIDE}, scene);
	bush01.position = new BABYLON.Vector3(x,y,z) ;
	bush01.material = mat;
	setRotation(bush01,0,15+rotation,0);
	
	var bush02 = BABYLON.MeshBuilder.CreatePlane("bush02", {width:width, height:height, sideOrientation:BABYLON.Mesh.DOUBLESIDE}, scene);
	bush02.position = new BABYLON.Vector3(x,y,z) ;
	bush02.material = mat;
	setRotation(bush02,0,-15+rotation,0);
}