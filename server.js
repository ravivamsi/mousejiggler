
const os = require('node.os');

var robot = require("robotjs");

console.log('The Operating System on this machine is '+os.os)

while(true){
  var mouse = robot.getMousePos();
 robot.moveMouse(0,0);
 robot.moveMouse(mouse.x,mouse.y);
 }
