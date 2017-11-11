// ---------------------------- //
//   Application : Museum REV   //
//   Author : Nicholas Brun     //
//   File : modelAgents.js       //
// ---------------------------- //

var vmax = 1.5;
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

function createAgent() {
	var agentMesh = BABYLON.MeshBuilder.CreateBox("agent", {width: 0.5, height: 0.3, depth: 0.25});
	agentMesh.position = new BABYLON.Vector3(0, 0, 10) ;
	agentMesh.checkCollisions = true;
	agentMesh.material = mat_marble;
	var a = new Agent(agentMesh);
	agents.push(a);
}

function createAgents(){
	var agentConductorMesh = BABYLON.MeshBuilder.CreateBox("agentConductor", {width: 0.5, height: 0.3, depth: 0.25});
	agentConductorMesh.position = new BABYLON.Vector3(0, 1, 0) ;
	agentConductorMesh.checkCollisions = true;
	agentConductorMesh.material = mat_iron;
	agentConductor = new Agent(agentConductorMesh);
	agents.push(agentConductor);
	
	var keysPos = []; 
	keysPos.push({
		frame: 0,
		value: new BABYLON.Vector3(20, 5, 20)
	});
	keysPos.push({
		frame: framesPerSecond*5,
		value: new BABYLON.Vector3(20, 20, -20)
	});
	keysPos.push({
		frame: framesPerSecond*10,
		value: new BABYLON.Vector3(-20, 5, -20)
	});
	keysPos.push({
		frame: framesPerSecond*15,
		value: new BABYLON.Vector3(-20, 20, 20)
	});
	keysPos.push({
		frame: framesPerSecond*20,
		value: new BABYLON.Vector3(20, 5, 20)
	});

	var animationPos = new BABYLON.Animation("animationPos", "position", framesPerSecond, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
	animationPos.setKeys(keysPos);
	agentConductorMesh.animations = [];
	agentConductorMesh.animations.push(animationPos);
	scene.beginAnimation(agentConductorMesh, 0, framesPerSecond*20, true);	

	createAgent();
	createAgent();
	createAgent();
	createAgent();
	createAgent();
	
	createAgent();
	createAgent();
	createAgent();
	createAgent();
	createAgent();
	
	var actionAgents = new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnEveryFrameTrigger, updateAgents);
	scene.actionManager.registerAction(actionAgents);
}