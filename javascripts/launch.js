// ---------------------------- //
//   Application : Museum REV   //
//   Author : Nicholas Brun     //
//   File : launch.js           //
// ---------------------------- //

window.onload = init ;

function init(){

  // =============================================
  // Création de la structure principale graphique
  // =============================================

  var canvas = document.getElementById("canvas") ; 
  var engine = new BABYLON.Engine(canvas,true) ; 
  var scene = createScene(engine) ;
  
  scene.debugLayer.show() ; 
  scene.activeCamera.attachControl(canvas) ;

  // ==================================================
  // Gestion des controles de la camera et de la souris
  // ==================================================

  var islocked = false;
  scene.onPointerDown = function(evt){
      if (!islocked) {
	  canvas.requestPointerLock = canvas.requestPointerLock || canvas.msRequestPointerLock || canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock || false; 
	  //Test des requêtes de divers navigateurs
	  if (canvas.requestPointerLock) //Si la requête aboutie,
	      canvas.requestPointerLock(); //On appelle la fonction
      }
  };
  var pointerlockchange = function (){
    var controlEnabled = document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement || document.pointerLockElement || false;
    if (!controlEnabled) {
        scene.activeCamera.detachControl(canvas);
        islocked = false;
    } else {
        scene.activeCamera.attachControl(canvas);
        islocked = true;
    }
  };
  document.addEventListener("pointerlockchange", pointerlockchange, false);
  document.addEventListener("mspointerlockchange", pointerlockchange, false);
  document.addEventListener("mozpointerlockchange", pointerlockchange, false);
  document.addEventListener("webkitpointerlockchange", pointerlockchange, false);

  // ====================
  // Callback d'affichage
  // ====================
  engine.runRenderLoop(function(){scene.render();}) ; 

  // ======================
  // Callback de retaillage
  // ======================
  window.addEventListener("resize", function (){engine.resize();});
}

