import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Post } from '../view-models/post';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-personal-tracker',
  templateUrl: './personal-tracker.component.html',
  styleUrls: ['./personal-tracker.component.css']
})
export class PersonalTrackerComponent implements OnInit {

   posts : Array<Post>;

  constructor(private apiService: ApiService,
    private route: ActivatedRoute) { 
      
    }

  ngOnInit() {
    var userId = this.route.snapshot.params.id;
    console.log(this.route.snapshot);
    this.apiService.getProfileMessages().subscribe((data) => this.posts = data);
  }
}
