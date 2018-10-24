import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-panel',
  templateUrl: './image-panel.component.html',
  styleUrls: ['./image-panel.component.css']
})
export class ImagePanelComponent implements OnInit {
 
  pledge: ""
  
  constructor(private apiService: ApiService,    
    private router: Router) { }

  ngOnInit() {  

    this.apiService.getUserProfile().subscribe(data => this.pledge = data.pledge ); 
  }

  createPledge() {
    this.router.navigate(['/authenticated/pledge-detail', 0, 'create']);
  }

  logActivity() {
    this.router.navigate(['/authenticated/activity-list/5']);
  }
  

}
