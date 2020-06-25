import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsListComponent } from './views/projects-list/projects-list.component';
import { NewProjectComponent } from './views/new-project/new-project.component';
import { DetailsCampaignComponent } from './views/details-campaign/details-campaign.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    NewProjectComponent,
    DetailsCampaignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
