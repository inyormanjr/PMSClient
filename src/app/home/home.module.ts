import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './feature/nav/nav.component';
import { HomeViewComponent } from './feature/home-view/home-view.component';


const routes: Routes = [
  {
    path: '',
    component: HomeViewComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./feature/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'activities',
        loadChildren: () =>
          import('./feature/activity/activity.module').then(
            (m) => m.ActivityModule
          ),
      },
      {
        path: 'eskeys',
        loadChildren: () =>
          import('./feature/eskeys/eskeys.module').then((m) => m.EskeysModule),
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];
@NgModule({
  declarations: [
    NavComponent,
    HomeViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
