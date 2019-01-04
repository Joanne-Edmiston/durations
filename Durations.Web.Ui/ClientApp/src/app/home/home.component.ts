import { Component, OnInit } from '@angular/core';
import { Duration } from '../model/duration.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent  implements OnInit {

  constructor() {}

  startedDurations: Duration[];

  onStartNew() {

    this.startedDurations.push(new Duration());
  }

  onCancelled(duration: Duration) {
   this.startedDurations = this.startedDurations.filter(d => d !== duration);
  }

  ngOnInit() {

    // TODO: show started durations not assigned to activites?
    this.startedDurations = [];

  }

}
