//rotation value 
var current_rotation = 0;

//Class of the Timer
//Partly followed this youtube tutorial, but played with many elements
//and added some things / linked elements with my names so i understand what
//belongs to what without blindly following tutorial
//https://www.youtube.com/watch?v=PIiMSMz7KzM

class Timer {
constructor (root) {
  //injects HTML from below
  root.innerHTML = Timer.getHTML();

  //define minutes, seconds, play, pause and reset
  this.el = {
    card: document.querySelector(".card"),
    minutes: root.querySelector(".timer__item--minutes"),
    seconds: root.querySelector(".timer__item--seconds"),
    timerInput: root.querySelector(".timer__input"),
    control: root.querySelector(".timer__btn--control"),
    reset: root.querySelector(".timer__btn--reset")
  };

  //sets remaining time to 90 seconds, when started without entering a time
  this.remainingSeconds = null;

// sets up necessary dom selections and eventListeners
  this.el.control.addEventListener("click", () => {

    if (this.el.timerInput.value > 60) {
      alert("The maximum is 60 minutes.");
    }

    //prompt to define timer duration
    // const inputMinutes = prompt("Enter number of minutes:");
    const inputMinutes = this.el.timerInput.value;

    if (inputMinutes > 1 && inputMinutes <= 60) {
      // alert("You have set the time to " + inputMinutes + " minutes")
    } 

    if (inputMinutes < 1) {
      // alert("You have set the time to " + inputMinutes + " minute")
    }

    if (inputMinutes <= 60) {
      this.stop();
      this.remainingSeconds = inputMinutes * 60;
      this.updateInterfaceTime();
    }

    if (inputMinutes > 60) {
      // alert("The maximum is 60 minutes.");
    }
    
    if (this.interval === null) {
      //starting timer
      this.start();
    } else {
      //stopping timer
      this.stop();
    }
  });

  this.el.reset.addEventListener("click", () => {
  //   //prompt to define timer duration
  //   // const inputMinutes = prompt("Enter number of minutes:");
  //   const inputMinutes = this.el.timerInput.value;

  //   if (inputMinutes > 1 && inputMinutes <= 60) {
  //     // alert("You have set the time to " + inputMinutes + " minutes")
  //   } 

  //   if (inputMinutes < 1) {
  //     // alert("You have set the time to " + inputMinutes + " minute")
  //   }

  //   if (inputMinutes <= 60) {
  //     this.stop();
  //     this.remainingSeconds = inputMinutes * 60;
  //     this.updateInterfaceTime();
  //   }

    
  });
 }

updateInterfaceTime(){
  const minutes = Math.floor(this.remainingSeconds / 60);
  const seconds = this.remainingSeconds % 60;
  this.el.minutes.textContent = minutes.toString().padStart(2, "0");
  this.el.seconds.textContent = seconds.toString().padStart(2, "0");
}

updateInterfaceControls() {
  if (this.interval === null) {
    this.el.control.innerHTML = `<span class="material-icons md-36">play_arrow</span> `;
    this.el.control.classList.add("timer__btn--start");
    this.el.control.classList.remove("timer__btn--stop");
  } else {
    this.el.control.innerHTML = `<span class="material-icons md-36">pause</span> `;
    this.el.control.classList.add("timer__btn--stop");
    this.el.control.classList.remove("timer__btn--start");

  }
}

start() {
  if (this.remainingSeconds <= 0) return;
  this.el.timerInput.value = ("");
  this.el.timerInput.disabled = true;

  this.interval = setInterval(() => {
    this.remainingSeconds--;
    this.updateInterfaceTime();


    if (this.remainingSeconds <= 0) {
      this.el.minutes.textContent = ("00");
      this.el.seconds.textContent = ("00");
      
      const rotated = this.el.card;
      current_rotation += 2160;
      rotated.style.transform = 'rotate(' + current_rotation + 'deg)';
      this.stop();
      
    }
  }, 1000);

  this.updateInterfaceControls();
}

stop() {
  this.el.timerInput.disabled = false;
  clearInterval(this.interval);

  this.interval = null;

  this.updateInterfaceControls();
}

static getHTML() {
  return `
  <!-- I tried using the BEM naming convention -->
  <div class="title">
  <h1 class="title__item">Timer</h1>
</div>
    <div class="timer">
      <span class="timer__item timer__item--minutes" id="timer-minutes">00</span>
      <span class="timer__item">:</span>
      <span class="timer__item timer__item--seconds" id="timer-seconds">00</span>
    </div>
    <div class="subtitle">
      <p class="subtitle__item">Minutes</p>
      <p class="subtitle__item">Seconds</p>
    </div>
    <div class="timer__inputBox">
      <input type="number" class="timer__input" name="timer__input" placeholder="Set minutes...">
    </div>
    <div class="timer__btns">
        <button class="timer__btn timer__btn--control timer__btn--start">
          <span class="material-icons md-36">play_arrow</span>  
          </button>
          
          
    </div>
  `;
}
}

//calls up Timer class
new Timer (
  document.querySelector(".card")
);

