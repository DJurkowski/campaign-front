import { AlertService } from './../../services/alert.service';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Project } from 'src/app/models/project.module';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  projectId: string;
  name: string;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute,
    private alerService: AlertService ) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        this.projectId = params.projectId;

        this.projectService.getProject(params.projectId).subscribe((project: Project) => {
          console.log(project);
          this.name = project.name;
        });
      }
    );
  }

  editProject() {
    this.projectService.editProject(this.projectId, this.name).subscribe((data) => {
      console.log(data);
      this.alerService.success(data.msg);
      this.router.navigate(['/projects', this.projectId]);
    });
  }

}
