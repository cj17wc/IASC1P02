var myPrompt = prompt("What is your age?");
console.log(myPrompt);
var todayFullDate = new Date();
var todayFullYear = todayFullDate.getFullYear();

document.getElementById("birthYear").innerHTML = todayFullYear - myPrompt;
