function buttonClick1(){
  var firstInput = document.getElementById("textInput1").value;
  var secondInput = document.getElementById("textInput2").value;
  var output = +firstInput + +secondInput;
  document.getElementById("Output").innerHTML = output;
}

function buttonClick2(){
  var firstInput = document.getElementById("textInput1").value;
  var secondInput = document.getElementById("textInput2").value;
  var output = +firstInput - +secondInput;
  document.getElementById("Output").innerHTML = output;
}

function buttonClick3(){
  var firstInput = document.getElementById("textInput1").value;
  var secondInput = document.getElementById("textInput2").value;
  var output = +firstInput * +secondInput;
  document.getElementById("Output").innerHTML = output;
}

function buttonClick4(){
  var firstInput = document.getElementById("textInput1").value;
  var secondInput = document.getElementById("textInput2").value;
  var output = +firstInput / +secondInput;
  document.getElementById("Output").innerHTML = output;
}
