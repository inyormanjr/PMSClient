import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Label } from 'src/app/shared/models/label';
import { ActivityService } from '../../data-access/activity.service';

@Component({
  selector: 'app-new-label-item',
  templateUrl: './new-label-item.component.html',
  styleUrls: ['./new-label-item.component.css']
})
export class NewLabelItemComponent implements OnInit {
  isEditMode = false;
  @Input() label: Label | undefined;
  labelForm: FormGroup;
  constructor(
    private activityService: ActivityService,
    private fB: FormBuilder,
    private toastR: ToastrService
  ) {
    this.labelForm = fB.group({
      _id: [],
      name: [],
      description: [],
      bgClass: [],
    });
  }

  ngOnInit(): void {
    if (this.label) {
      this.labelForm.patchValue(this.label);
    }
  }

  toggleEditMode() {
    this.label = undefined;
    this.labelForm.reset();
  }

  createLabel() {
    const updatedLabel = this.labelForm.value;
    this.activityService.createLabel(updatedLabel).subscribe((x) => {
       this.label = undefined;
       this.labelForm.reset();
      this.toastR.success('New label created');
    }, err => {
      console.log(err);
    });
  }
}
