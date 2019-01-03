import { Component, OnInit } from '@angular/core';

import { ActivityService } from '../model/activity.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
  }

}
