import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperposeComponent } from './superpose.component';

describe('SuperposeComponent', () => {
  let component: SuperposeComponent;
  let fixture: ComponentFixture<SuperposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperposeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
