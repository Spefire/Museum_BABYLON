// ---------------------------- //
//   Application : Museum REV   //
//   Author : Nicholas Brun     //
//   File : modelMuseum.js      //
// ---------------------------- //

var wallHeight = 3.0;
var wallTickness = 0.2;
var floorTickness = 0.1;
var textureSize = 2.5;
var rotation0 = 0.0;
var rotation90 = 90.0;
var rotation180 = 180.0;
var rotation270 = 270.0;

var framesPerSecond = 60;
var elevatorIsMoving = false;
var elevatorIsOnMezanine = false;

function createMuseum(scene){

	//----- Extérieur -----
	createEnvironment(scene);

	//----- Rez de chaussée ------
	var offset = wallHeight*0.0;

	//Sol
	createFloor(0,offset-wallHeight/2,0,30,30);
	//Mur ouest
	createWall(15,offset,0,true,30,wallHeight,false) ;
	//Mur est
	createWall(-15,offset,4,true,22,wallHeight,false) ;
	createGlassWall(-15,offset,-9,true,4,wallHeight,false) ;
	createWall(-15,offset,-13,true,4,wallHeight,false) ;
	//Mur nord
	createWall(0,offset,15,false,30,wallHeight,false) ;
	//Mur sud
	createWall(-13,offset,-15,false,4,wallHeight,false) ;
	createGlassWall(-9,offset,-15,false,4,wallHeight,false) ;
	createWall(-6,offset,-15,false,2,wallHeight,false) ;
	createGlassWall(-4,offset,-15,false,2,wallHeight,false) ;
	createWall(-2,offset,-15,false,2,wallHeight,false) ;	
	createDoor(0.5,offset,-15,false,1,wallHeight,false);
	createDoor(-0.5,offset,-15,false,1,wallHeight,false);
	createWall(2,offset,-15,false,2,wallHeight,false) ;
	createGlassWall(4,offset,-15,false,2,wallHeight,false) ;
	createWall(6,offset,-15,false,2,wallHeight,false) ;
	createGlassWall(9,offset,-15,false,4,wallHeight,false) ;
	createWall(13,offset,-15,false,4,wallHeight,false) ;
	//Murs interieurs sur Ox
	createWall(-12,offset,0,false,6,wallHeight,true) ;
	createDoor(-8,offset,0,false,2,wallHeight,true,true);
	createWall(-4,offset,0,false,6,wallHeight,true) ;
	createDoor(0,offset,0,false,2,wallHeight,true,true);
	createWall(4,offset,0,false,6,wallHeight,true) ;
	createDoor(8,offset,0,false,2,wallHeight,true,true);
	createWall(12,offset,0,false,6,wallHeight,true) ;
	//Murs interieurs sur Oz
	createWall(-5,offset,14,true,2,wallHeight,true) ;
	createDoor(-5,offset,12.5,true,1,wallHeight,true);
	createWall(-5,offset,6,true,12,wallHeight,true) ;
	createWall(5,offset,14,true,2,wallHeight,true) ;
	createDoor(5,offset,12.5,true,1,wallHeight,true);
	createWall(5,offset,6,true,12,wallHeight,true) ;
	//Escaliers et ascensceur
	createStairs(13,offset,-2.5,4,wallHeight,5,15) ;
	createElevator(-13,offset,-2,4,wallHeight, 4, scene);

	//----- Mezanine -----
	offset = wallHeight*1.0;
	
	//Sol
	createFloor(0,offset-wallHeight/2,7.5,30,15);
	//Barriere
	createFence(0,offset-wallHeight/4,0,false,22,wallHeight/2);
	//Mur est
	createWall(15,offset,0,true,30,wallHeight,false) ;
	//Mur ouest
	createWall(-15,offset,4,true,22,wallHeight,false) ;
	createGlassWall(-15,offset,-9,true,4,wallHeight,true) ;
	createWall(-15,offset,-13,true,4,wallHeight,false) ;
	//Mur nord
	createWall(0,offset,15,false,30,wallHeight,false) ;
	//Mur sud
	createWall(-13,offset,-15,false,4,wallHeight,false) ;
	createGlassWall(-9,offset,-15,false,4,wallHeight,true) ;
	createWall(-6,offset,-15,false,2,wallHeight,false) ;
	createGlassWall(-4,offset,-15,false,2,wallHeight,true) ;
	createWall(0,offset,-15,false,6,wallHeight,false) ;
	createGlassWall(4,offset,-15,false,2,wallHeight,true) ;
	createWall(6,offset,-15,false,2,wallHeight,false) ;
	createGlassWall(9,offset,-15,false,4,wallHeight,true) ;
	createWall(13,offset,-15,false,4,wallHeight,false) ;

	//----- Toit -----
	offset = wallHeight*1.75;
	//Mur est
	createWall(15,offset,0,true,30,wallHeight/2,false) ;
	//Mur ouest
	createWall(-15,offset,0,true,30,wallHeight/2,false) ;
	//Mur nord
	createWall(0,offset,15,false,30,wallHeight/2,false) ;
	//Mur sud
	createWall(0,offset,-15,false,30,wallHeight/2,false) ;
	
	offset = wallHeight*2.5;
	//Structure
	createRoof(0,offset-wallHeight*0.5,-6,30,18);
	createRoof(-12,offset-wallHeight*0.5,7,6,8);
	createGlassRoof(-5.5,offset-wallHeight*0.5,7,7,8);
	createRoof(0,offset-wallHeight*0.5,7,4,8);
	createGlassRoof(5.5,offset-wallHeight*0.5,7,7,8);
	createRoof(12,offset-wallHeight*0.5,7,6,8);
	createRoof(0,offset-wallHeight*0.5,13,30,4);
	
	//----- Elements du musée -----
	createElementsMuseum(scene);

	return scene;
}

function createWall(x, y, z, vertical, width, height, interieur) {

	var wall = BABYLON.MeshBuilder.CreateBox("wall", {width: width, height: height, depth: wallTickness});
	wall.position = new BABYLON.Vector3(x,y,z) ;
	wall.checkCollisions = true;
	var mat = new BABYLON.StandardMaterial("wall_mat");
	if (interieur) {
		mat.diffuseTexture = new BABYLON.Texture("assets/batiment/wall_int.jpg");
	} else {
		mat.diffuseTexture = new BABYLON.Texture("assets/batiment/wall.jpg");
	}
	mat.diffuseTexture.uScale = width/textureSize;
	mat.diffuseTexture.vScale = 1.0;
	wall.material = mat;
	if (vertical) {
		setRotation(wall,0,90,0);
	}
}

function createFence(x, y, z, vertical, width, height) {

	var fence = BABYLON.MeshBuilder.CreatePlane("fence", {width: width, height: height, sideOrientation:BABYLON.Mesh.DOUBLESIDE});
	fence.position = new BABYLON.Vector3(x,y,z) ;
	fence.checkCollisions = true;
	var mat = new BABYLON.StandardMaterial("fence_mat");
	mat.diffuseTexture = new BABYLON.Texture("assets/batiment/fence.png");
	mat.diffuseTexture.uScale = width/textureSize;
	mat.diffuseTexture.vScale = 1.0;
	mat.diffuseTexture.hasAlpha = true;
	fence.material = mat;
	setRotation(fence,0,180,0);
	if (vertical) {
		setRotation(fence,0,90,0);
	}
}

function createFloor(x, y, z, width, depth) {

	var floor = BABYLON.MeshBuilder.CreateBox("floor", {width: width, height: floorTickness, depth: depth});
	floor.position = new BABYLON.Vector3(x,y,z) ;
	floor.checkCollisions = true;
	var mat = new BABYLON.StandardMaterial("floor_mat");
	mat.diffuseTexture = new BABYLON.Texture("assets/batiment/floor.jpg");
	mat.diffuseTexture.uScale = width/textureSize;
	mat.diffuseTexture.vScale = width/textureSize;
	floor.material = mat;
	return floor;
}

function createDoor(x, y, z, vertical, width, height, interieur, activated) {

	var wall = BABYLON.MeshBuilder.CreateBox("wall", {width: width, height: height*0.2, depth: wallTickness},);
	wall.position = new BABYLON.Vector3(x,y+0.4*height,z) ;
	var mat = new BABYLON.StandardMaterial("wall_mat");
	if (interieur) {
		mat.diffuseTexture = new BABYLON.Texture("assets/batiment/wall_int.jpg");
	} else {
		mat.diffuseTexture = new BABYLON.Texture("assets/batiment/wall.jpg");
	}
	mat.diffuseTexture.uScale = width/textureSize;
	mat.diffuseTexture.vScale = 0.2;
	wall.material = mat;
	
	if (vertical) {
		setRotation(wall,0,90,0);
	}
	
	if (activated) {
		var door = BABYLON.MeshBuilder.CreateBox("door", {width: width, height: height*0.8, depth: wallTickness/2},);
		door.position = new BABYLON.Vector3(x,y-0.1*height,z) ;
		door.checkCollisions = true;
		mat = new BABYLON.StandardMaterial("door_mat");
		mat.diffuseTexture = new BABYLON.Texture("assets/batiment/fence.png");
		mat.diffuseTexture.uScale = 1.0;
		mat.diffuseTexture.vScale = 0.8;
		mat.diffuseTexture.hasAlpha = true;
		door.material = mat;

		if (vertical) {
			setRotation(door,0,90,0);
		}
		
		var conditionsAvant = new BABYLON.PredicateCondition(scene.actionManager, function () {
			var dist = getDistance(camera.position, door.position);
			return (dist <= 5);
		});
		var conditionsApres = new BABYLON.PredicateCondition(scene.actionManager, function () {
			var dist = getDistance(camera.position, door.position);
			return (dist > 5);
		});
		
		var actionAvant = new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnEveryFrameTrigger, door, "position.x", door.position.x-2, 2000, conditionsAvant);
		var actionApres = new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnEveryFrameTrigger, door, "position.x", door.position.x, 2000, conditionsApres);
		scene.actionManager.registerAction(actionAvant).then(actionApres);
	}
}

function createGlassWall(x, y, z, vertical, width, height, upper) {

	var wall = BABYLON.MeshBuilder.CreateBox("wall", {width: width, height: height*0.2, depth: wallTickness});
	if (upper) {
		wall.position = new BABYLON.Vector3(x,y+0.4*height,z) ;
	} else {
		wall.position = new BABYLON.Vector3(x,y-0.4*height,z) ;
	}
	var mat = new BABYLON.StandardMaterial("wall_mat");
	mat.diffuseTexture = new BABYLON.Texture("assets/batiment/wall.jpg");
	mat.diffuseTexture.uScale = width/textureSize;
	mat.diffuseTexture.vScale = 0.2;
	wall.material = mat;
	wall.checkCollisions = true;

	var glass = BABYLON.MeshBuilder.CreateBox("glass", {width: width, height: height*0.8, depth: wallTickness});
	if (upper) {
		glass.position = new BABYLON.Vector3(x,y-0.1*height,z) ;
	} else {
		glass.position = new BABYLON.Vector3(x,y+0.1*height,z) ;
	}
	mat = new BABYLON.StandardMaterial("glass_mat");
	mat.diffuseTexture = new BABYLON.Texture("assets/batiment/glass.png");
	mat.alpha = 0.4;
	glass.material = mat;
	glass.checkCollisions = true;

	if (vertical) {
		setRotation(wall,0,90,0);
		setRotation(glass,0,90,0);
	}
}

function createStairs(x, y, z, width, height, depth, nb) {
	var stairsArray = [];
	for (var i = 0; i < nb; i++) {
		var h = height*(nb-i)/nb;
		var w = width;
		var d = depth/nb;
		var stair = BABYLON.MeshBuilder.CreateBox("stairs", {width: w, height: h, depth: d});

		var posX = x;
		var posY = y-i*height/(nb*2)
		var posZ = z+depth/2-depth/(nb*2)-i*depth/nb
		stair.position = new BABYLON.Vector3(posX,posY,posZ) ;

		var mat = new BABYLON.StandardMaterial("stairs_mat");
		mat.diffuseTexture = new BABYLON.Texture("assets/batiment/iron.jpg");
		mat.diffuseTexture.uScale = width/textureSize;
		mat.diffuseTexture.vScale = width/textureSize;
		stair.material = mat;
		stairsArray[i] = stair;
	}
	var stairs = BABYLON.Mesh.MergeMeshes(stairsArray);
	//createWall(x, y, z, true, width, height, interieur);
	//createFence(x, y, z, true, width, height);
	stairs.checkCollisions = true;
}

function createRoof(x, y, z, width, depth) {
	var roof = BABYLON.MeshBuilder.CreateBox("roof", {width: width, height: floorTickness, depth: depth});
	roof.position = new BABYLON.Vector3(x,y,z) ;
	roof.checkCollisions = true;
	var mat = new BABYLON.StandardMaterial("roof_mat");
	mat.diffuseTexture = new BABYLON.Texture("assets/batiment/roof.jpg");
	mat.diffuseTexture.uScale = width/textureSize;
	mat.diffuseTexture.vScale = width/textureSize;
	roof.material = mat;
}

function createGlassRoof(x, y, z, width, depth) {
	var roof = BABYLON.MeshBuilder.CreateBox("roof", {width: width, height: floorTickness, depth: depth});
	roof.position = new BABYLON.Vector3(x,y,z) ;
	roof.checkCollisions = true;
	var mat = new BABYLON.StandardMaterial("roof_mat");
	mat.diffuseTexture = new BABYLON.Texture("assets/batiment/glass.png");
	mat.diffuseTexture.uScale = width/textureSize;
	mat.diffuseTexture.vScale = width/textureSize;
	mat.alpha = 0.4;
	roof.material = mat;
}

function createElevator(x, y, z, width, height, depth) {

	createWall(x-width/4-0.5,y,z-depth/2,false,width/2-1,height,false) ;
	createDoor(x,y,z-depth/2,false,2,wallHeight,false);
	createWall(x+width/4+0.5,y,z-depth/2,false,width/2-1,height,false) ;
	
	createWall(x,y+height,z-depth/2,false,width,height,false) ;

	createWall(x-width/4-0.5,y+height,z+depth/2,false,width/2-1,height,false) ;
	createDoor(x,y+height,z+depth/2,false,2,wallHeight,false);
	createWall(x+width/4+0.5,y+height,z+depth/2,false,width/2-1,height,false) ;

	createWall(x+width/2,y,z,true,width,height,false) ;
	createWall(x+width/2,y+height,z,true,width,height,false) ;
	
	createRoof(x,y+height*1.5,z,width,depth);
	var buttonUp = createButtonUpElevator(x+width/2-0.1,y+0.2,z-depth/4,0.4,0.4,0.1,false);
	var buttonDown = createButtonDownElevator(x+width/2-0.1,y+0.2,z+depth/4,0.4,0.4,0.1,false);
	var buttonCallUp = createButtonUpElevator(x+width/3,y+height+0.2,z+depth/2+0.1,0.4,0.4,0.1,true);
	var buttonCallDown = createButtonDownElevator(x+width/3,y+0.2,z-depth/2-0.1,0.4,0.4,0.1,true);

	var elevator = BABYLON.MeshBuilder.CreateBox("elevator", {width: width, height: floorTickness*1.1, depth: depth});
	elevator.position = new BABYLON.Vector3(x,y-height/2,z) ;
	elevator.checkCollisions = true;
	var elevatorSupport = BABYLON.MeshBuilder.CreateBox("elevatorSupport", {width: width, height: floorTickness*1.1, depth: depth});
	elevatorSupport.position = new BABYLON.Vector3(x,y-height/2,z) ;
	elevatorSupport.checkCollisions = true;
	var mat = new BABYLON.StandardMaterial("elevator_mat");
	mat.diffuseTexture = new BABYLON.Texture("assets/batiment/iron.jpg");
	elevator.material = mat;
	elevatorSupport.material = mat;
		
	var movingUp = function() {
		////////////////////////
		var keysElevator = []; 
		keysElevator.push({
			frame: 0,
			value: y-height/2
		});
		keysElevator.push({
			frame: framesPerSecond*6,
			value: y+height/2
		});
		var keysButtons = []; 
		keysButtons.push({
			frame: 0,
			value: y+0.2
		});
		keysButtons.push({
			frame: framesPerSecond*6,
			value: y+height+0.2
		});
		////////////////////////
		elevatorIsMoving = true;
		moveAnimations(keysElevator, keysButtons, true);
	}
	
	var movingDown = function() {
		////////////////////////
		var keysElevator = []; 
		keysElevator.push({
			frame: 0,
			value: y+height/2
		});
		keysElevator.push({
			frame: framesPerSecond*6,
			value: y-height/2
		});
		var keysButtons = []; 
		keysButtons.push({
			frame: 0,
			value: y+height+0.2
		});
		keysButtons.push({
			frame: framesPerSecond*6,
			value: y+0.2
		});
		////////////////////////
		elevatorIsMoving = true;
		moveAnimations(keysElevator, keysButtons, false);
	}
	
	var moveAnimations = function(keysElevator, keysButtons, elevatorWillBeOnMezanine) {
		var animationElevator = new BABYLON.Animation("animationElevator", "position.y", framesPerSecond, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
		animationElevator.setKeys(keysElevator);
		var animationButtonUp = new BABYLON.Animation("animationButtonUp", "position.y", framesPerSecond, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
		animationButtonUp.setKeys(keysButtons);
		var animationButtonDown = new BABYLON.Animation("animationButtonDown", "position.y", framesPerSecond, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
		animationButtonDown.setKeys(keysButtons);
		////////////////////////
		elevator.animations = [];
		buttonUp.animations = [];
		buttonDown.animations = [];
		////////////////////////
		elevator.animations.push(animationElevator);
		buttonUp.animations.push(animationButtonUp);
		buttonDown.animations.push(animationButtonDown);
		////////////////////////
		scene.beginAnimation(elevator, 0, framesPerSecond*6, false, 1.0, function() { elevatorIsMoving=false; elevatorIsOnMezanine=elevatorWillBeOnMezanine; });
		scene.beginAnimation(buttonUp, 0, framesPerSecond*6, false);
		scene.beginAnimation(buttonDown, 0, framesPerSecond*6, false);
	}
	
	buttonUp.actionManager = new BABYLON.ActionManager(scene);
	buttonDown.actionManager = new BABYLON.ActionManager(scene);
	buttonCallUp.actionManager = new BABYLON.ActionManager(scene);
	buttonCallDown.actionManager = new BABYLON.ActionManager(scene);
	var conditionsMovingUp = new BABYLON.PredicateCondition(buttonUp.actionManager, function () {
		return (!elevatorIsMoving && !elevatorIsOnMezanine);
	});
	var conditionsMovingDown = new BABYLON.PredicateCondition(buttonDown.actionManager, function () {
		return (!elevatorIsMoving && elevatorIsOnMezanine);
	});
	var actionUp = new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger, movingUp, conditionsMovingUp);
	var actionDown = new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger, movingDown, conditionsMovingDown);
	buttonUp.actionManager.registerAction(actionUp);
	buttonDown.actionManager.registerAction(actionDown);
	buttonCallUp.actionManager.registerAction(actionUp);
	buttonCallDown.actionManager.registerAction(actionDown);
}

function createButtonUpElevator(x, y, z, width, height, depth, call) {
	
	var buttonUp = BABYLON.MeshBuilder.CreateBox("buttonUp", {width: width, height: height, depth: depth});
	buttonUp.position = new BABYLON.Vector3(x,y,z) ;
	var mat = new BABYLON.StandardMaterial("buttonUp_mat");
	mat.diffuseTexture = new BABYLON.Texture("assets/batiment/iron.jpg");
	buttonUp.material = mat;
	if (!call) {
		setRotation(buttonUp,0,90,0);
	}
	return buttonUp;
}

function createButtonDownElevator(x, y, z, width, height, depth, call) {
	
	var buttonDown = BABYLON.MeshBuilder.CreateBox("buttonDown", {width: width, height: height, depth: depth});
	buttonDown.position = new BABYLON.Vector3(x,y,z) ;
	var mat = new BABYLON.StandardMaterial("buttonDown_mat");
	mat.diffuseTexture = new BABYLON.Texture("assets/batiment/iron.jpg");
	buttonDown.material = mat;
	if (!call) {
		setRotation(buttonDown,0,90,0);
	}
	return buttonDown;
}