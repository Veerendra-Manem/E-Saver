import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profile

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    
     this.apiService.getUserProfile().subscribe(data => this.profile = data)
  }

}
