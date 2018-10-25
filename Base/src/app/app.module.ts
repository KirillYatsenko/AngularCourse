import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GameControlComponent } from './assigment_1/game-control/game-control.component';
import { OddComponent } from './assigment_1/odd/odd.component';
import { EvenComponent } from './assigment_1/even/even.component';
import { ObservablesComponent } from './observables/observables.component';


@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    ObservablesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
