import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Career2Component } from './career2.component';

describe('Career2Component', () => {
  let component: Career2Component;
  let fixture: ComponentFixture<Career2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Career2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Career2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
