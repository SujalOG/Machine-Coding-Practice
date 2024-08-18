(function () {
    var hour = document.querySelector(".hour");
    var min = document.querySelector(".minutes");
    var sec = document.querySelector(".seconds");
    var startBtn = document.querySelector(".start");
    var stopBtn = document.querySelector(".stop");
    var resetBtn = document.querySelector(".reset");
  
    var countdownTimer = null;
  
    startBtn.addEventListener("click", function () {
      if (hour.value == 0 && min.value == 0 && sec.value == 0) return;
  
      function startInterval() {
        startBtn.style.display = "none";
        stopBtn.style.display = "initial";
  
        countdownTimer = setInterval(function () {
          timer();
        }, 1000);
      }
      startInterval();
    });
  
    function timer() {
      if (sec.value > 60) {
        min.value = parseInt(min.value) + Math.floor(sec.value / 60);
        sec.value = sec.value % 60;
      }
      if (min.value > 60) {
        hour.value = parseInt(hour.value) + Math.floor(min.value / 60);
        min.value = min.value % 60;
      }
  
      if (hour.value < 0) hour.value = 0;
      if (min.value < 0) min.value = 0;
      if (sec.value < 0) sec.value = 0;
  
      if (hour.value == 0 && min.value == 0 && sec.value == 0) {
        hour.value = "";
        min.value = "";
        sec.value = "";
        stopInterval();
      } else if (sec.value != 0) {
        sec.value = sec.value - 1;
      } else if (min.value != 0 && sec.value == 0) {
        sec.value = 59;
        min.value = min.value - 1;
      } else if (hour.value != 0 && min.value == 0) {
        min.value = 59;
        hour.value = hour.value - 1;
      }
      return;
    }
  

    function stopInterval(state) {
      startBtn.innerHTML = state === "pause" ? "Continue" : "Start";
  
      stopBtn.style.display = "none";
      startBtn.style.display = "initial";
      clearInterval(countdownTimer);
    }
  
  

    stopBtn.addEventListener("click", function () {
      stopInterval("pause");
    });

  
 
    resetBtn.addEventListener("click", function () {
      hour.value = "";
      min.value = "";
      sec.value = "";
  
      stopInterval();
    });
    
  })();
  