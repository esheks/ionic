import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NorwayPage } from './norway.page';

describe('NorwayPage', () => {
  let component: NorwayPage;
  let fixture: ComponentFixture<NorwayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorwayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorwayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
