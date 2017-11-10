// ---------------------------- //
//   Application : Museum REV   //
//   Author : Nicholas Brun     //
//   File : modelAgents.js       //
// ---------------------------- //

var vmax = 1;
var r_sep = 5;
var r_ali = 5;
var r_coh = 5;
var k_sep = 1;
var k_ali = 1;
var k_coh = 1;
var agents = [];

class Agent {
	constructor(mesh) {
		this.mesh = mesh;
		this.vpos = new BABYLON.Vector3(0,0,0) ;
		this.vrot = new BABYLON.Vector3(0,0,0) ;
	}
	
	calculFsep(){
		var Fsep = new BABYLON.Vector3(0,0,0) ;
		var environ = agents;
		environ.forEach(function(element) {
			var AiA = this.mesh.position.subtract(element.position);
			var result = AiA.divide(BABYLON.Vector3.DistanceSquared(this.mesh.position, element.position));
			Fsep.add(result);
		});
		return Fsep;
	}
	
	calculFali(){
		return new BABYLON.Vector3(0,0,0) ;
	}
	
	calculFcoh(){
		return new BABYLON.Vector3(0,0,0) ;
	}
	
	updateFs(){
		var fspos = k_sep*calculFsep() + k_coh*calculFcoh();
		var fsrot = k_ali*calculFali();
		move(fspos, fsrot);
	}
	
	move(fspos, fsrot){
		this.mesh.position.x += fspos.x;
		this.mesh.position.y += fspos.y;
		this.mesh.position.z += fspos.z;
		this.mesh.rotation.x += fsrot.x;
		this.mesh.rotation.y += fsrot.y;
		this.mesh.rotation.z += fsrot.z;
		this.vpos=fspos;
		this.vrot=fsrot;
	}
}

function createAgents(){
	var agentConductorMesh = BABYLON.MeshBuilder.CreateBox("agentConductor", {width: 1.0, height: 0.3, depth: 1.0});
	agentConductorMesh.position = new BABYLON.Vector3(0, 1, -5) ;
	agentConductorMesh.checkCollisions = true;
	agentConductorMesh.material = mat_iron;
	var agentConductor = new Agent(agentConductorMesh);
	agents.push(agentConductor);
	
	var agent01Mesh = BABYLON.MeshBuilder.CreateBox("agent01", {width: 1.0, height: 0.3, depth: 1.0});
	agent01Mesh.position = new BABYLON.Vector3(0, 5, -5) ;
	agent01Mesh.checkCollisions = true;
	agent01Mesh.material = mat_marble;
	var agent01 = new Agent(agent01Mesh);
	agents.push(agent01);
	
	var actionAgent01 = new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnEveryFrameTrigger, agent01.updateFs);
	scene.actionManager.registerAction(actionAgent01);
}