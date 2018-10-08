import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';

import { AppDataService } from '../services/app-data.service';
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
    },
    {
      key: 'epiIndex',
      type: 'number',
      isId: false,
      label: 'EPI Index',
      required: true
    }
  ];
  errorMessage: string;
  operation: string;

  constructor(private route: ActivatedRoute,
              private router: Router, 
              private dataService: AppDataService) { }

  createPledge(pledge: Pledge) {
    pledge.id = 0;
    this.errorMessage = null;
    this.dataService.createPledge(pledge).subscribe(
      c => this.router.navigate(['/authenticated/pledge-maint']),
      err => this.errorMessage = 'Error creating pledge'
      );
  }

  ngOnInit() {
    this.operation = this.route.snapshot.params['operation'];

    if (this.operation === 'create') {
      this.pledge = { id: 0, name: "", epiIndex: null };
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
