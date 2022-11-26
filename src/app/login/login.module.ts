import { AuthService } from './../shared/services/auth.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginViewComponent } from './feature/login-view/login-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [{path: '', component: LoginViewComponent}]
@NgModule({
  declarations: [
    LoginViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class LoginModule { }
