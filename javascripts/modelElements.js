// ---------------------------- //
//   Application : Museum REV   //
//   Author : Nicholas Brun     //
//   File : modelElements.js    //
// ---------------------------- //

function createElementsMuseum(epaisseurMur, hauteurMur, epaisseurSol, detailsTexture, scene){
	
	var depthRect = epaisseurMur/4;
	var heightRect = 1.0;
	var widthRect = 1.35;
	var rotation0 = 0.0;
	var rotation90 = 90.0;
	var rotation180 = 180.0;
	var rotation270 = 270.0;
	
	//---Rez de chaussée
	var offset = hauteurMur*0.0;
	var hRect = offset+hauteurMur*0.2;

	createSculpture01(4,offset,0,1,scene) ;
	createSculpture02(-4,offset,0,1,scene) ;
	
	createRectBoard(-12,hRect,14.9,rotation0,widthRect,heightRect,depthRect,"eric",1) ;
	createRectBoard(-8,hRect,14.9,rotation0,widthRect,heightRect,depthRect,"eric",2) ;
	createRectBoard(-3,hRect,14.9,rotation0,widthRect,heightRect,depthRect,"axelle",1) ;
	createRectBoard(0,hRect,14.9,rotation0,widthRect,heightRect,depthRect,"axelle",2) ;
	createRectBoard(3,hRect,14.9,rotation0,widthRect,heightRect,depthRect,"axelle",3) ;
	createRectBoard(8,hRect,14.9,rotation0,widthRect,heightRect,depthRect,"robert",1) ;
	createRectBoard(12,hRect,14.9,rotation0,widthRect,heightRect,depthRect,"robert",2) ;
	
	createPanel(0,offset+hauteurMur,-15.1,rotation0,widthRect*2.5,hauteurMur*0.4,depthRect,"main") ;
	createPanel(-8,offset+hauteurMur*0.4,-0.1,rotation0,widthRect*0.8,hauteurMur*0.2,depthRect,"eric") ;
	createPanel(0,offset+hauteurMur*0.4,-0.1,rotation0,widthRect*0.8,hauteurMur*0.2,depthRect,"axelle") ;
	createPanel(8,offset+hauteurMur*0.4,-0.1,rotation0,widthRect*0.8,hauteurMur*0.2,depthRect,"robert") ;
	createBigPanel(-10,offset-hauteurMur*0.15,-1,-45.0,widthRect,hauteurMur*0.65,depthRect,"eric") ;
	createBigPanel(-6,offset-hauteurMur*0.15,14,45.0,widthRect,hauteurMur*0.65,depthRect,"axelle") ;
	createBigPanel(4,offset-hauteurMur*0.15,14,45.0,widthRect,hauteurMur*0.65,depthRect,"robert") ;
	createBigPanel(10,offset-hauteurMur*0.15,1,rotation90+45.0,widthRect,hauteurMur*0.65,depthRect,"francoise") ;
	createBigPanel(14,offset-hauteurMur*0.15,-9,rotation90+45.0,widthRect,hauteurMur*0.65,depthRect,"francoise_bis") ;
	
	createSquareBoard(-14.9,hRect,4,rotation270,heightRect,depthRect,"eric",1) ;
	createSquareBoard(-14.9,hRect,7.5,rotation270,heightRect,depthRect,"eric",2) ;
	createSquareBoard(-14.9,hRect,11,rotation270,heightRect,depthRect,"eric",3) ;
	createSquareBoard(-5.1,hRect,3,rotation90,heightRect,depthRect,"eric",4) ;
	createSquareBoard(-5.1,hRect,6.5,rotation90,heightRect,depthRect,"eric",5) ;
	createSquareBoard(-5.1,hRect,10,rotation90,heightRect,depthRect,"eric",6) ;
	
	createSquareBoard(-4.9,hRect,3,rotation270,heightRect,depthRect,"axelle",1) ;
	createSquareBoard(-4.9,hRect,6.5,rotation270,heightRect,depthRect,"axelle",2) ;
	createSquareBoard(-4.9,hRect,10,rotation270,heightRect,depthRect,"axelle",3) ;
	createSquareBoard(4.9,hRect,3,rotation90,heightRect,depthRect,"axelle",4) ;
	createSquareBoard(4.9,hRect,6.5,rotation90,heightRect,depthRect,"axelle",5) ;
	createSquareBoard(4.9,hRect,10,rotation90,heightRect,depthRect,"axelle",6) ;
	
	createSquareBoard(5.1,hRect,3,rotation270,heightRect,depthRect,"robert",1) ;
	createSquareBoard(5.1,hRect,6.5,rotation270,heightRect,depthRect,"robert",2) ;
	createSquareBoard(5.1,hRect,10,rotation270,heightRect,depthRect,"robert",3) ;
	createSquareBoard(14.9,hRect,4,rotation90,heightRect,depthRect,"robert",4) ;
	createSquareBoard(14.9,hRect,7.5,rotation90,heightRect,depthRect,"robert",5) ;
	createSquareBoard(14.9,hRect,11,rotation90,heightRect,depthRect,"robert",6) ;

	//--Etage 1
	offset = hauteurMur*1.0;
	hRect = offset+hauteurMur*0.2;
	createRectBoard(-14.9,hRect,8,rotation270,widthRect,heightRect,depthRect,"francoise",1) ;
	createSquareBoard(-14.9,hRect,12.5,rotation270,heightRect,depthRect,"francoise",1) ;
	createSquareBoard(-10,hRect,14.9,rotation0,heightRect,depthRect,"francoise",2) ;
	createSquareBoard(-6,hRect,14.9,rotation0,heightRect,depthRect,"francoise",3) ;
	createSquareBoard(-2,hRect,14.9,rotation0,heightRect,depthRect,"francoise",4) ;
	createSquareBoard(2,hRect,14.9,rotation0,heightRect,depthRect,"francoise",5) ;
	createSquareBoard(6,hRect,14.9,rotation0,heightRect,depthRect,"francoise",6) ;
	createSquareBoard(10,hRect,14.9,rotation0,heightRect,depthRect,"francoise",7) ;
	createSquareBoard(14.9,hRect,12.5,rotation90,heightRect,depthRect,"francoise",8) ;
	createRectBoard(14.9,hRect,8,rotation90,widthRect,heightRect,depthRect,"francoise",2) ;
	var heightBanc = 0.9;
	var hBanc = offset-hauteurMur/2+heightBanc/2;
	createBanc(-9,hBanc,8,1.25*heightBanc,heightBanc,4*heightBanc,1,scene);
	createBanc(9,hBanc,8,1.25*heightBanc,heightBanc,4*heightBanc,-1,scene);
	
	return scene;
}

function createRectBoard(x, y, z, rotation, width, height, depth, name, numBoard, scene) {

	var board = BABYLON.MeshBuilder.CreateBox("board", {width: width, height: height, depth: depth}, scene);
	board.position = new BABYLON.Vector3(x,y,z) ;
	var mat = new BABYLON.StandardMaterial("board_mat",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/tableaux/"+name+"_rect_0"+numBoard+".jpg",scene);
	board.material = mat;
	setRotation(board,0,rotation,0);
	
	var indic = BABYLON.MeshBuilder.CreateBox("indic", {width: width/3, height: height/5, depth: depth}, scene);
	if (rotation == 90.0 || rotation == 270.0) {
		indic.position = new BABYLON.Vector3(x,y-2*height/3,z-width/4) ;
	} else {
		indic.position = new BABYLON.Vector3(x-width/4,y-2*height/3,z) ;
	}
	var mat = new BABYLON.StandardMaterial("indic_mat",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/panneaux/tab_"+name+".jpg",scene);
	indic.material = mat;
	setRotation(indic,0,rotation,0);
}

function createSquareBoard(x, y, z, rotation, height, depth, name, numBoard, scene) {

	var board = BABYLON.MeshBuilder.CreateBox("board", {width: height, height: height, depth: depth}, scene);
	board.position = new BABYLON.Vector3(x,y,z) ;
	var mat = new BABYLON.StandardMaterial("board_mat",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/tableaux/"+name+"_carr_0"+numBoard+".jpg",scene);
	board.material = mat;
	setRotation(board,0,rotation,0);
	
	var indic = BABYLON.MeshBuilder.CreateBox("indic", {width: height/3, height: height/5, depth: depth}, scene);
	indic.position = new BABYLON.Vector3(x,y-2*height/3,z) ;
	var mat = new BABYLON.StandardMaterial("indic_mat",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/panneaux/tab_"+name+".jpg",scene);
	indic.material = mat;
	setRotation(indic,0,rotation,0);
}

function createBanc(x, y, z, width, height, depth, sens, scene) {
	
	var bancUp = BABYLON.MeshBuilder.CreateBox("bancUp", {width: width, height: height*0.3, depth: depth}, scene);
	bancUp.position = new BABYLON.Vector3(x,y+0.7*height/2,z) ;
	var mat = new BABYLON.StandardMaterial("materiau_bancUp",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/batiment/moquette.jpg",scene);
	bancUp.material = mat;
	
	var bancDown = BABYLON.MeshBuilder.CreateBox("bancDown", {width: width*0.8, height: height*0.7, depth: depth*0.9}, scene);
	bancDown.position = new BABYLON.Vector3(x+sens*0.2*width/2,y-0.3*height/2,z) ;
	var mat = new BABYLON.StandardMaterial("materiau_bancDown",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/batiment/wood.jpg",scene);
	bancDown.material = mat;
}

function createPanel(x, y, z, rotation, width, height, depth, name, scene) {

	var panel = BABYLON.MeshBuilder.CreateBox("panel", {width: width, height: height, depth: depth}, scene);
	panel.position = new BABYLON.Vector3(x,y,z) ;
	var mat = new BABYLON.StandardMaterial("panel_mat",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/panneaux/panel_"+name+".jpg",scene);
	panel.material = mat;
	setRotation(panel,0,rotation,0);
}

function createBigPanel(x, y, z, rotation, width, height, depth, name, scene) {

	var stick = BABYLON.MeshBuilder.CreateBox("stick", {width: depth, height: height/2, depth: depth}, scene);
	stick.position = new BABYLON.Vector3(x,y-height/4,z) ;
	var mat = new BABYLON.StandardMaterial("stick_mat",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/panneaux/bigbase.jpg",scene);
	stick.material = mat;
	setRotation(stick,0,rotation,0);
	
	var panel = BABYLON.MeshBuilder.CreateBox("panel", {width: width, height: height, depth: depth}, scene);
	panel.position = new BABYLON.Vector3(x,y,z) ;
	var mat = new BABYLON.StandardMaterial("panel_mat",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/panneaux/bigpanel_"+name+".jpg",scene);
	panel.material = mat;
	setRotation(panel,20,rotation,0);
}

function createSculpture01(x, y, z, size, scene) {

	var structure = BABYLON.MeshBuilder.CreateBox("structure", {width: size*5.2, height: size*0.2, depth: size*2.8}, scene);
	structure.position = new BABYLON.Vector3(x,y-size*1.5,z-size*1.5) ;
	
	var structureTop = BABYLON.MeshBuilder.CreateBox("structureTop", {width: size*0.4, height: size*0.4, depth: size*5.1}, scene);
	structureTop.position = new BABYLON.Vector3(x,y-size*1.5,z-size*1.5-size*1.3) ;
	setRotation(structureTop,0,90,0);
	
	var structureLeft = BABYLON.MeshBuilder.CreateBox("structureLeft", {width: size*0.3, height: size*0.4, depth: size*3.0}, scene);
	structureLeft.position = new BABYLON.Vector3(x-2.7*size,y-size*1.5,z-size*1.5) ;
	
	var structureRight = BABYLON.MeshBuilder.CreateBox("structureRight", {width: size*0.3, height: size*0.4, depth: size*3.0}, scene);
	structureRight.position = new BABYLON.Vector3(x+2.7*size,y-size*1.5,z-size*1.5) ;
		
	var mat = new BABYLON.StandardMaterial("structure_mat",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/panneaux/bigbase.jpg",scene);
	var matElement = new BABYLON.StandardMaterial("structure_element_mat",scene);
	matElement.diffuseTexture = new BABYLON.Texture("assets/batiment/marble.jpg",scene);
	matElement.diffuseTexture.uScale = 2.0;
	matElement.diffuseTexture.vScale = 1.0;
	structure.material = mat;
	structureTop.material = matElement;
	structureLeft.material = matElement;
	structureRight.material = matElement;
	
	var sphere01 = BABYLON.MeshBuilder.CreateSphere("sphere01", {diameter: size*1.4}, scene);
	sphere01.position = new BABYLON.Vector3(x,y-size*0.7,z-size*1.5) ;
	sphere01.material = matElement;
	
	var sphere02 = BABYLON.MeshBuilder.CreateSphere("sphere02", {diameter: size*0.6}, scene);
	sphere02.position = new BABYLON.Vector3(x,y+size*0.3,z-size*1.5) ;
	sphere02.material = matElement;
	
	var sphere03 = BABYLON.MeshBuilder.CreateSphere("sphere03", {diameter: size*0.2}, scene);
	sphere03.position = new BABYLON.Vector3(x,y+size*0.7,z-size*1.5) ;
	sphere03.material = matElement;
	
	var sphere11 = BABYLON.MeshBuilder.CreateSphere("sphere11", {diameter: size*0.6}, scene);
	sphere11.position = new BABYLON.Vector3(x+size*1.75,y-size*1.1,z-size*1.5) ;
	sphere11.material = matElement;
	
	var sphere12 = BABYLON.MeshBuilder.CreateSphere("sphere12", {diameter: size*0.2}, scene);
	sphere12.position = new BABYLON.Vector3(x+size*1.75,y-size*0.7,z-size*1.5) ;
	sphere12.material = matElement;
	
	var sphere21 = BABYLON.MeshBuilder.CreateSphere("sphere21", {diameter: size*0.6}, scene);
	sphere21.position = new BABYLON.Vector3(x-size*1.75,y-size*1.1,z-size*1.5) ;
	sphere21.material = matElement;
	
	var sphere22 = BABYLON.MeshBuilder.CreateSphere("sphere22", {diameter: size*0.2}, scene);
	sphere22.position = new BABYLON.Vector3(x-size*1.75,y-size*0.7,z-size*1.5) ;
	sphere22.material = matElement;
	
	var mat = new BABYLON.StandardMaterial("structure_mat",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/panneaux/bigbase.jpg",scene);
	structure.material = mat;
}

function createSculpture02(x, y, z, size, scene) {

	var structure = BABYLON.MeshBuilder.CreateBox("structure", {width: size*5.2, height: size*0.2, depth: size*2.8}, scene);
	structure.position = new BABYLON.Vector3(x,y-size*1.5,z-size*1.5) ;
	
	var structureTop = BABYLON.MeshBuilder.CreateBox("structureTop", {width: size*0.4, height: size*0.4, depth: size*5.1}, scene);
	structureTop.position = new BABYLON.Vector3(x,y-size*1.5,z-size*1.5-size*1.3) ;
	setRotation(structureTop,0,90,0);
	
	var structureLeft = BABYLON.MeshBuilder.CreateBox("structureLeft", {width: size*0.3, height: size*0.4, depth: size*3.0}, scene);
	structureLeft.position = new BABYLON.Vector3(x-2.7*size,y-size*1.5,z-size*1.5) ;
	
	var structureRight = BABYLON.MeshBuilder.CreateBox("structureRight", {width: size*0.3, height: size*0.4, depth: size*3.0}, scene);
	structureRight.position = new BABYLON.Vector3(x+2.7*size,y-size*1.5,z-size*1.5) ;
		
	var mat = new BABYLON.StandardMaterial("structure_mat",scene);
	mat.diffuseTexture = new BABYLON.Texture("assets/panneaux/bigbase.jpg",scene);
	var matElement = new BABYLON.StandardMaterial("structure_element_mat",scene);
	matElement.diffuseTexture = new BABYLON.Texture("assets/batiment/marble.jpg",scene);
	matElement.diffuseTexture.uScale = 2.0;
	matElement.diffuseTexture.vScale = 1.0;
	structure.material = mat;
	structureTop.material = matElement;
	structureLeft.material = matElement;
	structureRight.material = matElement;
	
	for (var i = 0; i < 9; i++) {
		var box = BABYLON.MeshBuilder.CreateBox("box", {width: size*2, height: size*0.1, depth: size*0.25}, scene);
		box.position = new BABYLON.Vector3(x,y-size*1.3+0.1*i,z-size*1.5) ;
		box.material = matElement;
		var keys = []; 
		keys.push({
			frame: 0,
			value: 0
		});
		keys.push({
			frame: 500,
			value: (20*i)* 18*2*Math.PI/360
		});
		keys.push({
			frame: 1000,
			value: 0
		});
		var animationBox = new BABYLON.Animation("myAnimation", "rotation.y", 24, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
		animationBox.setKeys(keys);
		box.animations = [];
		box.animations.push(animationBox);
		scene.beginAnimation(box, 0, 1000, true);
	}
	for (var i = 9; i < 19; i++) {
		var box = BABYLON.MeshBuilder.CreateBox("box", {width: size*2, height: size*0.1, depth: size*0.25}, scene);
		box.position = new BABYLON.Vector3(x,y-size*1.3+0.1*i,z-size*1.5) ;
		box.material = matElement;		
		var keys = []; 
		keys.push({
			frame: 0,
			value: 0
		});
		keys.push({
			frame: 500,
			value: (360-20*i)* 18*2*Math.PI/360
		});
		keys.push({
			frame: 1000,
			value: 0
		});
		var animationBox = new BABYLON.Animation("myAnimation", "rotation.y", 24, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
		animationBox.setKeys(keys);
		box.animations = [];
		box.animations.push(animationBox);
		scene.beginAnimation(box, 0, 1000, true);
	}
}