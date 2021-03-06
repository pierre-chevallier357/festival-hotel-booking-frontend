/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProfessionalLoginComponent } from './professional-login.component';

describe('ProfessionalLoginComponent', () => {
  let component: ProfessionalLoginComponent;
  let fixture: ComponentFixture<ProfessionalLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
