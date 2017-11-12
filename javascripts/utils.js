// ---------------------------- //
//   Application : Museum REV   //
//   Author : Nicholas Brun     //
//   File : utils.js    //
// ---------------------------- //

function setRotation(obj, angleX, angleY, angleZ){
	obj.rotation.x = angleX * Math.PI / 180;
	obj.rotation.y = angleY * Math.PI / 180;
	obj.rotation.z = angleZ * Math.PI / 180;
}

function getRadian(angle) {
	return (angle * Math.PI / 180);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomAngle() {
  return Math.random()*Math.PI*2;
}

function testAngle(angle) {
	if (2*Math.PI-Math.PI/8 < angle && angle < 2*Math.PI) {
		return true;
	}
	if (0 < angle && angle < Math.PI*7/16) {
		return true;
	}
	if (Math.PI*9/16 < angle && angle < Math.PI-Math.PI/8) {
		return true;
	}
	return false;
}

function getDistance(posA, posB){
	var x = posB.x - posA.x;
	var y = posB.y - posA.y;
	var z = posB.z - posA.z;
	var dist = Math.sqrt(x*x+y*y+z*z);
	return dist;
}