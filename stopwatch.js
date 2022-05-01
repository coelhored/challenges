function Stopwatch() {
    this.startTime = 0;
    this.stopTime = 0;
    this.running = false;
    this.start = function() {
        if (this.running == true) {
            throw new Error('The Stopwatch is already started!')
        }
        this.startTime = new Date().getTime()
        this.running = true;

    };
    this.stop = function() {
        if (this.running == false) {
            throw new Error('The Stopwatch is already stopped!')
        }
        this.stopTime = new Date().getTime()
        this.running = false;

    }
    this.reset = function() {
        this.startTime = 0;
        this.stopTime = 0;
    
    };
    this.duration = function() {
       return ((this.stopTime - this.startTime) / 1000) + ' seconds' };
}

const sw = new Stopwatch();