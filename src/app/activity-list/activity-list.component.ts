import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Post } from '../view-models/post';
import { AppDataService } from '../services/app-data.service';


@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  count = 0;  
  posts : Array<Post>;
  savedposts : Array<Post>;

  constructor(private dataService: AppDataService,
              private apiService: ApiService,
              private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.posts = [];
    this.savedposts = [];
    this.count = this.route.snapshot.params['count'];
    this.updateList(); 
    this.route.params.subscribe(params => {
      this.count = params['count'];
      this.updateList();
     });
  }

  updateList() {
    if(this.count == 0) {
      var today = new Date();           
      this.apiService.getProfileTodayMessages().subscribe((data) => {
        if(data.length === 0){        
          this.posts = [{date:  today.toDateString(), score: 0, author: ""}];
        }
        else {
          this.posts = data;
        }
      });     
    }
    else {
      var startDate = new Date("10/08/2018");    
      var today = new Date();
      var timeDiff = Math.abs(today.getTime() - startDate.getTime());
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));       
       this.apiService.getProfileMessages().subscribe((data) =>  {

        for(var i=0;i<=diffDays;i++) {
            var lastDate = new Date();
            lastDate.setDate(today.getDate() - i);
            var newpost;
            var postFound = false;
            for(var p=0; p<data.length; p++) {          
              if(data[p].date === lastDate.toDateString()) {
                newpost = data[p];
                postFound = true;
                break;
              }           
            }
            if(!postFound) {
              newpost = {date: lastDate.toDateString(), score: 0, author: ""};
            }
            this.posts[i] = newpost;        
          }         
       });    
    }    
  }
}
