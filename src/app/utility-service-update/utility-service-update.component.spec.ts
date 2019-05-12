import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityServiceUpdateComponent } from './utility-service-update.component';

describe('UtilityServiceUpdateComponent', () => {
  let component: UtilityServiceUpdateComponent;
  let fixture: ComponentFixture<UtilityServiceUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilityServiceUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilityServiceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
