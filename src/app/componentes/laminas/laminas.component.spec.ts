import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaminasComponent } from './laminas.component';

describe('LaminasComponent', () => {
  let component: LaminasComponent;
  let fixture: ComponentFixture<LaminasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaminasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaminasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
