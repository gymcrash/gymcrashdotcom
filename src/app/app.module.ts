import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GymcrashComponentsModule } from './gymcrash-components/gymcrash-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GymcrashComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
