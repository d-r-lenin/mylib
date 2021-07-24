class Timer {
  constructor(startValue = 10, step = 1,interval= 1000, callbacks) {
    this.value = startValue;
	this.step = step;
	this.interval = interval;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onRun = callbacks.onRun;
      this.onPause = callbacks.onPause;
    }
  }
  start = () => {
    clearInterval(this.intervalId);
    if (this.onStart) {
      this.onStart(this.value);
    }
	this.run();
    this.intervalId = setInterval(this.run, this.interval);
  };

  pause = () => {
	  clearInterval(this.intervalId);
    if (this.onPause) {
      this.onPause();
    }

  };
  run = () => {
    if (this.value < 0) {
      this.pause();
    } else {
      if (this.onRun) {
        this.onRun(this.value);
      }
      this.value = this.value - this.step;
    }
  };
}
