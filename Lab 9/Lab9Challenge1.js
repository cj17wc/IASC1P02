var start = new Date();
console.log(start);
var todayTime = start.getTime();

function stopTime(){
  var stop = new Date();
  console.log(stop);
  var totalTime = (stop - todayTime)/1000;
  console.log(totalTime);
  alert("You have been on this page for:" + totalTime);
}
