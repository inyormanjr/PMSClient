import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EskeysViewComponent } from './feature/eskeys-view/eskeys-view.component';
import { EskeysCreateDeliveryComponent } from './feature/eskeys-create-delivery/eskeys-create-delivery.component';


const routes: Routes = [
  { path: '', component: EskeysViewComponent },
  { path: 'create', component: EskeysCreateDeliveryComponent}
];
@NgModule({
  declarations: [
    EskeysViewComponent,
    EskeysCreateDeliveryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EskeysModule { }
