import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsListComponent } from './views/projects-list/projects-list.component';
import { NewProjectComponent } from './views/new-project/new-project.component';
import { DetailsCampaignComponent } from './views/details-campaign/details-campaign.component';

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectsListComponent },
  { path: 'projects/:projectId', component: ProjectsListComponent },
  { path: 'new-project', component: NewProjectComponent },
  { path: 'projects/:projectId/campaign/:campaignId', component: DetailsCampaignComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
