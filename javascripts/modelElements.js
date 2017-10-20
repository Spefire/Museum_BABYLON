// ---------------------------- //
//   Application : Museum REV   //
//   Author : Nicholas Brun     //
//   File : modelElements.js    //
// ---------------------------- //

function createElementsMuseum(epaisseurMur, hauteurMur, epaisseurSol, detailsTexture, scene){
  
	//---Rez de chaussée
	var offset = hauteurMur*0.0;
	createWall(-8,offset,-15,false,14,hauteurMur,epaisseurMur,false) ;

	//--Etage 1
	offset = hauteurMur*1.0;
	createWall(-8,offset,-15,false,14,hauteurMur,epaisseurMur,false) ;

	/*var y = -1.25;
	var z = -14;
	createSyndra(-12, y, z, scene);
	createLux(-8, y, z, scene);
	createSoraka(-4, y, z, scene);
	createAhri(4, y, z, scene);
	createJanna(8, y, z, scene);
	createMissFortune(12, y, z, scene);*/
	
	return scene;
}

function createWall(x, y, z, vertical, width, height, depth, interieur, scene) {

	var wall = BABYLON.MeshBuilder.CreateBox("wall", {width: width, height: height, depth: depth}, scene);
	wall.position = new BABYLON.Vector3(x,y,z) ;
	wall.checkCollisions = true;
	var mat = new BABYLON.StandardMaterial("materiau_mur",scene);
	if (interieur) {
		mat.diffuseTexture = new BABYLON.Texture("assets/textures/mur1.jpg",scene);
	} else {
		mat.diffuseTexture = new BABYLON.Texture("assets/textures/mur.jpg",scene);
	}
	mat.diffuseTexture.uScale = width/detailsTexture;
	mat.diffuseTexture.vScale = 1.0;
	wall.material = mat;
	if (vertical) {
		setRotation(wall,0,90,0);
	}
}