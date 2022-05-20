function Stopwatch() {
    startTime = 0;
    stopTime = 0;
    running = false;
    this.start = function() {
        if (running) {
            throw new Error('The Stopwatch is already started!')
        }
        startTime = new Date().getTime()
        running = true;

    };
    this.stop = function() {
        if (!running) {
            throw new Error('The Stopwatch is already stopped!')
        }
        stopTime = new Date().getTime()
       running = false;

    }
    this.reset = function() {
      startTime = 0;
      stopTime = 0;
    
    };

    Object.defineProperty(this, 'duration', {
        get : function() {
            if (running == true) {
                throw new Error('The stopwatch is still running');
            }
            return ((stopTime - startTime) / 1000) + ' seconds';
        }   
    });
    
       
}

const sw = new Stopwatch();