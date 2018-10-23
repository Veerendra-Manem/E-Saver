import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';

import { UserApi } from '../user-api';

@Component({
  selector: 'fw-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  formError: string;
  submitting = false;
  loginData = {}  
  
  constructor(private userApi: UserApi,
              private router:Router,
              private authService : AuthService) { }

  onSubmit(signInForm: NgForm) {
    
    if (signInForm.valid) {

      console.log('submitting...', signInForm);
      this.submitting = true;
      this.formError = null;

      this.userApi.signIn(signInForm.value.username, signInForm.value.password, signInForm.value.rememberMe);
      
      this.authService.loginUser(this.loginData).subscribe((data) => {
              console.log('got valid: ', data);
              this.authService.saveToken(data.token)              
              this.router.navigate(['/authenticated']);
            },
            (err)=> {
              this.submitting = false;
              console.log('got error: ', err.error.message);
              this.formError = err.error.message;
            }
          );

      // this.userApi.signIn(signInForm.value.username, signInForm.value.password, signInForm.value.rememberMe)
      //   .subscribe((data) => {
      //       console.log('got valid: ', data);
      //       this.router.navigate(['/authenticated']);
      //     },
      //     (err)=> {
      //       this.submitting = false;
      //       console.log('got error: ', err);
      //       this.formError = err;
      //     }
      //   );
    }

  }

}

