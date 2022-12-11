import { ToastrService } from 'ngx-toastr';
import { Label } from './../../../../../shared/models/label';
import { ActivityService } from './../../data-access/activity.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labels-view',
  templateUrl: './labels-view.component.html',
  styleUrls: ['./labels-view.component.css'],
})
export class LabelsViewComponent implements OnInit {
  hasItem = false;
  labels: Label[] = [];
  newLabel: Label | undefined;

  constructor(private activityService: ActivityService, private toastR: ToastrService) {}

  ngOnInit(): void {
    this.activityService.getLabels().subscribe((x: any) => (this.labels = x));
  }

  createNewLabel() {
    this.newLabel = {
      _id: '',
      name: '',
      description: '',
      bgClass: 'bg-primary',
    };
  }

  createLabel(valueEmitted: any) {
    this.activityService.createLabel(valueEmitted).subscribe(
      (x) => {
        this.labels.push(x);
        this.toastR.success('New label created');
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteLabel(index: number, label: Label) {

    this.activityService.deleteLabel(label._id).subscribe(x => {
      this.labels.splice(index, 1);
      this.toastR.success('Label Deleted');
    }, err => {
       this.toastR.error(err.error.error);
    })

  }

}
