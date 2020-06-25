import { Component, OnInit } from '@angular/core';
import { ProjectService } from './../../services/project.service';
import { Router } from '@angular/router';
import { Project } from './../../models/project.module';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {
  }

  createProject(name: string) {
    this.projectService.createProject(name).subscribe((project: Project) => {
      this.router.navigate(['/projects', project._id]);
    });
  }

}
