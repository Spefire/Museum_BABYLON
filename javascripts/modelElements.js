// ---------------------------- //
//   Application : Museum REV   //
//   Author : Nicholas Brun     //
//   File : modelElements.js    //
// ---------------------------- //

function createElementsMuseum(epaisseurMur, hauteurMur, epaisseurSol, detailsTexture, scene){
	
	var depthRect = epaisseurMur/4;
	var heightRect = 0.9;
	var widthRect = 1.2;
	var rotation0 = 0.0;
	var rotation90 = 90.0;
	var rotation180 = 180.0;
	var rotation270 = 270.0;
	
	//---Rez de chaussée
	var offset = hauteurMur*0.0;
	var hRect = offset+hauteurMur*0.2;
	createRectBoard(-12,hRect,14.9,rotation0,widthRect,heightRect,depthRect,1) ;
	createRectBoard(-8,hRect,14.9,rotation0,widthRect,heightRect,depthRect,2) ;
	createRectBoard(-3,hRect,14.9,rotation0,widthRect,heightRect,depthRect,3) ;
	createRectBoard(0,hRect,14.9,rotation0,widthRect,heightRect,depthRect,4) ;
	createRectBoard(3,hRect,14.9,rotation0,widthRect,heightRect,depthRect,5) ;
	createRectBoard(8,hRect,14.9,rotation0,widthRect,heightRect,depthRect,1) ;
	createRectBoard(12,hRect,14.9,rotation0,widthRect,heightRect,depthRect,2) ;
	
	createPanel(-8,offset+hauteurMur*0.4,-0.1,rotation0,widthRect,hauteurMur*0.2,depthRect,1) ;
	createPanel(0,offset+hauteurMur*0.4,-0.1,rotation0,widthRect,hauteurMur*0.2,depthRect,2) ;
	createPanel(8,offset+hauteurMur*0.4,-0.1,rotation0,widthRect,hauteurMur*0.2,depthRect,3) ;
	createBigPanel(-10,offset-hauteurMur*0.15,-1,-45.0,widthRect*1.15,hauteurMur*0.65,depthRect,1) ;
	createBigPanel(-6,offset-hauteurMur*0.15,14,45.0,widthRect*1.15,hauteurMur*0.65,depthRect,2) ;
	createBigPanel(4,offset-hauteurMur*0.15,14,rotation90+45.0,widthRect*1.15,hauteurMur*0.65,depthRect,3) ;
	createBigPanel(10,offset-hauteurMur*0.15,1,rotation90+45.0,widthRect*1.15,hauteurMur*0.65,depthRect,4) ;
	createBigPanel(14,offset-hauteurMur*0.15,-9,rotation90+45.0,widthRect*1.15,hauteurMur*0.65,depthRect,5) ;
	
	createSquareBoard(-14.9,hRect,4,rotation270,heightRect,depthRect,1) ;
	createSquareBoard(-14.9,hRect,7.5,rotation270,heightRect,depthRect,2) ;
	createSquareBoard(-14.9,hRect,11,rotation270,heightRect,depthRect,3) ;
	createSquareBoard(-5.1,hRect,3,rotation90,heightRect,depthRect,1) ;
	createSquareBoard(-5.1,hRect,6.5,rotation90,heightRect,depthRect,4) ;
	createSquareBoard(-5.1,hRect,10,rotation90,heightRect,depthRect,5) ;
	
	createSquareBoard(-4.9,hRect,3,rotation270,heightRect,depthRect,4) ;
	createSquareBoard(-4.9,hRect,6.5,rotation270,heightRect,depthRect,5) ;
	createSquareBoard(-4.9,hRect,10,rotation270,heightRect,depthRect,1) ;
	createSquareBoard(4.9,hRect,3,rotation90,heightRect,depthRect,1) ;
	createSquareBoard(4.9,hRect,6.5,rotation90,heightRect,depthRect,2) ;
	createSquareBoard(4.9,hRect,10,rotation90,heightRect,depthRect,3) ;
	
	createSquareBoard(5.1,hRect,3,rotation270,heightRect,depthRect,2) ;
	createSquareBoard(5.1,hRect,6.5,rotation270,heightRect,depthRect,1) ;
	createSquareBoard(5.1,hRect,10,rotation270,heightRect,depthRect,5) ;
	createSquareBoard(14.9,hRect,4,rotation90,heightRect,depthRect,4) ;
	createSquareBoard(14.9,hRect,7.5,rotation90,heightRect,depthRect,3) ;
	createSquareBoard(14.9,hRect,11,rotation90,heightRect,depthRect,2) ;

	//--Etage 1
	offset = hauteurMur*1.0;
	hRect = offset+hauteurMur*0.2;
	createRectBoard(-14,hRect,14.9,rotation0,widthRect,heightRect,depthRect,1) ;
	createRectBoard(-10,hRect,14.9,rotation0,widthRect,heightRect,depthRect,2) ;
	createRectBoard(-6,hRect,14.9,rotation0,widthRect,heightRect,depthRect,3) ;
	createRectBoard(-2,hRect,14.9,rotation0,widthRect,heightRect,depthRect,4) ;
	createRectBoard(2,hRect,14.9,rotation0,widthRect,heightRect,depthRect,4) ;
	createRectBoard(6,hRect,14.9,rotation0,widthRect,heightRect,depthRect,5) ;
	createRectBoard(10,hRect,14.9,rotation0,widthRect,heightRect,depthRect,1) ;
	createRectBoard(14,hRect,14.9,rotation0,widthRect,heightRect,depthRect,2) ;
	var heightBanc = 0.9;
	var hBanc = offset-hauteurMur/2+heightBanc/2;
	createBanc(-9,hBanc,8,1.25*heightBanc,heightBanc,4*heightBanc,1,scene);
	createBanc(9,hBanc,8,1.25*heightBanc,heightBanc,4*heightBanc,-1,scene);

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
	board.material = mat;
	setRotation(board,0,rotation,0);
	
	var indic = BABYLON.MeshBuilder.CreateBox("indic", {width: width/3, height: height/5, depth: depth}, scene);
	indic.position = new BABYLON.Vector3(x-width/4,y-2*height/3,z) ;
	var mat = new BABYLON.StandardMaterial("indic_mat",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/textures/barreau2.jpg",scene);
	indic.material = mat;
	setRotation(indic,0,rotation,0);
}

function createSquareBoard(x, y, z, rotation, height, depth, numBoard, scene) {

	var board = BABYLON.MeshBuilder.CreateBox("board", {width: height, height: height, depth: depth}, scene);
	board.position = new BABYLON.Vector3(x,y,z) ;
	var mat = new BABYLON.StandardMaterial("materiau_tableau",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/textures/tableau_carre_0"+numBoard+".jpg",scene);
	board.material = mat;
	setRotation(board,0,rotation,0);
	
	var indic = BABYLON.MeshBuilder.CreateBox("indic", {width: height/3, height: height/5, depth: depth}, scene);
	indic.position = new BABYLON.Vector3(x,y-2*height/3,z) ;
	var mat = new BABYLON.StandardMaterial("indic_mat",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/textures/barreau2.jpg",scene);
	indic.material = mat;
	setRotation(indic,0,rotation,0);
}

function createBanc(x, y, z, width, height, depth, sens, scene) {
	
	var bancUp = BABYLON.MeshBuilder.CreateBox("bancUp", {width: width, height: height*0.3, depth: depth}, scene);
	bancUp.position = new BABYLON.Vector3(x,y+0.7*height/2,z) ;
	var mat = new BABYLON.StandardMaterial("materiau_bancUp",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/textures/moquette.jpg",scene);
	bancUp.material = mat;
	
	var bancDown = BABYLON.MeshBuilder.CreateBox("bancDown", {width: width*0.8, height: height*0.7, depth: depth*0.9}, scene);
	bancDown.position = new BABYLON.Vector3(x+sens*0.2*width/2,y-0.3*height/2,z) ;
	var mat = new BABYLON.StandardMaterial("materiau_bancDown",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/textures/wood.jpg",scene);
	bancDown.material = mat;
}

function createPanel(x, y, z, rotation, width, height, depth, numPanel, scene) {

	var panel = BABYLON.MeshBuilder.CreateBox("panel", {width: width, height: height, depth: depth}, scene);
	panel.position = new BABYLON.Vector3(x,y,z) ;
	var mat = new BABYLON.StandardMaterial("panel_mat",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/textures/"+numPanel+".jpg",scene);
	panel.material = mat;
	setRotation(panel,0,rotation,0);
}

function createBigPanel(x, y, z, rotation, width, height, depth, numPanel, scene) {

	var stick = BABYLON.MeshBuilder.CreateBox("stick", {width: depth, height: height/2, depth: depth}, scene);
	stick.position = new BABYLON.Vector3(x,y-height/4,z) ;
	var mat = new BABYLON.StandardMaterial("stick_mat",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/textures/"+numPanel+".jpg",scene);
	stick.material = mat;
	setRotation(stick,0,rotation,0);
	
	var panel = BABYLON.MeshBuilder.CreateBox("panel", {width: width, height: height, depth: depth}, scene);
	panel.position = new BABYLON.Vector3(x,y,z) ;
	var mat = new BABYLON.StandardMaterial("panel_mat",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/textures/"+numPanel+".jpg",scene);
	panel.material = mat;
	setRotation(panel,20,rotation,0);
}