import { Component, OnInit } from '@angular/core';

import { AppDataService } from '../services/app-data.service';
import { Item } from '../view-models/item';

import {
  trigger, query, style, transition, stagger, animate } from '@angular/animations';

@Component({
  selector: 'app-group-tracker',
  templateUrl: './group-tracker.component.html',
  styleUrls: ['./group-tracker.component.css'],
  animations: [
    trigger('photosAnimation', [
      transition('* => *', [
        query('img',style({ transform: 'translateY(-100%)'})),
        query('img',
          stagger('600ms', [
            animate('900ms', style({ transform: 'translateY(0)'}))
        ]))
      ])
    ])
]
})
export class GroupTrackerComponent implements OnInit {

  items: Array<Item>;

  constructor(private dataService: AppDataService) {}

ngOnInit() {
this.dataService.getItems().subscribe(
items => {
  this.items = items;
}
);
}

}
