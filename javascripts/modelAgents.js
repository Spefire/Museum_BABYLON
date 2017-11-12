// ---------------------------- //
//   Application : Museum REV   //
//   Author : Nicholas Brun     //
//   File : modelAgents.js       //
// ---------------------------- //

var vmax = 1.5;
var k_sep = 0.25;
var k_ali = 0.25;
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
	
	var wings = [];
	var wing01 = BABYLON.MeshBuilder.CreatePlane("wing01", {width:1.0, height:1.0, sideOrientation:BABYLON.Mesh.DOUBLESIDE});
	wing01.material = mat_bird;
	setRotation(wing01,30,0,0);
	wings.push(wing01);
	var wing02 = BABYLON.MeshBuilder.CreatePlane("wing02", {width:1.0, height:1.0, sideOrientation:BABYLON.Mesh.DOUBLESIDE});
	wing02.material = mat_bird;
	setRotation(wing02,-30,0,0);
	wings.push(wing02);
	
	var agentMesh = BABYLON.Mesh.MergeMeshes(wings);
	agentMesh.position = new BABYLON.Vector3(0, 0, 10) ;
	var a = new Agent(agentMesh);
	agents.push(a);
}

function createAgents(){
	var wings = [];
	var wing01 = BABYLON.MeshBuilder.CreatePlane("wing01", {width:1.0, height:1.0, sideOrientation:BABYLON.Mesh.DOUBLESIDE});
	wing01.material = mat_bird;
	setRotation(wing01,30,0,0);
	wings.push(wing01);
	var wing02 = BABYLON.MeshBuilder.CreatePlane("wing02", {width:1.0, height:1.0, sideOrientation:BABYLON.Mesh.DOUBLESIDE});
	wing02.material = mat_bird;
	setRotation(wing02,-30,0,0);
	wings.push(wing02);
	
	var agentConductorMesh = BABYLON.Mesh.MergeMeshes(wings);
	agentConductor = new Agent(agentConductorMesh);
	agents.push(agentConductor);
	
	var keysPos = []; 
	keysPos.push({
		frame: 0,
		value: new BABYLON.Vector3(20, 1, 20)
	});
	keysPos.push({
		frame: framesPerSecond*5,
		value: new BABYLON.Vector3(20, 5, -20)
	});
	keysPos.push({
		frame: framesPerSecond*10,
		value: new BABYLON.Vector3(-20, 1, -20)
	});
	keysPos.push({
		frame: framesPerSecond*15,
		value: new BABYLON.Vector3(-20, 5, 20)
	});
	keysPos.push({
		frame: framesPerSecond*20,
		value: new BABYLON.Vector3(20, 1, 20)
	});
	
	var keysRot = []; 
	keysRot.push({
		frame: 0,
		value: new BABYLON.Vector3(0, getRadian(180), 0)
	});
	/////
	keysRot.push({
		frame: framesPerSecond*2,
		value: new BABYLON.Vector3(0, getRadian(270), 0)
	});
	keysRot.push({
		frame: framesPerSecond*5,
		value: new BABYLON.Vector3(0, getRadian(270), 0)
	});
	/////
	keysRot.push({
		frame: framesPerSecond*7,
		value: new BABYLON.Vector3(0, getRadian(360), 0)
	});
	keysRot.push({
		frame: framesPerSecond*10,
		value: new BABYLON.Vector3(0, getRadian(360), 0)
	});
	/////
	keysRot.push({
		frame: framesPerSecond*12,
		value: new BABYLON.Vector3(0, getRadian(90), 0)
	});
	keysRot.push({
		frame: framesPerSecond*15,
		value: new BABYLON.Vector3(0, getRadian(90), 0)
	});
	/////
	keysRot.push({
		frame: framesPerSecond*17,
		value: new BABYLON.Vector3(0, getRadian(180), 0)
	});
	keysRot.push({
		frame: framesPerSecond*20,
		value: new BABYLON.Vector3(0, getRadian(180), 0)
	});

	var animationPos = new BABYLON.Animation("animationPos", "position", framesPerSecond, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
	animationPos.setKeys(keysPos);
	var animationRot = new BABYLON.Animation("animationRot", "rotation", framesPerSecond, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
	animationRot.setKeys(keysRot);
	agentConductorMesh.animations = [];
	agentConductorMesh.animations.push(animationPos);
	agentConductorMesh.animations.push(animationRot);
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