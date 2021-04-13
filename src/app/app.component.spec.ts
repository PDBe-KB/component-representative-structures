import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RepresentativeStructuresComponent} from "./representative-structures/representative-structures.component";
import {MatDialogModule} from "@angular/material";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RepresentativeStructuresComponent
      ],
      imports: [
        MatDialogModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
