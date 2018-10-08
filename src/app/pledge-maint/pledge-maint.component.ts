import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppDataService } from '../services/app-data.service';
import { Pledge } from '../view-models/pledge';


@Component({
  selector: 'app-pledge-maint',
  templateUrl: './pledge-maint.component.html',
  styleUrls: ['./pledge-maint.component.css']
})
export class PledgeMaintComponent implements OnInit {

  pledges : Array<Pledge>;
  deleteError: string;
  deleteId: number;
  isDeleting = false;

  constructor(private dataService: AppDataService,
    private router: Router) { 
      dataService.getPledges().subscribe((data) => this.pledges = data);
    }

  ngOnInit() {
  }

  cancelDelete() {
    this.isDeleting = false;
    this.deleteId = null;
  }

  createPledge() {
    this.router.navigate(['/authenticated/pledge-detail', 0, 'create']);
  }

  deletePledge(id: number) {
    this.isDeleting = true;
    this.dataService.deletePledge(id).subscribe(
      c => this.cancelDelete(),
      err => { this.deleteError = err; this.isDeleting = false; }
      );
  }

  deletePledgeQuestion(id:number) {
    this.deleteError = null;
    this.deleteId = id;
  }

  editPledge(id: number) {
    this.router.navigate(['/authenticated/pledge-detail', id, 'edit']);
  }

  showPledgeDetail(id: number) {
    this.router.navigate(['/authenticated/pledge-detail', id, 'details']);
  }
}
