document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const drumPads = document.querySelectorAll(".drum-pad");
  
    drumPads.forEach(pad => {
      pad.addEventListener("click", function() {
        const audio = document.querySelector(`#${this.innerText}`);
        audio.currentTime = 0;
        audio.play();
        display.innerText = this.id;
      });
  
      document.addEventListener("keydown", function(event) {
        const key = event.key.toUpperCase();
        const audio = document.querySelector(`#${key}`);
        if (audio) {
          audio.currentTime = 0;
          audio.play();
          display.innerText = audio.parentElement?.id;
        }
      });
    });
  });