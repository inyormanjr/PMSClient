import { NgxBootstrapModule } from './../../../shared/ngx-bootstrap/ngx-bootstrap.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityViewComponent } from './feature/activity-view/activity-view.component';
import { ActivityLineItemComponent } from './ui/activity-line-item/activity-line-item.component';
import { ActivityCreateComponent } from './feature/activity-create/activity-create.component';


const route: Routes = [{ path: '', component: ActivityViewComponent },
  { path: 'create', component: ActivityCreateComponent}
];
@NgModule({
  declarations: [
    ActivityViewComponent,
    ActivityLineItemComponent,
    ActivityCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    NgxBootstrapModule,
  ]
})
export class ActivityModule { }
