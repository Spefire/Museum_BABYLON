
function createSceneGold(engine){

  var scene = new BABYLON.Scene(engine,true) ; 
  var camera = createCamera(scene) ; 
  var light = createLight(scene) ;
  var skybox = createSkybox(scene);

  var sph = BABYLON.Mesh.CreateSphere("sph",16,1,scene) ; 
  sph.position = new BABYLON.Vector3(5,5,0) ; 

  for(var i=0; i < 100; i++){
    var sph = BABYLON.Mesh.CreateSphere("sph"+i,16,1,scene) ; 
    var x = 50*(0.5-Math.random()) ;
    var y = 10*(0.5-Math.random())+2 ; 
    var z = 50*(0.5-Math.random()) ; 
    sph.position = new BABYLON.Vector3(x,y,z) ;
    var mat = new BABYLON.StandardMaterial("materiau_gold",scene);
    mat.diffuseTexture = new BABYLON.Texture("assets/textures/gold.jpg",scene);
    sph.material = mat;
  }
  return scene;
}


function createScenePrimitive(engine){

  var scene = new BABYLON.Scene(engine,true) ; 
  var camera = createCamera(scene) ; 
  var light = createLight(scene) ;

  // var ground = createGround(100,scene) ; 

  var box = BABYLON.Mesh.CreateBox("box",1.0,scene) ; 

  var sph = BABYLON.Mesh.CreateSphere("sph",16,1,scene) ; 
  sph.position = new BABYLON.Vector3(5,5,0) ; 

  var cyl = BABYLON.Mesh.CreateCylinder("cyl",3,3,3,6,scene,false) ; 
  cyl.position = new BABYLON.Vector3(-5,2,2) ;

  var plane = BABYLON.Mesh.CreatePlane("plane",3,scene) ; 
  plane.position = new BABYLON.Vector3(0,0,10) ; 

  return scene;
}

function createSkybox(scene) {
  var skybox = BABYLON.Mesh.CreateBox("skyBox", 100.0, scene);
  var skyboxMaterial=new BABYLON.StandardMaterial("skybox",scene) ;
  skyboxMaterial.backFaceCulling= false ;
  skybox.material=skyboxMaterial ;
  skyboxMaterial.diffuseColor = new BABYLON.Color3(0,0,0);
  skyboxMaterial.specularColor = new BABYLON.Color3(0,0,0);
  skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("assets/skyboxes/TropicalSunnyDay/TropicalSunnyDay", scene);
  skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
}

function createCamera(scene){
  return new BABYLON.FreeCamera("cam",new BABYLON.Vector3(2,2,-5), scene) ; 
}

function createLight(scene){

  var light0 = new BABYLON.HemisphericLight("Hemi0", new BABYLON.Vector3(0, 1, 0), scene);
  light0.diffuse = new BABYLON.Color3(1, 1, 1);
  light0.specular = new BABYLON.Color3(1, 1, 1);
  light0.groundColor = new BABYLON.Color3(0, 0, 0);

  return light0 ;
}

function createGround(size,scene){
    return new BABYLON.Mesh.CreateGround("floor",size,size,1,scene,false) ; 
}
