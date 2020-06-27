import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Observable } from 'rxjs';
import { Campaign } from './../models/campaign.module';
import { FormCampaign } from './../models/formCampaign.module';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private webRequestService: WebRequestService) { }

  createProject(name: string): Observable<any> {
    return this.webRequestService.post('/projects', { name });
  }

  editProject(id: string, name: string): Observable<any> {
    return this.webRequestService.patch(`/projects/${id}`, {name});
  }

  getProjects(): Observable<any> {
    return this.webRequestService.get('/projects');
  }

  getProject(id: string): Observable<any> {
    return this.webRequestService.get(`/projects/${id}`);
  }

  deleteProject(id: string) {
    return this.webRequestService.delete(`/projects/${id}`);
  }

  createCampaign(projectId: string, campaign: FormCampaign): Observable<any> {
    return this.webRequestService.post(`/projects/${projectId}/campaign`, campaign);
  }

  editCampaign(projectId: string, campaignId: string, campaign: Campaign): Observable<any> {
    return this.webRequestService.patch(`/projects/${projectId}/campaign/${campaignId}`, campaign );
  }

  getCampaign(projectId: string): Observable<any> {
    return this.webRequestService.get(`/projects/${projectId}/campaign`);
  }

  deleteCampaign(projectId: string, campaignId: string) {
    return this.webRequestService.delete(`/projects/${projectId}/campaign/${campaignId}`);
  }

  getEmerald(projectId: string) {
    return this.webRequestService.get(`/projects/${projectId}/emerald`);
  }

}
