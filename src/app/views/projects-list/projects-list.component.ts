import { Component, OnInit } from '@angular/core';
import { ProjectService } from './../../services/project.service';
import { AlertService } from './../../services/alert.service';
import { Campaign } from './../../models/campaign.module';
import { Project } from './../../models/project.module';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  projects: Project[];
  campaigns: Campaign[];

  selectedProjectId: string;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        if (params.projectId) {
          this.selectedProjectId = params.projectId;
          this.projectService.getCampaign(params.projectId).subscribe((campaign: Campaign[]) => {
            this.campaigns = campaign;
          });
        } else {
          this.campaigns = undefined;
        }
      }
    );

    this.projectService.getProjects().subscribe((projects: any[]) => {
      this.projects = projects;
    });
  }

  onDeleteProjectClick() {
    this.projectService.deleteProject(this.selectedProjectId).subscribe((res: any) => {
      this.alertService.success(res.msg);
      this.router.navigate(['/projects']);
    });
  }

}
