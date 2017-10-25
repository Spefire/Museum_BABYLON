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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}