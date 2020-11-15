export default class Timer {
    constructor() {
        this.seconds = 0;
        this.minutes = 0;
        //this.createTimer();
        this.time = document.querySelector('.time');
    }


updateTimer(){
    if (this.sec <= 59) this.seconds++;
        else {
            this.seconds = 0;
            this.minutes++;
    }   
    let secText = this.seconds > 9 ? "" + this.seconds : "0" + this.seconds;
    let minText = this.minutes > 9 ? "" + this.minutes : "0" + this.minutes;

    document.querySelector('.time').innerText = `Time: ${minText}:${secText}`;
}

startTimer(){
    setInterval(this.updateTimer, 1000);
}

stopTimer(){
}

pauseTimer(){
}


}

    //     let secText, minText;

    //     if (this.sec < 59) this.sec++;
    //     else {
    //         this.sec = 0;
    //         this.minutes++;
    //     }   
    //     secText = this.sec > 9 ? "" + this.sec : "0" + this.sec ;
    //     minText = this.minutes > 9 ? "" + this.minutes : "0" + this.minutes ;

    //     document.querySelector('.time').innerText = `Time: ${minText}:${secText}`;
    //     //console.log(`Time: ${this.minutes}: ${this.sec}`);
    // }    

    // startTimer(){  
    //     setInterval(this.createTimer, 1000);     
    // }