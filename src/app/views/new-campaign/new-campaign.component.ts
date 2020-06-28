import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ProjectService } from './../../services/project.service';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { FormCampaign } from './../../models/formCampaign.module';
import { NgOption } from '@ng-select/ng-select';

import { TOWNS } from './../../utils/towns';
import { POPKEYOWRDS } from './../../utils/popularkeywords';

@Component({
  selector: 'app-new-campaign',
  templateUrl: './new-campaign.component.html',
  styleUrls: ['./new-campaign.component.scss']
})
export class NewCampaignComponent implements OnInit {

  towns: string[];
  popkeywords: NgOption[];
  projectId: string;

  selectedKeywords = [];
  selectedKeywordId: number;

  emeraldFund: number;
  newCampaign: FormCampaign;

  campaign = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(1)]),
    keywords: new FormControl('', Validators.required),
    bidAmount: new FormControl('', Validators.required),
    fund: new FormControl(''),
    status: new FormControl('', Validators.required),
    town: new FormControl(''),
    radius: new FormControl('', Validators.required)
  });

  constructor(private projectService: ProjectService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.towns = TOWNS;
    this.popkeywords = POPKEYOWRDS;

    this.route.params.subscribe(
      (params: Params) => {
        if (params.projectId) {
          this.projectId = params.projectId;

          this.projectService.getEmerald(params.projectId).subscribe((emerald: any) => {
            this.campaign.controls.fund.setValidators([
              Validators.required,
              (control: AbstractControl) => Validators.max(emerald[0].funds)(control)
            ]);
            this.emeraldFund = emerald[0].funds;
          });
        }
      }
    );
  }

  onSubmit() {
    this.newCampaign = this.campaign.value;
    console.log(this.campaign.value);

    this.projectService.createCampaign(this.projectId, this.newCampaign).subscribe(() => {

      this.router.navigate(['/projects', this.projectId]);
    });
  }

  onAdd = ($event: any): void => {
    this.selectedKeywords.push($event);
  }

  onRemove = ($event: any): void => {
    this.selectedKeywords = this.selectedKeywords.filter( keyword => keyword.id !== $event.value.id);
  }


  // Getters

  get name() {
    return this.campaign.get('name');
  }

  get keywords() {
    return this.campaign.get('keywords');
  }

  get bidAmount() {
    return this.campaign.get('bidAmount');
  }

  get fund() {
    return this.campaign.get('fund');
  }

  get status() {
    return this.campaign.get('status');
  }

  get radius() {
    return this.campaign.get('radius');
  }

}
