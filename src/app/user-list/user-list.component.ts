import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppDataService } from '../services/app-data.service';
import { ApiService } from '../services/api.service';
import { User } from '../view-models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  allUsers: Array<User>;
  count = 0;
  users: Array<User>;

  constructor(private dataService: AppDataService,
    private apiService: ApiService,
              private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.apiService.getUsers().subscribe(
      users => {               
        users.forEach(user => {
          console.log(user)
          this.apiService.getMessages(user._id).subscribe( posts => {
            user.score = 0
            posts.forEach(post => user.score = user.score + post.score)
            });            
        })

        this.allUsers = users.reverse(function(a, b){return b.score-a.score});; 
        this.count = this.route.snapshot.params['count'];
        this.updateList();
      }
    );

    this.route.params.subscribe(params => {
      this.count = params['count'];
      this.updateList();
     });
  }

  updateList() {
    this.users = this.count>0?this.allUsers.slice(0, this.count): this.allUsers;
  }

}
