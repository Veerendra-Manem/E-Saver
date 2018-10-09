import { Component, Input, OnInit } from '@angular/core';

import { AppDataService } from '../../services/app-data.service';
import { Item } from '../../view-models/item';

@Component({
  selector: 'app-activity-panel',
  templateUrl: './activity-panel.component.html',
  styleUrls: ['./activity-panel.component.css']
})
export class ActivityPanelComponent implements OnInit {


  @Input() date: String;
  @Input() index = 1;
 
  items: Array<Item>;
  totalPoints : number;

  constructor(private dataService: AppDataService) {}

ngOnInit() {
  this.totalPoints = 0;
this.dataService.getItems().subscribe(
items => {
  this.items = items;
}
);
}

incrementItem(item: Item) {
  item.count = item.count + 1;
  item.points = item.count * item.metric;
  this.totalPoints = 0;
  this.items.forEach(item => {
    this.totalPoints = this.totalPoints + item.points;
  });   
}

decrementItem(item: Item) {
  var result = item.count - 1;
  item.count = result <= 0 ? 0 : item.count - 1;
  item.points = item.count * item.metric;
  this.totalPoints = 0;
  this.items.forEach(item => {
    this.totalPoints = this.totalPoints + item.points;
  });  
}

}
