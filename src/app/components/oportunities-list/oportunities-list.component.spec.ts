import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OportunitiesListComponent } from './oportunities-list.component';

describe('OportunitiesListComponent', () => {
  let component: OportunitiesListComponent;
  let fixture: ComponentFixture<OportunitiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OportunitiesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OportunitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
