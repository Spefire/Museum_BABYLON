// ---------------------------- //
//   Application : Museum REV   //
//   Author : Nicholas Brun     //
//   File : modelElements.js    //
// ---------------------------- //

function createElementsMuseum(epaisseurMur, hauteurMur, epaisseurSol, detailsTexture, scene){
	
	var depthRect = epaisseurMur/4;
	var heightRect = 0.75;
	var widthRect = 1.0;
	var rotation0 = 0.0;
	var rotation90 = 90.0;
	var rotation180 = 180.0;
	var rotation270 = 270.0;
	
	//---Rez de chaussée
	var offset = hauteurMur*0.0;
	var hRectB = offset+hauteurMur*0.2;
	createRectBoard(-12,hRectB,14.9,rotation0,widthRect,heightRect,depthRect,1) ;
	createRectBoard(-8,hRectB,14.9,rotation0,widthRect,heightRect,depthRect,2) ;
	createRectBoard(-3,hRectB,14.9,rotation0,widthRect,heightRect,depthRect,3) ;
	createRectBoard(0,hRectB,14.9,rotation0,widthRect,heightRect,depthRect,4) ;
	createRectBoard(3,hRectB,14.9,rotation0,widthRect,heightRect,depthRect,5) ;
	createRectBoard(8,hRectB,14.9,rotation0,widthRect,heightRect,depthRect,1) ;
	createRectBoard(12,hRectB,14.9,rotation0,widthRect,heightRect,depthRect,2) ;
	
	createSquareBoard(-14.9,hRectB,4,rotation270,widthRect,heightRect,depthRect,1) ;
	createSquareBoard(-14.9,hRectB,7.5,rotation270,widthRect,heightRect,depthRect,2) ;
	createSquareBoard(-14.9,hRectB,11,rotation270,widthRect,heightRect,depthRect,3) ;
	createSquareBoard(-5.1,hRectB,4,rotation90,widthRect,heightRect,depthRect,1) ;
	createSquareBoard(-5.1,hRectB,7.5,rotation90,widthRect,heightRect,depthRect,4) ;
	createSquareBoard(-5.1,hRectB,11,rotation90,widthRect,heightRect,depthRect,5) ;
	
	createSquareBoard(-4.9,hRectB,4,rotation270,widthRect,heightRect,depthRect,4) ;
	createSquareBoard(-4.9,hRectB,7.5,rotation270,widthRect,heightRect,depthRect,5) ;
	createSquareBoard(-4.9,hRectB,11,rotation270,widthRect,heightRect,depthRect,1) ;
	createSquareBoard(4.9,hRectB,4,rotation90,widthRect,heightRect,depthRect,1) ;
	createSquareBoard(4.9,hRectB,7.5,rotation90,widthRect,heightRect,depthRect,2) ;
	createSquareBoard(4.9,hRectB,11,rotation90,widthRect,heightRect,depthRect,3) ;
	
	createSquareBoard(5.1,hRectB,4,rotation270,widthRect,heightRect,depthRect,2) ;
	createSquareBoard(5.1,hRectB,7.5,rotation270,widthRect,heightRect,depthRect,1) ;
	createSquareBoard(5.1,hRectB,11,rotation270,widthRect,heightRect,depthRect,5) ;
	createSquareBoard(14.9,hRectB,4,rotation90,widthRect,heightRect,depthRect,4) ;
	createSquareBoard(14.9,hRectB,7.5,rotation90,widthRect,heightRect,depthRect,3) ;
	createSquareBoard(14.9,hRectB,11,rotation90,widthRect,heightRect,depthRect,2) ;

	//--Etage 1
	offset = hauteurMur*1.0;

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

function createRectBoard(x, y, z, rotation, width, height, depth, numBoard, scene) {

	var board = BABYLON.MeshBuilder.CreateBox("board", {width: width, height: height, depth: depth}, scene);
	board.position = new BABYLON.Vector3(x,y,z) ;
	var mat = new BABYLON.StandardMaterial("materiau_tableau",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/textures/tableau_rect_0"+numBoard+".jpg",scene);
	mat.diffuseTexture.uScale = 1.0;
	mat.diffuseTexture.vScale = 1.0;
	board.material = mat;
	setRotation(board,0,rotation,0);
}

function createSquareBoard(x, y, z, rotation, width, height, depth, numBoard, scene) {

	var board = BABYLON.MeshBuilder.CreateBox("board", {width: width, height: height, depth: depth}, scene);
	board.position = new BABYLON.Vector3(x,y,z) ;
	var mat = new BABYLON.StandardMaterial("materiau_tableau",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/textures/tableau_carre_0"+numBoard+".jpg",scene);
	mat.diffuseTexture.uScale = 1.0;
	mat.diffuseTexture.vScale = 1.0;
	board.material = mat;
	setRotation(board,0,rotation,0);
}