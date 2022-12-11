import { ActivityService } from './../../data-access/activity.service';
import { Label } from './../../../../../shared/models/label';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-create',
  templateUrl: './activity-create.component.html',
  styleUrls: ['./activity-create.component.css'],
})
export class ActivityCreateComponent implements OnInit {
  activityForm: FormGroup;
  labels$: Observable<Label[]> | undefined;
  constructor(
    private fB: FormBuilder,
    private activityService: ActivityService
  ) {
    this.activityForm = fB.group({
      _id: [],
      title: [],
      description: [],
      createdBy: [],
      labels: fB.array([]),
      level: [],
      assignees: [],
      comments: [],
      isOpen: [true],
    });

    this.labels$ = this.activityService.getLabels();
  }

  get labelsControl(): FormArray {
    return this.activityForm.controls.labels as FormArray;
  }

   createLabelControl(label: Label): FormGroup {
    return this.fB.group({
      _id: [label._id],
      name: [label.name],
      description: [label.description],
      bgClass: [label.bgClass]
    });
  }

  ngOnInit(): void {}

  addLabel(label: Label) {
    this.labelsControl.push(this.createLabelControl(label));
  }
}
