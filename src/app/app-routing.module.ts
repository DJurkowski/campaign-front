import { NewCampaignComponent } from './views/new-campaign/new-campaign.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsListComponent } from './views/projects-list/projects-list.component';
import { NewProjectComponent } from './views/new-project/new-project.component';
import { DetailsCampaignComponent } from './views/details-campaign/details-campaign.component';
import { EditCampaignComponent } from './views/edit-campaign/edit-campaign.component';
import { EditProjectComponent } from './views/edit-project/edit-project.component';

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectsListComponent },
  { path: 'projects/:projectId', component: ProjectsListComponent },
  { path: 'projects/:projectId/edit', component: EditProjectComponent },
  { path: 'projects/:projectId/new-campaign', component: NewCampaignComponent },
  { path: 'new-project', component: NewProjectComponent },
  { path: 'projects/:projectId/campaign/:campaignId', component: DetailsCampaignComponent },
  { path: 'projects/:projectId/campaign/:campaignId/edit', component: EditCampaignComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
