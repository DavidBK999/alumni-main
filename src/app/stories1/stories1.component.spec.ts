import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stories1Component } from './stories1.component';

describe('Stories1Component', () => {
  let component: Stories1Component;
  let fixture: ComponentFixture<Stories1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Stories1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stories1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
