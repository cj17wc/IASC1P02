function recipe(){
  alert("Did you really think a university student would know how to make a turkey? Sorry, but you are out of luck.");
}

//Audio citation from Grepper, accessed on 12/04/2021, URL:https://www.codegrepper.com/code-examples/javascript/javascript+play+music+on+click+then+go;
var audio = new Audio("Song.mp3");

  document.onclick = function recipe() {
    audio.play();
  }
