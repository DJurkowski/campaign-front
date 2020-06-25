import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsListComponent } from './views/projects-list/projects-list.component';
import { NewProjectComponent } from './views/new-project/new-project.component';

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectsListComponent },
  { path: 'projects/:projectId', component: ProjectsListComponent },
  { path: 'new-project', component: NewProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
