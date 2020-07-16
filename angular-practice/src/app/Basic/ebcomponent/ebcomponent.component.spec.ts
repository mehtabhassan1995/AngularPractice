import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbcomponentComponent } from './ebcomponent.component';

describe('EbcomponentComponent', () => {
  let component: EbcomponentComponent;
  let fixture: ComponentFixture<EbcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
