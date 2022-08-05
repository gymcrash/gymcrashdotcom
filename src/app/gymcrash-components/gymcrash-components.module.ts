import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { ConsoleTextComponent } from './console-text/console-text.component';
import { HeaderComponent } from './header/header.component';
import { MarqueeComponent } from './marquee/marquee.component';



@NgModule({
  declarations: [
    PanelComponent,
    ConsoleTextComponent,
    HeaderComponent,
    MarqueeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PanelComponent,
    ConsoleTextComponent,
    HeaderComponent,
    MarqueeComponent
  ]
})
export class GymcrashComponentsModule { }
