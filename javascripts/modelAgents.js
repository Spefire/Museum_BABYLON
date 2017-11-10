// ---------------------------- //
//   Application : Museum REV   //
//   Author : Nicholas Brun     //
//   File : modelAgents.js       //
// ---------------------------- //

var vmax = 1;
var k_sep = 0.25;
var k_ali = 0.1;
var k_coh = 0.25;
var agents = [];
var agentConductor;

var Agent = function (m) {
	
	this.mesh = m;
	this.vpos = new BABYLON.Vector3(0,0,0) ;
	this.vrot = new BABYLON.Vector3(0,0,0) ;
	
	this.calculFsep = function(mesh){
		var Fsep = new BABYLON.Vector3(0,0,0) ;
		var environ = getOtherAgents(this);
		environ.forEach(function(agent) {
			var AiA = mesh.position.subtract(agent.mesh.position);
			var AiAnorm = BABYLON.Vector3.DistanceSquared(mesh.position, agent.mesh.position);
			if (AiAnorm != 0) {
				var result = AiA.divide(new BABYLON.Vector3(AiAnorm,AiAnorm,AiAnorm));
				Fsep = Fsep.add(result);
			}
		});		
		return Fsep;
	};
	
	this.calculFali = function(mesh){
		var N = 0;
		var vdA = new BABYLON.Vector3(0,0,0) ;
		var environ = getOtherAgents(this);
		environ.forEach(function(agent) {
			vdA = vdA.add(agent.mesh.rotation);
			N++;
		});
		vdA = vdA.divide(new BABYLON.Vector3(N,N,N));
		var Fali = vdA.subtract(mesh.rotation);
		return Fali;
	};
	
	this.calculFcoh = function(mesh, vpos){
		var N = 0;
		var G = new BABYLON.Vector3(0,0,0) ;
		var environ = getOtherAgents(this);
		environ.forEach(function(agent) {
			G = G.add(agent.mesh.position);
			N++;
		});
		G = G.divide(new BABYLON.Vector3(N,N,N));
		var PG = G.subtract(mesh.position);
		var PGnorm = getDistance(G, mesh.position);
		if (PGnorm != 0) {
			var vd = PG.divide(new BABYLON.Vector3(PGnorm,PGnorm,PGnorm));
			vd = vd.scale(vmax);
			var Fcosh = vd.subtract(vpos);
			return Fcosh;
		} else {
			return new BABYLON.Vector3(0,0,0);
		}
	};
	
	this.updateFs = function(){
		var fspos = this.calculFcoh(this.mesh, this.vpos).scale(k_coh);
		fspos = fspos.add(this.calculFsep(this.mesh).scale(k_sep));
		var fsrot = this.calculFali(this.mesh).scale(k_ali);
		
		this.mesh.position.x += fspos.x;
		this.mesh.position.y += fspos.y;
		this.mesh.position.z += fspos.z;
		this.mesh.rotation.x += fsrot.x;
		this.mesh.rotation.y += fsrot.y;
		this.mesh.rotation.z += fsrot.z;
		this.vpos=fspos;
		this.vrot=fsrot;
	};
}

function updateAgents() {
	agents.forEach(function(agent) {
		if (agent != agentConductor) {
			agent.updateFs();
			console.log(agent.mesh.position);
		}
	});
}

function getOtherAgents(thisAgent){
	var otherAgents = [];
	agents.forEach(function(agent) {
		if (agent != thisAgent) {
			otherAgents.push(agent);
		}
	});
	return otherAgents;
}

function createAgents(){
	var agentConductorMesh = BABYLON.MeshBuilder.CreateBox("agentConductor", {width: 1.0, height: 0.3, depth: 1.0});
	agentConductorMesh.position = new BABYLON.Vector3(0, 1, 0) ;
	agentConductorMesh.checkCollisions = true;
	agentConductorMesh.material = mat_iron;
	agentConductor = new Agent(agentConductorMesh);
	agents.push(agentConductor);
	
	var agent01Mesh = BABYLON.MeshBuilder.CreateBox("agent01", {width: 1.0, height: 0.3, depth: 1.0});
	agent01Mesh.position = new BABYLON.Vector3(0, 10, -10) ;
	agent01Mesh.checkCollisions = true;
	agent01Mesh.material = mat_marble;
	var agent01 = new Agent(agent01Mesh);
	agents.push(agent01);
	
	var agent02Mesh = BABYLON.MeshBuilder.CreateBox("agent02", {width: 1.0, height: 0.3, depth: 1.0});
	agent02Mesh.position = new BABYLON.Vector3(0, 10, 10) ;
	agent02Mesh.checkCollisions = true;
	agent02Mesh.material = mat_marble;
	var agent02 = new Agent(agent02Mesh);
	agents.push(agent02);
	
	var agent03Mesh = BABYLON.MeshBuilder.CreateBox("agent03", {width: 1.0, height: 0.3, depth: 0.5});
	agent03Mesh.position = new BABYLON.Vector3(0, 0, -10) ;
	agent03Mesh.checkCollisions = true;
	agent03Mesh.material = mat_marble;
	var agent03 = new Agent(agent03Mesh);
	agents.push(agent03);
	
	var agent04Mesh = BABYLON.MeshBuilder.CreateBox("agent04", {width: 1.0, height: 0.3, depth: 0.5});
	agent04Mesh.position = new BABYLON.Vector3(0, 0, 10) ;
	agent04Mesh.checkCollisions = true;
	agent04Mesh.material = mat_marble;
	var agent04 = new Agent(agent04Mesh);
	agents.push(agent04);
	
	var actionAgent01 = new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnEveryFrameTrigger, updateAgents);
	scene.actionManager.registerAction(actionAgent01);
}