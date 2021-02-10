import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcrilicosComponent } from './acrilicos.component';

describe('AcrilicosComponent', () => {
  let component: AcrilicosComponent;
  let fixture: ComponentFixture<AcrilicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcrilicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcrilicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
