
import { Component, OnInit, Input } from '@angular/core';
import { Duration } from '../model/duration.model';

@Component({
  selector: 'app-duration-recorder',
  templateUrl: './duration-recorder.component.html',
  styleUrls: ['./duration-recorder.component.css']
})
export class DurationRecorderComponent implements OnInit {

  constructor() { }

  @Input() duration: Duration;
  durationRecordedUntil: Date;
  lastPaused: Date;
  isPaused: boolean;
  private timer;

  onResume() {
    this.isPaused = false;
    this.durationRecordedUntil = new Date();

    this.timer = setInterval(() => {
      this.updateDuration();
    }, 1000);
  }

  onStart() {
    this.onResume();
    this.duration.started = this.durationRecordedUntil;
  }

  onPause() {
    this.lastPaused = new Date();
    this.isPaused = true;

    clearTimeout(this.timer);
  }


  onStop() {

    this.onPause();
    this.duration.ended = new Date();
  }

  ngOnInit() {

    this.duration.milliSeconds = 0;
  }


  private updateDuration() {
    const now = new Date();
    this.duration.milliSeconds = this.duration.milliSeconds +
       Math.abs((now.getTime() - this.durationRecordedUntil.getTime()));

       this.durationRecordedUntil = new Date();
  }

}
