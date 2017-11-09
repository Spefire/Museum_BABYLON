// ---------------------------- //
//   Application : Museum REV   //
//   Author : Nicholas Brun     //
//   File : modelMuseum.js      //
// ---------------------------- //

var wallTickness = 0.2;
var wallHeight = 3.0;
var floorTickness = 0.1;
var textureSize = 2.5;
var rotation0 = 0.0;
var rotation90 = 90.0;
var rotation180 = 180.0;
var rotation270 = 270.0;

function createMuseum(scene){

	//----- Extérieur -----
	createEnvironment(scene);

	//----- Rez de chaussée ------
	var offset = wallHeight*0.0;

	//Sol
	createFloor(0,offset-wallHeight/2,0,30,floorTickness,30);
	//Mur ouest
	createWall(15,offset,0,true,30,wallHeight,wallTickness,false) ;
	//Mur est
	createWall(-15,offset,4,true,22,wallHeight,wallTickness,false) ;
	createGlassWall(-15,offset,-9,true,4,wallHeight,wallTickness,false) ;
	createWall(-15,offset,-13,true,4,wallHeight,wallTickness,false) ;
	//Mur nord
	createWall(0,offset,15,false,30,wallHeight,wallTickness,false) ;
	//Mur sud
	createWall(-13,offset,-15,false,4,wallHeight,wallTickness,false) ;
	createGlassWall(-9,offset,-15,false,4,wallHeight,wallTickness,false) ;
	createWall(-6,offset,-15,false,2,wallHeight,wallTickness,false) ;
	createGlassWall(-4,offset,-15,false,2,wallHeight,wallTickness,false) ;
	createWall(-2,offset,-15,false,2,wallHeight,wallTickness,false) ;	
	createDoor(0.5,offset,-15,false,1,wallHeight,wallTickness,false);
	createDoor(-0.5,offset,-15,false,1,wallHeight,wallTickness,false);
	createWall(2,offset,-15,false,2,wallHeight,wallTickness,false) ;
	createGlassWall(4,offset,-15,false,2,wallHeight,wallTickness,false) ;
	createWall(6,offset,-15,false,2,wallHeight,wallTickness,false) ;
	createGlassWall(9,offset,-15,false,4,wallHeight,wallTickness,false) ;
	createWall(13,offset,-15,false,4,wallHeight,wallTickness,false) ;
	//Murs interieurs sur Ox
	createWall(-12,offset,0,false,6,wallHeight,wallTickness,true) ;
	createDoor(-8,offset,0,false,2,wallHeight,wallTickness,true,true);
	createWall(-4,offset,0,false,6,wallHeight,wallTickness,true) ;
	createDoor(0,offset,0,false,2,wallHeight,wallTickness,true,true);
	createWall(4,offset,0,false,6,wallHeight,wallTickness,true) ;
	createDoor(8,offset,0,false,2,wallHeight,wallTickness,true,true);
	createWall(12,offset,0,false,6,wallHeight,wallTickness,true) ;
	//Murs interieurs sur Oz
	createWall(-5,offset,14,true,2,wallHeight,wallTickness,true) ;
	createDoor(-5,offset,12.5,true,1,wallHeight,wallTickness,true);
	createWall(-5,offset,6,true,12,wallHeight,wallTickness,true) ;
	createWall(5,offset,14,true,2,wallHeight,wallTickness,true) ;
	createDoor(5,offset,12.5,true,1,wallHeight,wallTickness,true);
	createWall(5,offset,6,true,12,wallHeight,wallTickness,true) ;
	//Escaliers et ascensceur
	createStairs(13,offset,-2.5,4,wallHeight,5,20) ;
	createElevator(-13,offset,-2,4,wallHeight,wallTickness, 4, scene);

	//----- Mezanine -----
	offset = wallHeight*1.0;
	
	//Sol
	createFloor(0,offset-wallHeight/2,7.5,30,floorTickness,15);
	//Barriere
	createFence(0,offset-wallHeight/4,0,false,22,wallHeight/2);
	//Mur est
	createWall(15,offset,0,true,30,wallHeight,wallTickness,false) ;
	//Mur ouest
	createWall(-15,offset,4,true,22,wallHeight,wallTickness,false) ;
	createGlassWall(-15,offset,-9,true,4,wallHeight,wallTickness,true) ;
	createWall(-15,offset,-13,true,4,wallHeight,wallTickness,false) ;
	//Mur nord
	createWall(0,offset,15,false,30,wallHeight,wallTickness,false) ;
	//Mur sud
	createWall(-13,offset,-15,false,4,wallHeight,wallTickness,false) ;
	createGlassWall(-9,offset,-15,false,4,wallHeight,wallTickness,true) ;
	createWall(-6,offset,-15,false,2,wallHeight,wallTickness,false) ;
	createGlassWall(-4,offset,-15,false,2,wallHeight,wallTickness,true) ;
	createWall(0,offset,-15,false,6,wallHeight,wallTickness,false) ;
	createGlassWall(4,offset,-15,false,2,wallHeight,wallTickness,true) ;
	createWall(6,offset,-15,false,2,wallHeight,wallTickness,false) ;
	createGlassWall(9,offset,-15,false,4,wallHeight,wallTickness,true) ;
	createWall(13,offset,-15,false,4,wallHeight,wallTickness,false) ;

	//----- Toit -----
	offset = wallHeight*1.75;
	//Mur est
	createWall(15,offset,0,true,30,wallHeight/2,wallTickness,false) ;
	//Mur ouest
	createWall(-15,offset,0,true,30,wallHeight/2,wallTickness,false) ;
	//Mur nord
	createWall(0,offset,15,false,30,wallHeight/2,wallTickness,false) ;
	//Mur sud
	createWall(0,offset,-15,false,30,wallHeight/2,wallTickness,false) ;
	
	offset = wallHeight*2.5;
	//Structure
	createRoof(0,offset-wallHeight*0.5,-6,30,floorTickness,18);
	createRoof(-12,offset-wallHeight*0.5,7,6,floorTickness,8);
	createGlassRoof(-5.5,offset-wallHeight*0.5,7,7,floorTickness,8);
	createRoof(0,offset-wallHeight*0.5,7,4,floorTickness,8);
	createGlassRoof(5.5,offset-wallHeight*0.5,7,7,floorTickness,8);
	createRoof(12,offset-wallHeight*0.5,7,6,floorTickness,8);
	createRoof(0,offset-wallHeight*0.5,13,30,floorTickness,4);
	
	//----- Elements du musée -----
	createElementsMuseum(scene);

	return scene;
}

function createWall(x, y, z, vertical, width, height, depth, interieur) {

	var wall = BABYLON.MeshBuilder.CreateBox("wall", {width: width, height: height, depth: depth});
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
		setRotation(fence,0,270,0);
	}
}

function createFloor(x, y, z, width, height, depth) {

	var floor = BABYLON.MeshBuilder.CreateBox("floor", {width: width, height: height, depth: depth});
	floor.position = new BABYLON.Vector3(x,y,z) ;
	floor.checkCollisions = true;
	var mat = new BABYLON.StandardMaterial("floor_mat");
	mat.diffuseTexture = new BABYLON.Texture("assets/batiment/floor.jpg");
	mat.diffuseTexture.uScale = width/textureSize;
	mat.diffuseTexture.vScale = width/textureSize;
	floor.material = mat;
	return floor;
}

function createDoor(x, y, z, vertical, width, height, depth, interieur, activated) {

	var wall = BABYLON.MeshBuilder.CreateBox("wall", {width: width, height: height*0.2, depth: depth},);
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
		var door = BABYLON.MeshBuilder.CreateBox("door", {width: width, height: height*0.8, depth: depth/2},);
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

function createGlassWall(x, y, z, vertical, width, height, depth, upper) {

	var wall = BABYLON.MeshBuilder.CreateBox("wall", {width: width, height: height*0.2, depth: depth});
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

	var glass = BABYLON.MeshBuilder.CreateBox("glass", {width: width, height: height*0.8, depth: depth});
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
		mat.diffuseTexture = new BABYLON.Texture("assets/batiment/stairs.jpg");
		mat.diffuseTexture.uScale = width/textureSize;
		mat.diffuseTexture.vScale = width/textureSize;
		stair.material = mat;
		stairsArray[i] = stair;
	}
	var stairs = BABYLON.Mesh.MergeMeshes(stairsArray);
	stairs.checkCollisions = true;
}

function createRoof(x, y, z, width, height, depth) {
	var roof = BABYLON.MeshBuilder.CreateBox("roof", {width: width, height: height, depth: depth});
	roof.position = new BABYLON.Vector3(x,y,z) ;
	roof.checkCollisions = true;
	var mat = new BABYLON.StandardMaterial("roof_mat");
	mat.diffuseTexture = new BABYLON.Texture("assets/batiment/roof.jpg");
	mat.diffuseTexture.uScale = width/textureSize;
	mat.diffuseTexture.vScale = width/textureSize;
	roof.material = mat;
}

function createGlassRoof(x, y, z, width, height, depth) {
	var roof = BABYLON.MeshBuilder.CreateBox("roof", {width: width, height: height, depth: depth});
	roof.position = new BABYLON.Vector3(x,y,z) ;
	roof.checkCollisions = true;
	var mat = new BABYLON.StandardMaterial("roof_mat");
	mat.diffuseTexture = new BABYLON.Texture("assets/batiment/glass.png");
	mat.diffuseTexture.uScale = width/textureSize;
	mat.diffuseTexture.vScale = width/textureSize;
	mat.alpha = 0.4;
	roof.material = mat;
}

function createElevator(x, y, z, width, height, tickness, depth) {

	createWall(x-width/4-0.25,y,z-depth/2,false,width/2-0.5,height,tickness,false) ;
	createDoor(x,y,z-depth/2,false,1.0,wallHeight,wallTickness,false);
	createWall(x+width/4+0.25,y,z-depth/2,false,width/2-0.5,height,tickness,false) ;
	createWall(x,y+height,z-depth/2,false,width,height,tickness,false) ;

	createWall(x-width/4-0.25,y+height,z+depth/2,false,width/2-0.5,height,tickness,false) ;
	createDoor(x,y+height,z+depth/2,false,1.0,wallHeight,wallTickness,false);
	createWall(x+width/4+0.25,y+height,z+depth/2,false,width/2-0.5,height,tickness,false) ;

	createWall(x+width/2,y,z,true,width,height,tickness,false) ;
	createWall(x+width/2,y+height,z,true,width,height,tickness,false) ;
	
	createRoof(x,y+height*1.5,z,width,floorTickness,depth);
	createButtonUpElevator(x+width/2-0.1,y+0.2,z,0.5,0.4,0.1);
	createButtonDownElevator(x+width/2-0.1,y-0.2,z,0.5,0.4,0.1);

	var elevator = BABYLON.MeshBuilder.CreateBox("elevator", {width: width, height: floorTickness*1.1, depth: depth});
	elevator.position = new BABYLON.Vector3(x,y+height/2,z) ;
	elevator.checkCollisions = true;
	var mat = new BABYLON.StandardMaterial("elevator_mat");
	mat.diffuseTexture = new BABYLON.Texture("assets/batiment/moquette.jpg");
	elevator.material = mat;
	
	var keys = []; 
	keys.push({
		frame: 0,
		value: y+height/2
	});
	keys.push({
		frame: 50,
		value: y+height/2
	});
	keys.push({
		frame: 200,
		value: y-height/2
	});
	keys.push({
		frame: 300,
		value: y-height/2
	});
	keys.push({
		frame: 450,
		value: y+height/2
	});
	keys.push({
		frame: 500,
		value: y+height/2
	});
	var animationBox = new BABYLON.Animation("myAnimation", "position.y", 24, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
	animationBox.setKeys(keys);
	elevator.animations = [];
	elevator.animations.push(animationBox);
	scene.beginAnimation(elevator, 0, 500, true);
}

function createButtonUpElevator(x, y, z, width, height, depth) {
	
	var buttonUp = BABYLON.MeshBuilder.CreateBox("buttonUp", {width: width, height: height, depth: depth});
	buttonUp.position = new BABYLON.Vector3(x,y,z) ;
	var mat = new BABYLON.StandardMaterial("buttonUp_mat");
	mat.diffuseTexture = new BABYLON.Texture("assets/batiment/moquette.jpg");
	buttonUp.material = mat;
	setRotation(buttonUp,0,90,0);
}

function createButtonDownElevator(x, y, z, width, height, depth, scene) {
	
	var buttonDown = BABYLON.MeshBuilder.CreateBox("buttonDown", {width: width, height: height, depth: depth});
	buttonDown.position = new BABYLON.Vector3(x,y,z) ;
	var mat = new BABYLON.StandardMaterial("buttonDown_mat");
	mat.diffuseTexture = new BABYLON.Texture("assets/batiment/stairs.jpg");
	buttonDown.material = mat;
	setRotation(buttonDown,0,90,0);
}