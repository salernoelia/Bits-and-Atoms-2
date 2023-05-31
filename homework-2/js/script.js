// /*
//  * sets up necessary dom selections and eventlisteners
//  */
// function setup() {
//   const playBtn = document.querySelector("#play-pause-btn")
  
//   // just checking if the button is correctly selected
//   console.log("button: ", playBtn);
// }

// import Timer from "./Timer.js";


class Timer {
constructor (root) {
  root.innerHTML = Timer.getHTML();

  this.el = {
    minutes: root.querySelector("timer__item--minutes"),
    seconds: root.querySelector("timer__item--seconds"),
    control: root.querySelector("timer__item--control"),
    reset: root.querySelector("timer__btn--reset")
  };

  this.interval = null;
  this.remainingSeconds = 0;
 }

static getHTML() {
  return `
  <div class="title">
  <h1 class="title__item">Timer</h1>
</div>
    <div class="timer">
      <span class="timer__item timer__item--minutes" id="timer-minutes">00</span>
      <span class="timer__item">:</span>
      <span class="timer__item timer__item--seconds" id="timer-seconds">00</span>
    </div>
    <div class="subtitle">
      <p class="subtitle__item">Minuten</p>
      <p class="subtitle__item">Sekunden</p>
    </div>
    <div class="timer__btns">
        <button class="timer__btn timer__btn--control timer__btn--start">
          <span class="material-icons md-36">play_arrow</span>  
          </button>
          
          <button class="timer__btn timer__btn--reset">
            <span class="material-icons md-36">timer</span>  
          </button>
    </div>
  `;
}
}

new Timer (
  document.querySelector(".card")
);

