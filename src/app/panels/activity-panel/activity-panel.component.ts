import { Component, Input, OnInit } from '@angular/core';

import { AppDataService } from '../../services/app-data.service';
import { ApiService } from '../../services/api.service';
import { Item } from '../../view-models/item';

@Component({
  selector: 'app-activity-panel',
  templateUrl: './activity-panel.component.html',
  styleUrls: ['./activity-panel.component.css']
})
export class ActivityPanelComponent implements OnInit {


  @Input() date: String;
  @Input() score: number;
  @Input() index = 1;
 
  items: Array<Item>;
  cloneItems: Array<Item>;
  totalPoints : number;
  submitted: boolean;  
  status: string;

  constructor(private dataService: AppDataService,
    private apiService: ApiService) {}

  ngOnInit() {
    this.totalPoints = this.score > 0 ? this.score : 0;  
    this.submitted = this.score > 0 ? true : false;  
    this.dataService.getItems().subscribe(data => { this.items = data; });    
    this.items.forEach(item => { item.count = 0;});
  }


  post() {
    var itemMap = {}
    this.items.forEach(item => {
      itemMap[item.id] = item.count;
    }); 

    this.apiService.postMessage({"date": this.date,
      "items": itemMap,
      "score" : this.totalPoints});

      this.submitted = true;   
      this.status = ""
  }

incrementItem(item: Item) {
  item.count = item.count + 1;
  item.points = item.count * item.metric * -1;
  this.totalPoints = 0;
  this.items.forEach(item => {
    this.totalPoints = this.totalPoints + item.points;
  });   
}

decrementItem(item: Item) {
  item.count = item.count - 1;
  item.points = item.count * item.metric * -1;
  this.totalPoints = 0;
  this.items.forEach(item => {
    this.totalPoints = this.totalPoints + item.points;
  });  
}

}
