export class Duration {

  private millisecondsInSecond = 1000;
  private secondsInMinute = 60;
  private millisecondsInMinute = this.secondsInMinute * this.millisecondsInSecond;
  private minutesInHour = 60;
  private millisecondsInHour = this.minutesInHour * this.millisecondsInMinute;
  private hoursInDAy = 24;
  private millsecondsInDay  = this.hoursInDAy * this.millisecondsInHour;


  title: string;
  activityId: number;
  started: Date;
  ended: Date;
  milliSeconds: number;

  get seconds(): number {
    return  Math.floor(this.milliSeconds / this.millisecondsInSecond) % this.secondsInMinute;
  }

  get minutes(): number {
    return  Math.floor(this.milliSeconds / this.millisecondsInMinute) % this.minutesInHour;
  }

  get hours(): number {
    return Math.floor(this.milliSeconds / this.millisecondsInHour) % this.hoursInDAy;
  }

  get days(): number {
    return Math.floor(this.milliSeconds / this.millsecondsInDay);
  }


  get prettyDuration(): string {
     let text = `${this.seconds} sec${this.seconds > 1 ? 's' : ''}`;

     if (this.minutes > 0) {
      text = `${this.minutes} min${this.minutes > 1 ? 's' : ''} ` + text;
     }

     if (this.hours > 0) {
      text = `${this.hours} hour${this.hours > 1 ? 's' : ''} ` + text;
     }

     if (this.days > 0) {
      text = `${this.days} day${this.days > 1 ? 's' : ''} ` + text;
     }

     return text;
  }
}
