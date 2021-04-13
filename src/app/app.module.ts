import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MolstarDialogComponent } from './molstar-dialog/molstar-dialog.component';
import { SuperposeComponent } from './superpose/superpose.component';
import { RepresentativeStructuresComponent } from './representative-structures/representative-structures.component';
import {MatDialogModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    MolstarDialogComponent,
    SuperposeComponent,
    RepresentativeStructuresComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
