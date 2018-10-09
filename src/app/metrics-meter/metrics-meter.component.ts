import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../services/app-data.service';
import { Item } from '../view-models/item';

@Component({
  selector: 'app-metrics-meter',
  templateUrl: './metrics-meter.component.html',
  styleUrls: ['./metrics-meter.component.css']
})
export class MetricsMeterComponent implements OnInit {

  items : Array<Item>;

  constructor(private dataService: AppDataService) { 
      dataService.getItems().subscribe((data) => this.items = data);
    }

  ngOnInit() {
  }

 
}
