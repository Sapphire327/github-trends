
class Timer{
    constructor() {}
    start(func,second){
        this.func = func;
        this.second = second*1000;
        this.intervalId = setInterval(this.func, second*1000);
    }
    stop(){
        if(this.intervalId)
        clearInterval(this.intervalId);
    }
    restart(){
        this.stop();
        this.intervalId = setInterval(this.func, this.second);
    }
}

export const timer = new Timer();