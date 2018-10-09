import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppDataService } from '../services/app-data.service';


@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  allItems: Array<String>;
  count = 0;
  items: Array<String>;

  constructor(private dataService: AppDataService,
              private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.dataService.getMissedDays().subscribe(
      items => {
        this.allItems = items;

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
    this.items = this.count>0?this.allItems.slice(0, this.count): this.allItems.slice(0, 1);
  }
}
