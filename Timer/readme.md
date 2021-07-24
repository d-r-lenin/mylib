# Timer

>## usage:

```
const callbacks = {
    onStart(currentVal){
        //Your code
    },
    onPause(){
        //Called after value < 0
    },
    onRun(currentVal){
        //Your code
    }
}

 const myVariable = new Timer(<starting value>,<step>,<interval>,callbacks)

 myVariable.start();
```
>## Properties

* ### value 
* ### step
* ### interval

>## Methods

* ### onStart(value) 
* ### onPause()
* ### onRun(value)
* ### start() 
* ### pause()
* ### run()

>## Define Property
### You can define your own property by using 'this' keyword

    myVariable.onStart = n =>{
        this.startTime = n;
    }

