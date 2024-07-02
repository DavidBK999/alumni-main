import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alumni1Component } from './alumni1.component';

describe('Alumni1Component', () => {
  let component: Alumni1Component;
  let fixture: ComponentFixture<Alumni1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Alumni1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alumni1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
