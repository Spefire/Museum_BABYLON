// ---------------------------- //
//   Application : Museum REV   //
//   Author : Nicholas Brun     //
//   File : modelElements.js    //
// ---------------------------- //

var nextToPainting = false;

function createElementsMuseum(scene){
	
	var depthRect = wallTickness/4;
	var heightRect = 1.0;
	var widthRect = 1.35;
	
	//----- Rez de chaussée -----
	var offset = wallHeight*0.0;
	var hRect = offset+wallHeight*0.2;

	//Sculptures
	createSculpture01(4,offset,0,1) ;
	createSculpture02(-4,offset,0,1) ;
	//Panneaux indicatoires
	createPanel(0,offset+wallHeight,-15.1,rotation0,widthRect*2.5,wallHeight*0.4,depthRect,"main") ;
	createPanel(-8,offset+wallHeight*0.4,-0.1,rotation0,widthRect*0.8,wallHeight*0.2,depthRect,"eric") ;
	createPanel(0,offset+wallHeight*0.4,-0.1,rotation0,widthRect*0.8,wallHeight*0.2,depthRect,"axelle") ;
	createPanel(8,offset+wallHeight*0.4,-0.1,rotation0,widthRect*0.8,wallHeight*0.2,depthRect,"robert") ;
	createBigPanel(-10,offset-wallHeight*0.15,-1,-45.0,widthRect,wallHeight*0.65,depthRect,"eric") ;
	createBigPanel(-6,offset-wallHeight*0.15,14,45.0,widthRect,wallHeight*0.65,depthRect,"axelle") ;
	createBigPanel(4,offset-wallHeight*0.15,14,45.0,widthRect,wallHeight*0.65,depthRect,"robert") ;
	createBigPanel(10,offset-wallHeight*0.15,1,rotation90+45.0,widthRect,wallHeight*0.65,depthRect,"francoise") ;
	createBigPanel(14,offset-wallHeight*0.15,-9,rotation90+45.0,widthRect,wallHeight*0.65,depthRect,"francoise_bis") ;
	//Tableaux rectangulaires
	createRectPainting(-12,hRect,14.9,rotation0,widthRect,heightRect,depthRect,"eric",1) ;
	createRectPainting(-8,hRect,14.9,rotation0,widthRect,heightRect,depthRect,"eric",2) ;
	createRectPainting(-3,hRect,14.9,rotation0,widthRect,heightRect,depthRect,"axelle",1) ;
	createRectPainting(0,hRect,14.9,rotation0,widthRect,heightRect,depthRect,"axelle",2) ;
	createRectPainting(3,hRect,14.9,rotation0,widthRect,heightRect,depthRect,"axelle",3) ;
	createRectPainting(8,hRect,14.9,rotation0,widthRect,heightRect,depthRect,"robert",1) ;
	createRectPainting(12,hRect,14.9,rotation0,widthRect,heightRect,depthRect,"robert",2) ;	
	//Tableaux carres : premiere salle
	createSquarePainting(-14.9,hRect,4,rotation270,heightRect,depthRect,"eric",1) ;
	createSquarePainting(-14.9,hRect,7.5,rotation270,heightRect,depthRect,"eric",2) ;
	createSquarePainting(-14.9,hRect,11,rotation270,heightRect,depthRect,"eric",3) ;
	createSquarePainting(-5.1,hRect,3,rotation90,heightRect,depthRect,"eric",4) ;
	createSquarePainting(-5.1,hRect,6.5,rotation90,heightRect,depthRect,"eric",5) ;
	createSquarePainting(-5.1,hRect,10,rotation90,heightRect,depthRect,"eric",6) ;
	//Tableaux carres : seconde salle
	createSquarePainting(-4.9,hRect,3,rotation270,heightRect,depthRect,"axelle",1) ;
	createSquarePainting(-4.9,hRect,6.5,rotation270,heightRect,depthRect,"axelle",2) ;
	createSquarePainting(-4.9,hRect,10,rotation270,heightRect,depthRect,"axelle",3) ;
	createSquarePainting(4.9,hRect,3,rotation90,heightRect,depthRect,"axelle",4) ;
	createSquarePainting(4.9,hRect,6.5,rotation90,heightRect,depthRect,"axelle",5) ;
	createSquarePainting(4.9,hRect,10,rotation90,heightRect,depthRect,"axelle",6) ;
	//Tableaux carres : troisieme salle
	createSquarePainting(5.1,hRect,3,rotation270,heightRect,depthRect,"robert",1) ;
	createSquarePainting(5.1,hRect,6.5,rotation270,heightRect,depthRect,"robert",2) ;
	createSquarePainting(5.1,hRect,10,rotation270,heightRect,depthRect,"robert",3) ;
	createSquarePainting(14.9,hRect,4,rotation90,heightRect,depthRect,"robert",4) ;
	createSquarePainting(14.9,hRect,7.5,rotation90,heightRect,depthRect,"robert",5) ;
	createSquarePainting(14.9,hRect,11,rotation90,heightRect,depthRect,"robert",6) ;

	//----- Mezanine -----
	offset = wallHeight*1.0;
	hRect = offset+wallHeight*0.2;
	var heightBench = 0.9;
	var hBench = offset-wallHeight/2+heightBench/2;
	
	//Tableaux
	createRectPainting(-14.9,hRect,8,rotation270,widthRect,heightRect,depthRect,"francoise",1) ;
	createSquarePainting(-14.9,hRect,12.5,rotation270,heightRect,depthRect,"francoise",1) ;
	createSquarePainting(-10,hRect,14.9,rotation0,heightRect,depthRect,"francoise",2) ;
	createSquarePainting(-6,hRect,14.9,rotation0,heightRect,depthRect,"francoise",3) ;
	createSquarePainting(-2,hRect,14.9,rotation0,heightRect,depthRect,"francoise",4) ;
	createSquarePainting(2,hRect,14.9,rotation0,heightRect,depthRect,"francoise",5) ;
	createSquarePainting(6,hRect,14.9,rotation0,heightRect,depthRect,"francoise",6) ;
	createSquarePainting(10,hRect,14.9,rotation0,heightRect,depthRect,"francoise",7) ;
	createSquarePainting(14.9,hRect,12.5,rotation90,heightRect,depthRect,"francoise",8) ;
	createRectPainting(14.9,hRect,8,rotation90,widthRect,heightRect,depthRect,"francoise",2) ;
	//Bancs
	createBench(-9,hBench,8,1.25*heightBench,heightBench,4*heightBench,1);
	createBench(9,hBench,8,1.25*heightBench,heightBench,4*heightBench,-1);
	
	return scene;
}

function createRectPainting(x, y, z, rotation, width, height, depth, name, numPainting) {

	var painting = BABYLON.MeshBuilder.CreateBox("painting", {width: width, height: height, depth: depth});
	painting.position = new BABYLON.Vector3(x,y,z) ;
	var mat = new BABYLON.StandardMaterial("painting_mat");
	mat.diffuseTexture = new BABYLON.Texture("assets/tableaux/"+name+"_rect_0"+numPainting+".jpg");
	painting.material = mat;
	setRotation(painting,0,rotation,0);
	
	var indic = BABYLON.MeshBuilder.CreateBox("indic", {width: width/3, height: height/5, depth: depth});
	if (rotation == 90.0 || rotation == 270.0) {
		indic.position = new BABYLON.Vector3(x,y-2*height/3,z-width/4) ;
	} else {
		indic.position = new BABYLON.Vector3(x-width/4,y-2*height/3,z) ;
	}
	var mat = new BABYLON.StandardMaterial("indic_mat");
	mat.diffuseTexture = new BABYLON.Texture("assets/panneaux/tab_"+name+".jpg");
	indic.material = mat;
	setRotation(indic,0,rotation,0);
	
	definePaintingActions(name, numPainting, painting);
}

function createSquarePainting(x, y, z, rotation, height, depth, name, numPainting) {

	var painting = BABYLON.MeshBuilder.CreateBox("painting", {width: height, height: height, depth: depth});
	painting.position = new BABYLON.Vector3(x,y,z) ;
	var mat = new BABYLON.StandardMaterial("painting_mat");
	mat.diffuseTexture = new BABYLON.Texture("assets/tableaux/"+name+"_carr_0"+numPainting+".jpg");
	painting.material = mat;
	setRotation(painting,0,rotation,0);
	
	var indic = BABYLON.MeshBuilder.CreateBox("indic", {width: height/3, height: height/5, depth: depth});
	indic.position = new BABYLON.Vector3(x,y-2*height/3,z) ;
	var mat = new BABYLON.StandardMaterial("indic_mat");
	mat.diffuseTexture = new BABYLON.Texture("assets/panneaux/tab_"+name+".jpg");
	indic.material = mat;
	setRotation(indic,0,rotation,0);
	
	definePaintingActions(name, numPainting, painting);
}

function definePaintingActions(name, numPainting, painting) {
	
	//Liste des conditions pour l'affichage du nom, et de la description
	var conditionsNameBefore = new BABYLON.PredicateCondition(scene.actionManager, function () {
		var dist = getDistance(camera.position, painting.position);
		if (!nextToPainting && (dist <= 2.5)) {
			return true;
		}
		return false;
	});
	
	var conditionsNameAfter = new BABYLON.PredicateCondition(scene.actionManager, function () {
		var dist = getDistance(camera.position, painting.position)
		return (dist > 2.5);
	});
	
	//Liste des fonctions pour l'affichage du nom, et de la description
	var displayName = function() {
		var artistLabel;
		switch(name) {
		case "axelle":
			artistLabel = "Axelle BOSLER";
			break;
		case "eric":
			artistLabel = "Eric LE PAPE";
			break;
		case "robert":
			artistLabel = "JM ROBERT";
			break;
		case "francoise":
			artistLabel = "Françoise NIELLY";
			break;
		}
		nextToPainting=true;
		document.getElementById("infoPanel").style.display = "block";
		document.getElementById("artistLabel").innerHTML = artistLabel;
		document.getElementById("paintingLabel").innerHTML = "Tableau n°"+numPainting;
	};
	
	var hideName = function() {
		nextToPainting=false;
		document.getElementById("infoPanel").style.display = "none";
		document.getElementById("artistLabel").innerHTML = "";
		document.getElementById("paintingLabel").innerHTML = "";
	};	
	
	var displayDescription = function() {
		var descriptionLabel;
		switch(name) {
		case "axelle":
			descriptionLabel = "Axelle BOSLER";
			break;
		case "eric":
			descriptionLabel = "Eric LE PAPE";
			break;
		case "robert":
			descriptionLabel = "JM ROBERT";
			break;
		case "francoise":
			descriptionLabel = "Françoise NIELLY";
			break;
		}
		document.getElementById("descriptionLabel").innerHTML = "Ceci est la description du tableau de "+descriptionLabel+" que vous voyez actuellement.";
	};
	
	var hideDescription = function() {
		document.getElementById("descriptionLabel").innerHTML = "";
	};
		
	//Application pour l'affichage du nom, et de la description
	var actionNameBefore = new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnEveryFrameTrigger, displayName, conditionsNameBefore);
	var actionNameAfter = new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnEveryFrameTrigger, hideName, conditionsNameAfter);
	scene.actionManager.registerAction(actionNameBefore).then(actionNameAfter);
	
	var actionDescriptionBefore = new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, displayDescription);
	var actionDescriptionAfter = new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, hideDescription);
	painting.actionManager = new BABYLON.ActionManager(scene);
	painting.actionManager.registerAction(actionDescriptionBefore);
	painting.actionManager.registerAction(actionDescriptionAfter);
}

function createBench(x, y, z, width, height, depth, sens) {
	
	var benchTop = BABYLON.MeshBuilder.CreateBox("benchTop", {width: width, height: height*0.3, depth: depth});
	benchTop.position = new BABYLON.Vector3(x,y+0.7*height/2,z) ;
	var mat = new BABYLON.StandardMaterial("materiau_benchTop");
	mat.diffuseTexture = new BABYLON.Texture("assets/batiment/moquette.jpg");
	benchTop.material = mat;
	
	var benchDown = BABYLON.MeshBuilder.CreateBox("benchDown", {width: width*0.8, height: height*0.7, depth: depth*0.9});
	benchDown.position = new BABYLON.Vector3(x+sens*0.2*width/2,y-0.3*height/2,z) ;
	var mat = new BABYLON.StandardMaterial("materiau_benchDown");
	mat.diffuseTexture = new BABYLON.Texture("assets/batiment/wood.jpg");
	benchDown.material = mat;
}

function createPanel(x, y, z, rotation, width, height, depth, name) {

	var panel = BABYLON.MeshBuilder.CreateBox("panel", {width: width, height: height, depth: depth});
	panel.position = new BABYLON.Vector3(x,y,z) ;
	var mat = new BABYLON.StandardMaterial("panel_mat");
	mat.diffuseTexture = new BABYLON.Texture("assets/panneaux/panel_"+name+".jpg");
	panel.material = mat;
	setRotation(panel,0,rotation,0);
}

function createBigPanel(x, y, z, rotation, width, height, depth, name) {

	var stick = BABYLON.MeshBuilder.CreateBox("stick", {width: depth, height: height/2, depth: depth});
	stick.position = new BABYLON.Vector3(x,y-height/4,z) ;
	var mat = new BABYLON.StandardMaterial("stick_mat");
	mat.diffuseTexture = new BABYLON.Texture("assets/panneaux/bigbase.jpg");
	stick.material = mat;
	setRotation(stick,0,rotation,0);
	
	var panel = BABYLON.MeshBuilder.CreateBox("panel", {width: width, height: height, depth: depth});
	panel.position = new BABYLON.Vector3(x,y,z) ;
	var mat = new BABYLON.StandardMaterial("panel_mat");
	mat.diffuseTexture = new BABYLON.Texture("assets/panneaux/bigpanel_"+name+".jpg");
	panel.material = mat;
	setRotation(panel,20,rotation,0);
}

function createSculptureBase(x, y, z, size, matElement){
	var structure = BABYLON.MeshBuilder.CreateBox("structure", {width: size*5.2, height: size*0.2, depth: size*2.8});
	structure.position = new BABYLON.Vector3(x,y-size*1.5,z-size*1.5) ;
	var mat = new BABYLON.StandardMaterial("structure_mat");
	mat.diffuseTexture = new BABYLON.Texture("assets/panneaux/bigbase.jpg");
	structure.material = mat;	
	
	var structureBottom = BABYLON.MeshBuilder.CreateBox("structureBottom", {width: size*0.4, height: size*0.4, depth: size*5.1});
	structureBottom.position = new BABYLON.Vector3(x,y-size*1.5,z-size*1.5-size*1.3) ;
	setRotation(structureBottom,0,90,0);
	structureBottom.material = matElement;
	
	var structureLeft = BABYLON.MeshBuilder.CreateBox("structureLeft", {width: size*0.3, height: size*0.4, depth: size*3.0});
	structureLeft.position = new BABYLON.Vector3(x-2.7*size,y-size*1.5,z-size*1.5) ;
	structureLeft.material = matElement;
	
	var structureRight = BABYLON.MeshBuilder.CreateBox("structureRight", {width: size*0.3, height: size*0.4, depth: size*3.0});
	structureRight.position = new BABYLON.Vector3(x+2.7*size,y-size*1.5,z-size*1.5) ;
	structureRight.material = matElement;
}

function createSculpture01(x, y, z, size) {
	
	var matElement = new BABYLON.StandardMaterial("structure_element_mat");
	matElement.diffuseTexture = new BABYLON.Texture("assets/batiment/marble.jpg");
	matElement.diffuseTexture.uScale = 2.0;
	matElement.diffuseTexture.vScale = 1.0;
	
	createSculptureBase(x, y, z, size, matElement);
	
	var sphere01 = BABYLON.MeshBuilder.CreateSphere("sphere01", {diameter: size*1.4});
	sphere01.position = new BABYLON.Vector3(x,y-size*0.7,z-size*1.5) ;
	sphere01.material = matElement;
	
	var sphere02 = BABYLON.MeshBuilder.CreateSphere("sphere02", {diameter: size*0.6});
	sphere02.position = new BABYLON.Vector3(x,y+size*0.3,z-size*1.5) ;
	sphere02.material = matElement;
	
	var sphere03 = BABYLON.MeshBuilder.CreateSphere("sphere03", {diameter: size*0.2});
	sphere03.position = new BABYLON.Vector3(x,y+size*0.7,z-size*1.5) ;
	sphere03.material = matElement;
	
	var sphere11 = BABYLON.MeshBuilder.CreateSphere("sphere11", {diameter: size*0.6});
	sphere11.position = new BABYLON.Vector3(x+size*1.75,y-size*1.1,z-size*1.5) ;
	sphere11.material = matElement;
	
	var sphere12 = BABYLON.MeshBuilder.CreateSphere("sphere12", {diameter: size*0.2});
	sphere12.position = new BABYLON.Vector3(x+size*1.75,y-size*0.7,z-size*1.5) ;
	sphere12.material = matElement;
	
	var sphere21 = BABYLON.MeshBuilder.CreateSphere("sphere21", {diameter: size*0.6});
	sphere21.position = new BABYLON.Vector3(x-size*1.75,y-size*1.1,z-size*1.5) ;
	sphere21.material = matElement;
	
	var sphere22 = BABYLON.MeshBuilder.CreateSphere("sphere22", {diameter: size*0.2});
	sphere22.position = new BABYLON.Vector3(x-size*1.75,y-size*0.7,z-size*1.5) ;
	sphere22.material = matElement;
}

function createSculpture02(x, y, z, size) {

	var matElement = new BABYLON.StandardMaterial("structure_element_mat");
	matElement.diffuseTexture = new BABYLON.Texture("assets/batiment/marble.jpg");
	matElement.diffuseTexture.uScale = 2.0;
	matElement.diffuseTexture.vScale = 1.0;
	
	createSculptureBase(x, y, z, size, matElement);
	
	for (var i = 0; i < 9; i++) {
		var box = BABYLON.MeshBuilder.CreateBox("box", {width: size*2, height: size*0.1, depth: size*0.25});
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
		var box = BABYLON.MeshBuilder.CreateBox("box", {width: size*2, height: size*0.1, depth: size*0.25});
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