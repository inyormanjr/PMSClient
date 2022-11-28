import { Label } from './../../../../../shared/models/label';
import { ActivityService } from './../../data-access/activity.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labels-view',
  templateUrl: './labels-view.component.html',
  styleUrls: ['./labels-view.component.css']
})
export class LabelsViewComponent implements OnInit {
  hasItem = false;
  labels: Label[] = [];
  newLabel: Label | undefined;

  constructor(private activityService: ActivityService) {


  }

  ngOnInit(): void {
    this.activityService.getLabels().subscribe((x: any) => this.labels = x);
  }

  createNewLabel() {
    this.newLabel = {
      _id: '',
      name: '',
      description: '',
      bgClass: 'bg-primary',
    };
  }

}
