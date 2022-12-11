import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivityService } from './../../data-access/activity.service';
import { Label } from './../../../../../shared/models/label';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-label-line-item',
  templateUrl: './label-line-item.component.html',
  styleUrls: ['./label-line-item.component.css'],
})
export class LabelLineItemComponent implements OnInit {
  isEditMode = false;
  @Input() label: Label | undefined;
  @Output() deleteButtonClicked: EventEmitter<string> = new EventEmitter<string>();
  editableLabel: Label | undefined;
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

  onDelete() {
    console.log('test');
    this.deleteButtonClicked.emit('Test');
  }

  ngOnInit(): void {
    if (this.label) {
      this.editableLabel = this.label;
      this.labelForm.patchValue(this.label);
    }
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
    this.editableLabel = this.label;
    if (this.label) this.labelForm.patchValue(this.label);
  }

  updateLabel() {
    const updatedLabel = this.labelForm.value;
    if (this.editableLabel)
      this.activityService
        .updateLabel(updatedLabel._id, updatedLabel)
        .subscribe(
          (x) => {
            this.label = x;
            this.labelForm.patchValue(x);
            this.isEditMode = !this.isEditMode;
            this.toastR.success('Label updated');
          },
          (err) => console.log(err)
        );
  }
}
