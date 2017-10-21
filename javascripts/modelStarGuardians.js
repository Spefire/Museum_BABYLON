// ------------------------------- //
//   Application : Museum REV      //
//   Author : Nicholas Brun        //
//   File : modelStarGuardians.js  //
// ------------------------------- //

function createLux(x, y, z, scene) {
	BABYLON.SceneLoader.ImportMesh("", "assets/models/lux/", "lux.obj", scene, function (meshes) {
		var scale = 1.25;
		model = meshes[0];
		model.position = new BABYLON.Vector3(x,y,z) ;
		model.scaling = new BABYLON.Vector3(scale,scale,scale) ;
		model.material = new BABYLON.StandardMaterial("lux_mat", scene);
        model.material.diffuseTexture  = new BABYLON.Texture("assets/models/lux/lux.png", scene);
		model.material.diffuseTexture.hasAlpha = true;
	});
}

function createJanna(x, y, z, scene) {
	BABYLON.SceneLoader.ImportMesh("", "assets/models/janna/", "janna.obj", scene, function (meshes) {
		model = meshes[0];
		model.position = new BABYLON.Vector3(x,y,z) ;
		model.material = new BABYLON.StandardMaterial("janna_mat", scene);
        model.material.diffuseTexture  = new BABYLON.Texture("assets/models/janna/janna.png", scene);
		model.material.diffuseTexture.hasAlpha = true;
	});
}

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

function createSyndra(x, y, z, scene) {
	BABYLON.SceneLoader.ImportMesh("", "assets/models/syndra/", "syndra.obj", scene, function (meshes) {
		for (i = 0; i < meshes.length; i++) {
			if (i == 0) {
				model = meshes[i];
				model.position = new BABYLON.Vector3(x,y,z) ;
				model.material = new BABYLON.StandardMaterial("syndra_mat", scene);
				model.material.diffuseTexture  = new BABYLON.Texture("assets/models/syndra/syndra_"+i+".png", scene);
				model.material.diffuseTexture.hasAlpha = true;
			} else {
				model = meshes[i];
				model.dispose();
			}
		}
	});
}

function createSoraka(x, y, z, scene) {
	BABYLON.SceneLoader.ImportMesh("", "assets/models/soraka/", "soraka.obj", scene, function (meshes) {
		for (i = 0; i < meshes.length; i++) {
			if (i == 0) {
				model = meshes[i];
				model.position = new BABYLON.Vector3(x,y,z) ;
				model.material = new BABYLON.StandardMaterial("soraka_mat", scene);
				model.material.diffuseTexture  = new BABYLON.Texture("assets/models/soraka/soraka_"+i+".png", scene);
				model.material.diffuseTexture.hasAlpha = true;
			} else {
				model = meshes[i];
				model.dispose();
			}
		}
	});
}

function createAhri(x, y, z, scene) {
	BABYLON.SceneLoader.ImportMesh("", "assets/models/ahri/", "ahri.obj", scene, function (meshes) {
		for (i = 0; i < meshes.length; i++) {
			if (i == 0 || i == 1) {
				model = meshes[i];
				model.position = new BABYLON.Vector3(x,y,z) ;
				model.material = new BABYLON.StandardMaterial("ahri_mat", scene);
				model.material.diffuseTexture  = new BABYLON.Texture("assets/models/ahri/ahri_"+i+".png", scene);
				model.material.diffuseTexture.hasAlpha = true;
				if (i == 2) {
					model.material.alpha = 0.5;
				}
			} else {
				model = meshes[i];
				model.dispose();
			}
		}
	});
}

function createMissFortune(x, y, z, scene) {
	BABYLON.SceneLoader.ImportMesh("", "assets/models/missfortune/", "missfortune.obj", scene, function (meshes) {
		for (i = 0; i < meshes.length; i++) {
			if (i == 0) {
				model = meshes[i];
				model.position = new BABYLON.Vector3(x,y,z) ;
				model.material = new BABYLON.StandardMaterial("missfortune_mat", scene);
				model.material.diffuseTexture  = new BABYLON.Texture("assets/models/missfortune/missfortune_"+i+".png", scene);
				model.material.diffuseTexture.hasAlpha = true;
			} else {
				model = meshes[i];
				model.dispose();
			}
		}
	});
}

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

function createJinx(x, y, z, scene) {
	BABYLON.SceneLoader.ImportMesh("", "assets/models/jinx/", "jinx.obj", scene, function (meshes) {
		for (i = 0; i < meshes.length; i++) {
			if (i == 0 || i == 4) {
				model = meshes[i];
				model.position = new BABYLON.Vector3(x,y,z) ;
				model.material = new BABYLON.StandardMaterial("jinx_mat", scene);
				model.material.diffuseTexture  = new BABYLON.Texture("assets/models/jinx/jinx.png", scene);
				model.material.diffuseTexture.hasAlpha = true;
			} else {
				model = meshes[i];
				model.dispose();
			}
		}
	});
}