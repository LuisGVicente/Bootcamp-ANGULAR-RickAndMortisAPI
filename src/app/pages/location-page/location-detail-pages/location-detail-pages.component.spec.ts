import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDetailPagesComponent } from './location-detail-pages.component';

describe('LocationDetailPagesComponent', () => {
  let component: LocationDetailPagesComponent;
  let fixture: ComponentFixture<LocationDetailPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationDetailPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationDetailPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
