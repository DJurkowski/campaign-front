import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsListComponent } from './views/projects-list/projects-list.component';
import { NewProjectComponent } from './views/new-project/new-project.component';
import { DetailsCampaignComponent } from './views/details-campaign/details-campaign.component';
import { NewCampaignComponent } from './views/new-campaign/new-campaign.component';
import { EditCampaignComponent } from './views/edit-campaign/edit-campaign.component';
import { EditProjectComponent } from './views/edit-project/edit-project.component';

import { AlertService } from './services/alert.service';
import { AlertComponent } from './views/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    NewProjectComponent,
    DetailsCampaignComponent,
    NewCampaignComponent,
    EditCampaignComponent,
    EditProjectComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
