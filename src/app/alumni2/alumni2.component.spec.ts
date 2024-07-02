import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alumni2Component } from './alumni2.component';

describe('Alumni2Component', () => {
  let component: Alumni2Component;
  let fixture: ComponentFixture<Alumni2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Alumni2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alumni2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
