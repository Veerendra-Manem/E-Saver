import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';

import { AppDataService } from '../services/app-data.service';
import { ApiService } from '../services/api.service';

import { Pledge } from '../view-models/pledge';
import { FieldDefinition } from '../../fw/dynamic-forms/field-definition';

@Component({
  selector: 'app-pledge-detail',
  templateUrl: './pledge-detail.component.html',
  styleUrls: ['./pledge-detail.component.css']
})
export class PledgeDetailComponent implements OnInit {
  pledge: Pledge;
  pledgeDefinition: Array<FieldDefinition> = [
    {
      key: 'id',
      type: 'number',
      isId: true,
      label: 'Id',
      required: true
    },
    { key: 'name',
      type: 'string',
      isId: false,
      label: 'Pledge',
      required: true
    }
  ];
  errorMessage: string;
  operation: string;

  constructor(private route: ActivatedRoute,
              private router: Router, 
              private apiService: ApiService,
              private dataService: AppDataService) { }

  createPledge(pledge: Pledge) {
    pledge.id = new Date().getMilliseconds();
    this.errorMessage = null;
    //this.dataService.createPledge(pledge).subscribe(
    this.apiService.createPledge(pledge).subscribe(
      c => this.router.navigate(['/authenticated/dashboard']),
      err => {
      console.log(err)
      this.errorMessage = 'Error creating pledge'
      }
      );
  }

  ngOnInit() {
    this.operation = this.route.snapshot.params['operation'];

    if (this.operation === 'create') {
      this.pledge = { id: new Date().getMilliseconds(), name: "" };
    }
    else
      this.dataService.getPledge(this.route.snapshot.params['id'])
        .subscribe((pledge: Pledge) => this.pledge = pledge);
  }

  updatePledge(pledge: Pledge) {
    this.errorMessage = null;
    this.dataService.updatePledge(pledge).subscribe(
      c => this.router.navigate(['/authenticated/pledge-maint']),
      err => this.errorMessage = 'Error updating pledge'
      );
  }

}
