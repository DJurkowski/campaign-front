import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsListComponent } from './views/projects-list/projects-list.component';
import { NewProjectComponent } from './views/new-project/new-project.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    NewProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
