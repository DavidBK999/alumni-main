import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Career1Component } from './career1.component';

describe('Career1Component', () => {
  let component: Career1Component;
  let fixture: ComponentFixture<Career1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Career1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Career1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
