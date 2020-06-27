import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Validators, FormGroup, FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import { Campaign } from './../../models/campaign.module';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { TOWNS } from './../../utils/towns';


@Component({
  selector: 'app-edit-campaign',
  templateUrl: './edit-campaign.component.html',
  styleUrls: ['./edit-campaign.component.scss']
})
export class EditCampaignComponent implements OnInit {

  projectId: string;
  campaignId: string;

  emeraldFund: number;

  campaignForm = new FormGroup({
      _id: new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.minLength(1)]),
      keywords: new FormControl('', Validators.required),
      bidAmount: new FormControl('', Validators.required),
      fund: new FormControl(''),
      status: new FormControl('', Validators.required),
      town: new FormControl(''),
      radius: new FormControl('', Validators.required)
  });

  towns: string[];

  constructor(private projectService: ProjectService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.towns = TOWNS;
    this.route.params.subscribe(
      (params: Params) => {
        this.projectId = params.projectId;
        this.campaignId = params.campaignId;

        this.projectService.getEmerald(params.projectId).subscribe((emerald: any) => {
          this.campaignForm.controls.fund.setValidators([
            Validators.required,
            (control: AbstractControl) => Validators.max(emerald[0].funds)(control)
          ]);
          this.emeraldFund = emerald[0].funds;
        });

        this.getCampaign(params.projectId);
      }
    );
  }

  private getCampaign(projectId: string) {
    this.projectService.getCampaign(projectId).subscribe((campaign: Campaign) => {
      console.log(campaign[0]);

      this.campaignForm.patchValue({
        _id: campaign[0]._id,
        name: campaign[0].name,
        keywords: campaign[0].keywords,
        bidAmount: campaign[0].bidAmount,
        fund: campaign[0].fund,
        status: campaign[0].status,
        town: campaign[0].town,
        radius: campaign[0].radius
      });
    });
  }

  onSubmit() {
    this.projectService.editCampaign(this.projectId, this.campaignId, this.campaignForm.value).subscribe(() => {
      this.router.navigate(['/projects', this.projectId, 'campaign', this.campaignId]);
    });
  }

  get name() {
    return this.campaignForm.get('name');
  }

  get keywords() {
    return this.campaignForm.get('keywords');
  }

  get bidAmount() {
    return this.campaignForm.get('bidAmount');
  }

  get fund() {
    return this.campaignForm.get('fund');
  }

  get status() {
    return this.campaignForm.get('status');
  }

  get town() {
    return this.campaignForm.get('town');
  }

  get radius() {
    return this.campaignForm.get('radius');
  }

}
