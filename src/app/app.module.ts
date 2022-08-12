import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GymcrashComponentsModule } from './gymcrash-components/gymcrash-components.module';
import { GymcrashsiteModule } from './gymcrashsite/gymcrashsite.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GymcrashComponentsModule,
    GymcrashsiteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
