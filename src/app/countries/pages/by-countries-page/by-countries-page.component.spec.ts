import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCountriesPageComponent } from './by-countries-page.component';

describe('ByCountriesPageComponent', () => {
  let component: ByCountriesPageComponent;
  let fixture: ComponentFixture<ByCountriesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ByCountriesPageComponent]
    });
    fixture = TestBed.createComponent(ByCountriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
