import { Component, Input, OnInit } from '@angular/core';

import { User } from '../../view-models/user';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  @Input() user: User;
  @Input() index = 1;

  constructor() { }

  ngOnInit() {
  }
}
