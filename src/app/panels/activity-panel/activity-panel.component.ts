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

  constructor(private dataService: AppDataService) {}

ngOnInit() {
this.dataService.getItems().subscribe(
items => {
  this.items = items;
}
);
}

incrementItem(item: Item) {
  item.epiIndex = item.epiIndex + 1;
}

decrementItem(item: Item) {
  var result = item.epiIndex - 1;
  item.epiIndex = result < 0 ? 0 : item.epiIndex - 1;
}

}
