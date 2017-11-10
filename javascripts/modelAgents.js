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
var agentConductor;

var Agent = function (m) {
	
	this.mesh = m;
	this.vpos = new BABYLON.Vector3(0,0,0) ;
	this.vrot = new BABYLON.Vector3(0,0,0) ;
	
	this.calculFsep = function(mesh){
		var Fsep = new BABYLON.Vector3(0,0,0) ;
		var environ = [agentConductor];
		environ.forEach(function(agent) {
			var AiA = mesh.position.subtract(agent.mesh.position);
			var AiAnorm = BABYLON.Vector3.DistanceSquared(mesh.position, agent.mesh.position);
			var result = AiA.divide(new BABYLON.Vector3(AiAnorm,AiAnorm,AiAnorm));
			Fsep = Fsep.add(result);
		});		
		return Fsep;
	};
	
	this.calculFali = function(mesh){
		var N = 0;
		var vdA = new BABYLON.Vector3(0,0,0) ;
		var environ = [agentConductor];
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
		var environ = [agentConductor];
		environ.forEach(function(agent) {
			G = G.add(agent.mesh.position);
			N++;
		});
		G = G.divide(new BABYLON.Vector3(N,N,N));
		console.log("G : "+G);
		var PG = G.subtract(mesh.position);
		var PGnorm = getDistance(G, mesh.position);
		if (PGnorm != 0) {
			var vd = PG.divide(new BABYLON.Vector3(PGnorm,PGnorm,PGnorm));
			console.log("vd : "+vd);
			vd = vd.scale(vmax);
			var Fcosh = vd.subtract(vpos);
			return Fcosh;
		} else {
			return new BABYLON.Vector3(0,0,0);
		}
	};
	
	this.updateFs = function(){
		var fspos = this.calculFcoh(this.mesh, this.vpos);//this.calculFsep(this.mesh);
		var fsrot = this.calculFali(this.mesh);
		
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
		agent.updateFs();
	});
}

function createAgents(){
	var agentConductorMesh = BABYLON.MeshBuilder.CreateBox("agentConductor", {width: 1.0, height: 0.3, depth: 1.0});
	agentConductorMesh.position = new BABYLON.Vector3(0, 1, -5) ;
	agentConductorMesh.checkCollisions = true;
	agentConductorMesh.material = mat_iron;
	agentConductor = new Agent(agentConductorMesh);
	setRotation(agentConductorMesh,90,90,0);
	
	var agent01Mesh = BABYLON.MeshBuilder.CreateBox("agent01", {width: 1.0, height: 0.3, depth: 1.0});
	agent01Mesh.position = new BABYLON.Vector3(0, 5, -5) ;
	agent01Mesh.checkCollisions = true;
	agent01Mesh.material = mat_marble;
	var agent01 = new Agent(agent01Mesh);
	agents.push(agent01);
	
	var actionAgent01 = new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnEveryFrameTrigger, updateAgents);
	scene.actionManager.registerAction(actionAgent01);
}