import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatizaComponent } from './patiza.component';

describe('PatizaComponent', () => {
  let component: PatizaComponent;
  let fixture: ComponentFixture<PatizaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatizaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
