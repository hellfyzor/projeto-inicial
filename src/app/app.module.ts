import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CardsModule} from "./componentes/cards/cards.module";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatSlider, MatSliderThumb} from "@angular/material/slider";


@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CardsModule,
        MatSlider,
        MatSliderThumb
    ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
