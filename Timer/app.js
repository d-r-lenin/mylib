const input = document.querySelector("#input");
const circle = document.querySelector("#circle");

const timer= new Timer(parseInt(input.innerText),.1,100,callbacks={
	onStart(n){
		this.offset = 2 * Math.PI * circle.r.baseVal.value;
		this.timeDue = n;
		circle.setAttribute("stroke-dasharray", this.offset);
		circle.setAttribute("stroke-dashoffset", this.offset);
	},
	onRun(time){
		if (this.offset > 0) {
		  circle.setAttribute(
			"stroke-dashoffset",
			(this.offset * time) / this.timeDue - this.offset
		  );
		  input.innerText = parseInt(this.value);
		}
	},
	onPause(){		  
		this.value = this.timeDue;
		this.start();
	}
})

timer.start()

