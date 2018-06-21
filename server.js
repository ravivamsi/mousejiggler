// var mouse = require('node_mouse');
const os = require('node.os');
//  var macmouse = require('osx-mouse')();
var robot = require("robotjs");

// var currentPosition = mouse.getCurrentPOsition();

console.log('The Operating System on this machine is '+os.os)


// function execute(){
   //code to execute


  //  console.log("X-Co-ordinate: "+mouse.x+"Y-Co-ordinate: "+mouse.y);

while(true){
  var mouse = robot.getMousePos();
 robot.moveMouse(0,0);
 robot.moveMouse(mouse.x,mouse.y);
 }
 // }


 // setInterval(execute,5000);
//
// for (var x=0; x<10; x++){
//   var mouse = robot.getMousePos();
//   console.log("X-Co-ordinate: "+mouse.x+"Y-Co-ordinate: "+mouse.y);
// robot.moveMouse(0,0);
// var newPositionX = mouse.x+1;
// var newPositionY = mouse.y+1;
//
// console.log("X-Co-ordinate: "+newPositionX+"Y-Co-ordinate: "+newPositionY);
//   // robot.moveMouse(mouse.x+1,mouse.y+1);
// }


















// if(os.isWin){
  // console.log(JSON.stringify(currentPosition, null,2));
  // mouse.move(currentPosition);
// }else{
  // macmouse.on('move', function(x,y){
    // console.log(x, y);
  // });
// }

// macmouse.destroy();
