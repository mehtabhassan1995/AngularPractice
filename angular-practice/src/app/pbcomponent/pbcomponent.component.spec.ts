import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PbcomponentComponent } from './pbcomponent.component';

describe('PbcomponentComponent', () => {
  let component: PbcomponentComponent;
  let fixture: ComponentFixture<PbcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PbcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PbcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
