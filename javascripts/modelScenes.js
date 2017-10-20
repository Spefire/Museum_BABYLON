// ---------------------------- //
//   Application : Museum REV   //
//   Author : Nicholas Brun     //
//   File : modelScene.js       //
// ---------------------------- //

function createScene(engine){
	var scene = new BABYLON.Scene(engine,true) ; 
	var camera = createCamera(scene) ; 
	var light = createLight(scene) ;
	var skybox = createSkybox(scene);
	var museum = createMuseum(scene);
	scene.gravity = new BABYLON.Vector3(0, -0.1, 0);
	scene.collisionsEnabled = true;
	scene.activeCamera = camera;
	return scene;
}

function createSkybox(scene) {
	var skybox = BABYLON.Mesh.CreateBox("skyBox", 1000.0, scene);
	var skyboxMaterial=new BABYLON.StandardMaterial("skybox",scene) ;
	skyboxMaterial.backFaceCulling= false ;
	skybox.material=skyboxMaterial ;
	skyboxMaterial.diffuseColor = new BABYLON.Color3(0,0,0);
	skyboxMaterial.specularColor = new BABYLON.Color3(0,0,0);
	skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("assets/skyboxes/TropicalSunnyDay/TropicalSunnyDay", scene);
	skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
	return skybox;
}

function createCamera(scene){
	var camera = new BABYLON.FreeCamera("cam",new BABYLON.Vector3(0, 1, -5), scene) ;
	camera.ellipsoid = new BABYLON.Vector3(0.25, 1, 0.25);
	camera.setTarget(BABYLON.Vector3.Zero());
	camera.keysLeft = [81, 37]; //Q et <-
	camera.keysUp = [90, 38]; //Z et Flèche du haut
	camera.keysRight = [68, 39]; //D et ->
	camera.keysDown = [83, 40]; //S et flèche du bas
	camera.speed = 0.25;
	camera.angularSensibility = 3000;
	camera.minZ = 0.05;
	camera.maxZ = 10000;
	camera.applyGravity = true;
	camera.checkCollisions = true;

	/*var hitbox = BABYLON.Mesh.CreateSphere("hitbox", 16, 0.5, scene);
	hitbox.position = new BABYLON.Vector3(0, 1, -5);
	hitbox.checkCollisions = true;
	hitbox.parent = camera;*/

	return camera;
}

function createLight(scene){
	var light0 = new BABYLON.HemisphericLight("Hemi0", new BABYLON.Vector3(0, 1, 0), scene);
	light0.diffuse = new BABYLON.Color3(1, 1, 1);
	light0.specular = new BABYLON.Color3(1, 1, 1);
	light0.groundColor = new BABYLON.Color3(0, 0, 0);
	return light0 ;
}