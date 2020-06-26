import { Campaign } from './../../models/campaign.module';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-details-campaign',
  templateUrl: './details-campaign.component.html',
  styleUrls: ['./details-campaign.component.scss']
})
export class DetailsCampaignComponent implements OnInit {

  campaign: Campaign;
  projectId: string;

  constructor(private projectService: ProjectService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        if (params.projectId) {
          this.projectId = params.projectId;
          this.projectService.getCampaign(params.projectId).subscribe((campaign: Campaign) => {
            if (campaign[0]){
              this.campaign = campaign[0];
            } else {
              this.campaign = undefined;
            }
            console.log(campaign);
          });
        } else {
          this.campaign = undefined;
        }
      }
    );
  }

  onDeleteCampaignClick(campaign: string) {
    this.projectService.deleteCampaign(this.projectId, campaign).subscribe((res: any) => {
      this.router.navigate(['projects']);
    });
  }

}
