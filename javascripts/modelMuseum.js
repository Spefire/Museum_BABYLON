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
  
  //---Rez de chaussée
  var offset = hauteurMur*0.0;  
  //Murs extérieurs
  createFloor(0,offset-hauteurMur/2,0,30,epaisseurSol,30);
  createWall(15,offset,0,true,30,hauteurMur,epaisseurMur,false) ;
  createWall(-15,offset,0,true,30,hauteurMur,epaisseurMur,false) ;
  createWall(0,offset,15,false,30,hauteurMur,epaisseurMur,false) ;
  createWall(8,offset,-15,false,14,hauteurMur,epaisseurMur,false) ;
  createWall(-8,offset,-15,false,14,hauteurMur,epaisseurMur,false) ;
  createDoor(0.5,offset,-15,false,1,hauteurMur,epaisseurMur,false);
  createDoor(-0.5,offset,-15,false,1,hauteurMur,epaisseurMur,false);
  
  //Murs et portes intérieures sur X
  createWall(-11.5,offset,0,false,7,hauteurMur,epaisseurMur,true) ;
  createDoor(-7.5,offset,0,false,1,hauteurMur,epaisseurMur,true);
  createWall(-3.75,offset,0,false,6.5,hauteurMur,epaisseurMur,true) ;
  createDoor(0,offset,0,false,1,hauteurMur,epaisseurMur,true);
  createWall(3.75,offset,0,false,6.5,hauteurMur,epaisseurMur,true) ;
  createDoor(7.5,offset,0,false,1,hauteurMur,epaisseurMur,true);
  createWall(11.5,offset,0,false,7,hauteurMur,epaisseurMur,true) ;
  
  //Murs et portes extérieures sur Z
  createWall(-5,offset,14,true,2,hauteurMur,epaisseurMur,true) ;
  createDoor(-5,offset,12.5,true,1,hauteurMur,epaisseurMur,true);
  createWall(-5,offset,6,true,12,hauteurMur,epaisseurMur,true) ;
  createWall(5,offset,9,true,12,hauteurMur,epaisseurMur,true) ;
  createDoor(5,offset,2.5,true,1,hauteurMur,epaisseurMur,true);
  createWall(5,offset,1,true,2,hauteurMur,epaisseurMur,true) ;

  createStairs(13,offset,-2.5,4,hauteurMur,5,20,scene) ;
  createElevator(-13,offset,-2,4,hauteurMur,epaisseurMur, 4);

  //--Etage 1
  offset = hauteurMur*1.0;
  createFloor(0,offset-hauteurMur/2,7.5,30,epaisseurSol,15);
  createFence(0,offset-hauteurMur/4,0,false,22,hauteurMur/2);
  createWall(15,offset,0,true,30,hauteurMur,epaisseurMur,false) ;
  createWall(-15,offset,0,true,30,hauteurMur,epaisseurMur,false) ;
  createWall(0,offset,15,false,30,hauteurMur,epaisseurMur,false) ;
  createWall(0,offset,-15,false,30,hauteurMur,epaisseurMur,false) ;

  //--Toit
  offset = hauteurMur*2.0;
  createRoof(0,offset-hauteurMur*0.5,0,30,epaisseurSol,30);
  
  /*var y = -1.25;
  var z = -14;
  createSyndra(-12, y, z, scene);
  createLux(-8, y, z, scene);
  createSoraka(-4, y, z, scene);
  createAhri(4, y, z, scene);
  createJanna(8, y, z, scene);
  createMissFortune(12, y, z, scene);*/
  
  createElementsMuseum(epaisseurMur, hauteurMur, epaisseurSol, detailsTexture, scene);
  
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

function createFence(x, y, z, vertical, width, height, scene) {

  var fence = BABYLON.MeshBuilder.CreatePlane("fence", {width: width, height: height, sideOrientation:BABYLON.Mesh.DOUBLESIDE}, scene);
  fence.position = new BABYLON.Vector3(x,y,z) ;
  fence.checkCollisions = true;
  var mat = new BABYLON.StandardMaterial("materiau_barriere",scene);
  mat.diffuseTexture = new BABYLON.Texture("assets/textures/fence.png",scene);
  mat.diffuseTexture.uScale = width/detailsTexture;
  mat.diffuseTexture.vScale = 1.0;
  mat.diffuseTexture.hasAlpha = true;
  fence.material = mat;
  if (vertical) {
	setRotation(fence,0,90,0);
  }
}

function createFloor(x, y, z, width, height, depth, scene) {

  var floor = BABYLON.MeshBuilder.CreateBox("floor", {width: width, height: height, depth: depth}, scene);
  floor.position = new BABYLON.Vector3(x,y,z) ;
  floor.checkCollisions = true;
  var mat = new BABYLON.StandardMaterial("materiau_parquet",scene);
  mat.diffuseTexture = new BABYLON.Texture("assets/textures/parquet.jpg",scene);
  mat.diffuseTexture.uScale = width/detailsTexture;
  mat.diffuseTexture.vScale = width/detailsTexture;
  floor.material = mat;
}

function createDoor(x, y, z, vertical, width, height, depth, interieur, scene) {

  var wall = BABYLON.MeshBuilder.CreateBox("wall", {width: width, height: height*0.2, depth: depth}, scene);
  wall.position = new BABYLON.Vector3(x,y+0.4*height,z) ;
  var mat = new BABYLON.StandardMaterial("materiau_mur",scene);
  if (interieur) {
	mat.diffuseTexture = new BABYLON.Texture("assets/textures/mur1.jpg",scene);
  } else {
	mat.diffuseTexture = new BABYLON.Texture("assets/textures/mur.jpg",scene);
  }
  mat.diffuseTexture.uScale = width/detailsTexture;var door = 
  mat.diffuseTexture.vScale = 0.2;
  wall.material = mat;

  var door = BABYLON.MeshBuilder.CreateBox("door", {width: width, height: height*0.8, depth: depth}, scene);
  door.position = new BABYLON.Vector3(x,y-0.1*height,z) ;
  mat = new BABYLON.StandardMaterial("materiau_porte",scene);
  mat.diffuseTexture = new BABYLON.Texture("assets/textures/door01.jpg",scene);
  mat.diffuseTexture.uScale = 1.0;
  mat.diffuseTexture.vScale = 1.0;
  door.material = mat;

  if (vertical) {
	setRotation(wall,0,90,0);
	setRotation(door,0,90,0);
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

		var mat = new BABYLON.StandardMaterial("materiau_escaliers",scene);
		mat.diffuseTexture = new BABYLON.Texture("assets/textures/parquet1.jpg",scene);
		mat.diffuseTexture.uScale = width/detailsTexture;
		mat.diffuseTexture.vScale = width/detailsTexture;
		stair.material = mat;
		stairsArray[i] = stair;
	}
	var stairs = BABYLON.Mesh.MergeMeshes(stairsArray);
	stairs.checkCollisions = true;

	/*var v1 = [x-width/2,y-height/2,z-depth/2] ;
	var v2 = [x+width/2,y-height/2,z-depth/2] ;
	var v3 = [x+width/2,y+height/2,z+depth/2] ;
	var v4 = [x-width/2,y+height/2,z+depth/2] ;
	var customMesh = new BABYLON.Mesh("custom", scene);
	var positions = [v1[0], v1[1], v1[2], v2[0], v2[1], v2[2], v3[0], v3[1], v3[2], v1[0], v1[1], v1[2], v3[0], v3[1], v3[2], v4[0], v4[1], v4[2]];
	var indices = [0, 1, 2, 3, 4, 5];
	var vertexData = new BABYLON.VertexData();
	vertexData.positions = positions;
	vertexData.indices = indices;
	vertexData.applyToMesh(customMesh);
	customMesh.checkCollisions = true;*/
}

function createRoof(x, y, z, width, height, depth, scene) {

  var roof = BABYLON.MeshBuilder.CreateBox("roof", {width: width, height: height, depth: depth}, scene);
  roof.position = new BABYLON.Vector3(x,y,z) ;
  roof.checkCollisions = true;
  var mat = new BABYLON.StandardMaterial("materiau_toit",scene);
  mat.diffuseTexture = new BABYLON.Texture("assets/textures/toit.jpg",scene);
  mat.diffuseTexture.uScale = width/detailsTexture;
  mat.diffuseTexture.vScale = width/detailsTexture;
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