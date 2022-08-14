import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { ConsoleTextComponent } from './console-text/console-text.component';
import { HeaderComponent } from './header/header.component';
import { MarqueeComponent } from './marquee/marquee.component';
import { ReticleComponent } from './reticle/reticle.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NavMenuItemComponent } from './nav-menu-item/nav-menu-item.component';
import { RouterModule } from '@angular/router';
import { LoadingPanelComponent } from './loading-panel/loading-panel.component';
import { RouterPanelComponent } from './router-panel/router-panel.component';



@NgModule({
  declarations: [
    PanelComponent,
    ConsoleTextComponent,
    HeaderComponent,
    MarqueeComponent,
    ReticleComponent,
    NavMenuComponent,
    NavMenuItemComponent,
    LoadingPanelComponent,
    RouterPanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PanelComponent,
    ConsoleTextComponent,
    HeaderComponent,
    MarqueeComponent,
    ReticleComponent,
    NavMenuComponent,
    NavMenuItemComponent,
    LoadingPanelComponent,
    RouterPanelComponent
  ]
})
export class GymcrashComponentsModule { }
