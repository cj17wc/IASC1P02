function buttonClick(){
  var firstInput = document.getElementById("textInput1").value;
  var secondInput = document.getElementById("textInput2").value;
  var output = +firstInput + +secondInput;
  document.getElementById("Output").innerHTML = output;
}
