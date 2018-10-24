import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { AppDataService } from 'app/services/app-data.service';
import { Router } from '@angular/router';
import { Pledge } from 'app/view-models/pledge';



@Component({
  selector: 'fw-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  formError: string;
  registerData = {score:0,name:"",email:"",pwd:"",pledge:""};
  pledges: Array<Pledge>;

  availableOptions: [
    {id: '1', name: 'Option A'},
    {id: '2', name: 'Option B'},
    {id: '3', name: 'Option C'}
  ];

  constructor( private authService : AuthService, 
    private dataService : AppDataService,
    private router:Router) {
      this.dataService.getPledges().subscribe((data) => this.pledges = data);
     }

  ngOnInit() {
    this.dataService.getPledges().subscribe((data) => this.pledges = data);    
  }

  register() {
    this.authService.registerUser(this.registerData).subscribe((data) => {
      console.log('got valid: ', data);
      this.authService.saveToken(data.token)              
      this.router.navigate(['/authenticated']);
    },
    (err)=> {
      console.log('got error: ', err.error.message);
      this.formError = err.error.message;
    }
  );
  }
}
