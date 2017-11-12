// ---------------------------- //
//   Application : Museum REV   //
//   Author : Nicholas Brun     //
//   File : modelScene.js       //
// ---------------------------- //

var camera;
var ambLight;
var dirLight;
var skybox;
var scene;

function createScene(engine){
	scene = new BABYLON.Scene(engine,true) ; 
	createCamera(scene) ; 
	createLight(scene) ;
	createSkybox(scene);
	createMaterials(scene);
	scene.actionManager = new BABYLON.ActionManager(scene);
	scene.gravity = new BABYLON.Vector3(0, -0.1, 0);
	scene.collisionsEnabled = true;
	scene.activeCamera = camera;	
	createMuseum(scene);
	return scene;
}

function createSkybox() {
	skybox = BABYLON.Mesh.CreateBox("skyBox", 1000.0, scene);
	var skyboxMaterial=new BABYLON.StandardMaterial("skybox",scene) ;
	skyboxMaterial.backFaceCulling= false ;
	skybox.material=skyboxMaterial ;
	skyboxMaterial.diffuseColor = new BABYLON.Color3(0,0,0);
	skyboxMaterial.specularColor = new BABYLON.Color3(0,0,0);
	skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("assets/skyboxes/TropicalSunnyDay/TropicalSunnyDay", scene);
	skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
}

function createCamera(){
	camera = new BABYLON.FreeCamera("cam",new BABYLON.Vector3(0, 1, -30), scene) ;
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
}

function createLight(){
	ambLight = new BABYLON.HemisphericLight("ambLight", new BABYLON.Vector3(0, 1, 0), scene);
	ambLight.diffuse = new BABYLON.Color3(0.9, 0.9, 0.9);
	ambLight.specular = new BABYLON.Color3(0, 0, 0);
	ambLight.groundColor = new BABYLON.Color3(0.4, 0.4, 0.4);
	dirLight = new BABYLON.DirectionalLight("dirLight", new BABYLON.Vector3(1, -1, 1), scene);
	dirLight.diffuse = new BABYLON.Color3(0.7, 0.7, 0.7);
	dirLight.specular = new BABYLON.Color3(0.3, 0.3, 0.3);
	dirLight.groundColor = new BABYLON.Color3(0, 0, 0);
}