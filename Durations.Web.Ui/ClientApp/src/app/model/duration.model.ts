export class Duration {

  private millisecondsInSecond = 1000;
  private millisecondsInMinute = 60 * this.millisecondsInSecond;
  private millisecondsInHour = 60 * this.millisecondsInMinute;
  private millsecondsInDay  = 24 * this.millisecondsInHour;


  activityId: number;
  started: Date;
  ended: Date;
  milliSeconds: number;

  get seconds(): number{
    return  Math.floor(this.milliSeconds / this.millisecondsInSecond) % this.millisecondsInSecond;
  }

  get minutes(): number {
    return  Math.floor(this.milliSeconds / this.millisecondsInMinute) % this.millisecondsInMinute;
  }

  get hours(): number {
    return Math.floor(this.milliSeconds / this.millisecondsInHour) % this.millisecondsInHour;
  }

  get days(): number {
    return Math.floor(this.milliSeconds / this.millsecondsInDay) % this.millsecondsInDay;
  }


  get prettyDuration(): string {
     let text = `${this.seconds} secs`;

     if (this.minutes > 0) {
      text = `${this.minutes} Min${this.minutes > 1 ? 's' : ''} ` + text;
     }

     if (this.hours > 0) {
      text = `${this.hours} Hour${this.hours > 1 ? 's' : ''} ` + text;
     }

     if (this.days > 0) {
      text = `${this.days} Day${this.days > 1 ? 's' : ''} ` + text;
     }

     return text;
  }
}
