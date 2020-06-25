import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCampaignComponent } from './details-campaign.component';

describe('DetailsCampaignComponent', () => {
  let component: DetailsCampaignComponent;
  let fixture: ComponentFixture<DetailsCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
