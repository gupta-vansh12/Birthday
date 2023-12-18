function flipImage(element) {
    element.style.transform = 'rotateY(180deg)';
    setTimeout(() => {
      element.style.transform = 'rotateY(0)';
    }, 600); // Adjust the duration of the flip (in milliseconds)
  }
  function playAudio() {
    var audio = document.getElementById("myAudio");
    audio.play();
  }
  