import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideoffComponent } from './slideoff.component';

describe('SlideoffComponent', () => {
  let component: SlideoffComponent;
  let fixture: ComponentFixture<SlideoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideoffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
