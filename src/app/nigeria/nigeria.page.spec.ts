import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NigeriaPage } from './nigeria.page';

describe('NigeriaPage', () => {
  let component: NigeriaPage;
  let fixture: ComponentFixture<NigeriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NigeriaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NigeriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
