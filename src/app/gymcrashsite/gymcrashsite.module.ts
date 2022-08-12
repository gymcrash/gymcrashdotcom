import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GymcrashsiteRoutingModule } from './gymcrashsite-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GamesPageComponent } from './pages/games-page/games-page.component';
import { MediaPageComponent } from './pages/media-page/media-page.component';
import { WebdevPageComponent } from './pages/webdev-page/webdev-page.component';
import { GymcrashComponentsModule } from '../gymcrash-components/gymcrash-components.module';


@NgModule({
  declarations: [
    HomePageComponent,
    GamesPageComponent,
    MediaPageComponent,
    WebdevPageComponent
  ],
  imports: [
    CommonModule,
    GymcrashsiteRoutingModule,
    GymcrashComponentsModule
  ],
  exports: [
    HomePageComponent,
    GamesPageComponent,
    MediaPageComponent,
    WebdevPageComponent
  ]
})
export class GymcrashsiteModule { }
