import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardViewComponent } from './feature/dashboard-view/dashboard-view.component';
import { TimelineItemComponent } from './ui/timeline-item/timeline-item.component';
import { RecentAssignedComponent } from './ui/recent-assigned/recent-assigned.component';
import { AssignedLineItemComponent } from './ui/assigned-line-item/assigned-line-item.component';


const routes: Routes = [{path: '', component: DashboardViewComponent}];
@NgModule({
  declarations: [
    DashboardViewComponent,
    TimelineItemComponent,
    RecentAssignedComponent,
    AssignedLineItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
