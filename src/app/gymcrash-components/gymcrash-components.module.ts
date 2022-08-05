import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { ConsoleTextComponent } from './console-text/console-text.component';
import { HeaderComponent } from './header/header.component';
import { MarqueeComponent } from './marquee/marquee.component';
import { ReticleComponent } from './reticle/reticle.component';



@NgModule({
  declarations: [
    PanelComponent,
    ConsoleTextComponent,
    HeaderComponent,
    MarqueeComponent,
    ReticleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PanelComponent,
    ConsoleTextComponent,
    HeaderComponent,
    MarqueeComponent,
    ReticleComponent
  ]
})
export class GymcrashComponentsModule { }
