import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxBootstrapModule } from './../../../shared/ngx-bootstrap/ngx-bootstrap.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityViewComponent } from './feature/activity-view/activity-view.component';
import { ActivityLineItemComponent } from './ui/activity-line-item/activity-line-item.component';
import { ActivityCreateComponent } from './feature/activity-create/activity-create.component';
import { LabelsViewComponent } from './feature/labels-view/labels-view.component';
import { LabelLineItemComponent } from './feature/label-line-item/label-line-item.component';
import { NewLabelItemComponent } from './feature/new-label-item/new-label-item.component';
import { StoreModule } from '@ngrx/store';
import * as fromActivity from './data-access/reducers';
import { EffectsModule } from '@ngrx/effects';
import { ActivityEffects } from './data-access/activity.effects';


const route: Routes = [{ path: '', component: ActivityViewComponent },
  { path: 'create', component: ActivityCreateComponent },
  { path: 'labels', component: LabelsViewComponent}
];
@NgModule({
  declarations: [
    ActivityViewComponent,
    ActivityLineItemComponent,
    ActivityCreateComponent,
    LabelsViewComponent,
    LabelLineItemComponent,
    NewLabelItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(route),
    NgxBootstrapModule,
    StoreModule.forFeature(fromActivity.activityFeatureKey, fromActivity.reducers, { metaReducers: fromActivity.metaReducers }),
    EffectsModule.forFeature([ActivityEffects]),
  ]
})
export class ActivityModule { }
