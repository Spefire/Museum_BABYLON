// ---------------------------- //
//   Application : Museum REV   //
//   Author : Nicholas Brun     //
//   File : modelMuseum.js      //
// ---------------------------- //

var epaisseurMur = 0.2;
var hauteurMur = 3.0;
var epaisseurSol = 0.1;
var detailsTexture = 2.5;

function createMuseum(scene){

	//Extérieur
	createEnvironnement(epaisseurMur, hauteurMur, epaisseurSol, detailsTexture, scene);

	//---Rez de chaussée
	var offset = hauteurMur*0.0;  
	//Murs extérieurs
	createFloor(0,offset-hauteurMur/2,0,30,epaisseurSol,30);
	createWall(15,offset,0,true,30,hauteurMur,epaisseurMur,false) ;
	
	createWall(-15,offset,4,true,22,hauteurMur,epaisseurMur,false) ;
	createGlassWall(-15,offset,-9,true,4,hauteurMur,epaisseurMur,false) ;
	createWall(-15,offset,-13,true,4,hauteurMur,epaisseurMur,false) ;
	
	createWall(0,offset,15,false,30,hauteurMur,epaisseurMur,false) ;
	
	createWall(-13,offset,-15,false,4,hauteurMur,epaisseurMur,false) ;
	createGlassWall(-9,offset,-15,false,4,hauteurMur,epaisseurMur,false) ;
	createWall(-6,offset,-15,false,2,hauteurMur,epaisseurMur,false) ;
	createGlassWall(-4,offset,-15,false,2,hauteurMur,epaisseurMur,false) ;
	createWall(-2,offset,-15,false,2,hauteurMur,epaisseurMur,false) ;	
	
	createDoor(0.5,offset,-15,false,1,hauteurMur,epaisseurMur,false);
	createDoor(-0.5,offset,-15,false,1,hauteurMur,epaisseurMur,false);
	
	createWall(2,offset,-15,false,2,hauteurMur,epaisseurMur,false) ;
	createGlassWall(4,offset,-15,false,2,hauteurMur,epaisseurMur,false) ;
	createWall(6,offset,-15,false,2,hauteurMur,epaisseurMur,false) ;
	createGlassWall(9,offset,-15,false,4,hauteurMur,epaisseurMur,false) ;
	createWall(13,offset,-15,false,4,hauteurMur,epaisseurMur,false) ;

	//Murs et portes intérieures sur X
	createWall(-12,offset,0,false,6,hauteurMur,epaisseurMur,true) ;
	createDoor(-8,offset,0,false,2,hauteurMur,epaisseurMur,true);
	createWall(-4,offset,0,false,6,hauteurMur,epaisseurMur,true) ;
	createDoor(0,offset,0,false,2,hauteurMur,epaisseurMur,true);
	createWall(4,offset,0,false,6,hauteurMur,epaisseurMur,true) ;
	createDoor(8,offset,0,false,2,hauteurMur,epaisseurMur,true);
	createWall(12,offset,0,false,6,hauteurMur,epaisseurMur,true) ;

	//Murs et portes extérieures sur Z
	createWall(-5,offset,14,true,2,hauteurMur,epaisseurMur,true) ;
	createDoor(-5,offset,12.5,true,1,hauteurMur,epaisseurMur,true);
	createWall(-5,offset,6,true,12,hauteurMur,epaisseurMur,true) ;
	createWall(5,offset,14,true,2,hauteurMur,epaisseurMur,true) ;
	createDoor(5,offset,12.5,true,1,hauteurMur,epaisseurMur,true);
	createWall(5,offset,6,true,12,hauteurMur,epaisseurMur,true) ;

	createStairs(13,offset,-2.5,4,hauteurMur,5,20) ;
	createElevator(-13,offset,-2,4,hauteurMur,epaisseurMur, 4);

	//--Etage 1
	offset = hauteurMur*1.0;
	createFloor(0,offset-hauteurMur/2,7.5,30,epaisseurSol,15);
	createFence(0,offset-hauteurMur/4,0,false,22,hauteurMur/2);
	createWall(15,offset,0,true,30,hauteurMur,epaisseurMur,false) ;
	
	createWall(-15,offset,4,true,22,hauteurMur,epaisseurMur,false) ;
	createGlassWall(-15,offset,-9,true,4,hauteurMur,epaisseurMur,true) ;
	createWall(-15,offset,-13,true,4,hauteurMur,epaisseurMur,false) ;
	
	createWall(0,offset,15,false,30,hauteurMur,epaisseurMur,false) ;
	
	createWall(-13,offset,-15,false,4,hauteurMur,epaisseurMur,false) ;
	createGlassWall(-9,offset,-15,false,4,hauteurMur,epaisseurMur,true) ;
	createWall(-6,offset,-15,false,2,hauteurMur,epaisseurMur,false) ;
	createGlassWall(-4,offset,-15,false,2,hauteurMur,epaisseurMur,true) ;
	
	createWall(0,offset,-15,false,6,hauteurMur,epaisseurMur,false) ;
	
	createGlassWall(4,offset,-15,false,2,hauteurMur,epaisseurMur,true) ;
	createWall(6,offset,-15,false,2,hauteurMur,epaisseurMur,false) ;
	createGlassWall(9,offset,-15,false,4,hauteurMur,epaisseurMur,true) ;
	createWall(13,offset,-15,false,4,hauteurMur,epaisseurMur,false) ;

	//--Toit
	offset = hauteurMur*2.0;
	createRoof(0,offset-hauteurMur*0.5,-6,30,epaisseurSol,18);
	createRoof(-12,offset-hauteurMur*0.5,7,6,epaisseurSol,8);
	createGlassRoof(-5.5,offset-hauteurMur*0.5,7,7,epaisseurSol,8);
	createRoof(0,offset-hauteurMur*0.5,7,4,epaisseurSol,8);
	createGlassRoof(5.5,offset-hauteurMur*0.5,7,7,epaisseurSol,8);
	createRoof(12,offset-hauteurMur*0.5,7,6,epaisseurSol,8);
	createRoof(0,offset-hauteurMur*0.5,13,30,epaisseurSol,4);
	
	createElementsMuseum(epaisseurMur, hauteurMur, epaisseurSol, detailsTexture, scene);

	return scene;
}

function createWall(x, y, z, vertical, width, height, depth, interieur, scene) {

	var wall = BABYLON.MeshBuilder.CreateBox("wall", {width: width, height: height, depth: depth}, scene);
	wall.position = new BABYLON.Vector3(x,y,z) ;
	wall.checkCollisions = true;
	var mat = new BABYLON.StandardMaterial("wall_mat",scene);
	if (interieur) {
		mat.diffuseTexture = new BABYLON.Texture("assets/batiment/wall_int.jpg",scene);
	} else {
		mat.diffuseTexture = new BABYLON.Texture("assets/batiment/wall.jpg",scene);
	}
	mat.diffuseTexture.uScale = width/detailsTexture;
	mat.diffuseTexture.vScale = 1.0;
	wall.material = mat;
	if (vertical) {
		setRotation(wall,0,90,0);
	}
}

function createFence(x, y, z, vertical, width, height, scene) {

	var fence = BABYLON.MeshBuilder.CreatePlane("fence", {width: width, height: height, sideOrientation:BABYLON.Mesh.DOUBLESIDE}, scene);
	fence.position = new BABYLON.Vector3(x,y,z) ;
	fence.checkCollisions = true;
	var mat = new BABYLON.StandardMaterial("fence_mat",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/batiment/fence.png",scene);
	mat.diffuseTexture.uScale = width/detailsTexture;
	mat.diffuseTexture.vScale = 1.0;
	mat.diffuseTexture.hasAlpha = true;
	fence.material = mat;
	setRotation(fence,0,180,0);
	if (vertical) {
		setRotation(fence,0,270,0);
	}
}

function createFloor(x, y, z, width, height, depth, scene) {

	var floor = BABYLON.MeshBuilder.CreateBox("floor", {width: width, height: height, depth: depth}, scene);
	floor.position = new BABYLON.Vector3(x,y,z) ;
	floor.checkCollisions = true;
	var mat = new BABYLON.StandardMaterial("floor_mat",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/batiment/floor.jpg",scene);
	mat.diffuseTexture.uScale = width/detailsTexture;
	mat.diffuseTexture.vScale = width/detailsTexture;
	floor.material = mat;
}

function createDoor(x, y, z, vertical, width, height, depth, interieur, scene) {

	var wall = BABYLON.MeshBuilder.CreateBox("wall", {width: width, height: height*0.2, depth: depth}, scene);
	wall.position = new BABYLON.Vector3(x,y+0.4*height,z) ;
	var mat = new BABYLON.StandardMaterial("wall_mat",scene);
	if (interieur) {
		mat.diffuseTexture = new BABYLON.Texture("assets/batiment/wall_int.jpg",scene);
	} else {
		mat.diffuseTexture = new BABYLON.Texture("assets/batiment/wall.jpg",scene);
	}
	mat.diffuseTexture.uScale = width/detailsTexture;
	mat.diffuseTexture.vScale = 0.2;
	wall.material = mat;

	/*var door = BABYLON.MeshBuilder.CreateBox("door", {width: width, height: height*0.8, depth: depth}, scene);
	door.position = new BABYLON.Vector3(x,y-0.1*height,z) ;
	mat = new BABYLON.StandardMaterial("materiau_porte",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/textures/door01.jpg",scene);
	mat.diffuseTexture.uScale = 1.0;
	mat.diffuseTexture.vScale = 1.0;
	door.material = mat;*/

	if (vertical) {
		setRotation(wall,0,90,0);
		//setRotation(door,0,90,0);
	}
}

function createGlassWall(x, y, z, vertical, width, height, depth, upper, scene) {

	var wall = BABYLON.MeshBuilder.CreateBox("wall", {width: width, height: height*0.2, depth: depth}, scene);
	if (upper) {
		wall.position = new BABYLON.Vector3(x,y+0.4*height,z) ;
	} else {
		wall.position = new BABYLON.Vector3(x,y-0.4*height,z) ;
	}
	var mat = new BABYLON.StandardMaterial("wall_mat",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/batiment/wall.jpg",scene);
	mat.diffuseTexture.uScale = width/detailsTexture;
	mat.diffuseTexture.vScale = 0.2;
	wall.material = mat;
	wall.checkCollisions = true;

	var glass = BABYLON.MeshBuilder.CreateBox("glass", {width: width, height: height*0.8, depth: depth}, scene);
	if (upper) {
		glass.position = new BABYLON.Vector3(x,y-0.1*height,z) ;
	} else {
		glass.position = new BABYLON.Vector3(x,y+0.1*height,z) ;
	}
	mat = new BABYLON.StandardMaterial("glass_mat",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/batiment/glass.png",scene);
	mat.alpha = 0.4;
	mat.diffuseTexture.uScale = 1.0;
	mat.diffuseTexture.vScale = 1.0;
	glass.material = mat;
	glass.checkCollisions = true;

	if (vertical) {
		setRotation(wall,0,90,0);
		setRotation(glass,0,90,0);
	}
}

function createStairs(x, y, z, width, height, depth, nb, scene) {
	var stairsArray = [];
	for (var i = 0; i < nb; i++) {
		var h = height*(nb-i)/nb;
		var w = width;
		var d = depth/nb;
		var stair = BABYLON.MeshBuilder.CreateBox("stairs", {width: w, height: h, depth: d}, scene);

		var posX = x;
		var posY = y-i*height/(nb*2)
		var posZ = z+depth/2-depth/(nb*2)-i*depth/nb
		stair.position = new BABYLON.Vector3(posX,posY,posZ) ;

		var mat = new BABYLON.StandardMaterial("stairs_mat",scene);
		mat.diffuseTexture = new BABYLON.Texture("assets/batiment/stairs.jpg",scene);
		mat.diffuseTexture.uScale = width/detailsTexture;
		mat.diffuseTexture.vScale = width/detailsTexture;
		stair.material = mat;
		stairsArray[i] = stair;
	}
	var stairs = BABYLON.Mesh.MergeMeshes(stairsArray);
	stairs.checkCollisions = true;
}

function createRoof(x, y, z, width, height, depth, scene) {
	var roof = BABYLON.MeshBuilder.CreateBox("roof", {width: width, height: height, depth: depth}, scene);
	roof.position = new BABYLON.Vector3(x,y,z) ;
	roof.checkCollisions = true;
	var mat = new BABYLON.StandardMaterial("roof_mat",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/batiment/roof.jpg",scene);
	mat.diffuseTexture.uScale = width/detailsTexture;
	mat.diffuseTexture.vScale = width/detailsTexture;
	roof.material = mat;
}

function createGlassRoof(x, y, z, width, height, depth, scene) {
	var roof = BABYLON.MeshBuilder.CreateBox("roof", {width: width, height: height, depth: depth}, scene);
	roof.position = new BABYLON.Vector3(x,y,z) ;
	roof.checkCollisions = true;
	var mat = new BABYLON.StandardMaterial("roof_mat",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/batiment/glass.png",scene);
	mat.diffuseTexture.uScale = width/detailsTexture;
	mat.diffuseTexture.vScale = width/detailsTexture;
	mat.alpha = 0.4;
	roof.material = mat;
}

function createElevator(x, y, z, width, height, tickness, depth, scene) {

	createWall(x-width/4-0.25,y,z-depth/2,false,width/2-0.5,height,tickness,false) ;
	createDoor(x,y,z-depth/2,false,1.0,hauteurMur,epaisseurMur,false);
	createWall(x+width/4+0.25,y,z-depth/2,false,width/2-0.5,height,tickness,false) ;
	createWall(x,y+height,z-depth/2,false,width,height,tickness,false) ;

	createWall(x-width/4-0.25,y+height,z+depth/2,false,width/2-0.5,height,tickness,false) ;
	createDoor(x,y+height,z+depth/2,false,1.0,hauteurMur,epaisseurMur,false);
	createWall(x+width/4+0.25,y+height,z+depth/2,false,width/2-0.5,height,tickness,false) ;

	createWall(x+width/2,y,z,true,width,height,tickness,false) ;
	createWall(x+width/2,y+height,z,true,width,height,tickness,false) ;

	createFloor(x,y+height/2,z,width,epaisseurSol,depth);
}