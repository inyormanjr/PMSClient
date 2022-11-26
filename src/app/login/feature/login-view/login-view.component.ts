import { Router } from '@angular/router';
import { _token } from './../../../shared/constant_var';
import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css'],
})
export class LoginViewComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  constructor(private fB: FormBuilder,
    private authService: AuthService,
    private toastR: ToastrService,
    private router: Router) {
    this.loginForm = fB.group({
      username: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  ngOnInit(): void { }

  login() {
    const { username, password } = this.loginForm.value;
    this.isLoading = true;
    this.authService.login(username, password).subscribe((x: any) => {
         this.isLoading = false;
         localStorage.setItem(_token, x.token);
         this.router.navigateByUrl('');
    }, err => {
      this.isLoading = false;
      this.toastR.error(err.error.error);
    });
  }
}
