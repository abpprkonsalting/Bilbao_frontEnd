import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OportunitiesPartsRepoComponent } from './oportunities-parts-repo.component';

describe('OportunitiesPartsRepoComponent', () => {
  let component: OportunitiesPartsRepoComponent;
  let fixture: ComponentFixture<OportunitiesPartsRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OportunitiesPartsRepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OportunitiesPartsRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
