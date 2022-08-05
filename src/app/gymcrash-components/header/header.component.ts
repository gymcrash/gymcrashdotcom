import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'gym-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

   private mousePositionX: number = 0;
  private mousePositionY: number = 0;
  private offsetPositionX: number = 0;
  private offsetPositionY: number = 0;
  private srcTarget: string = "###";
  private srcTargetClassname: string = "###";

  @HostListener("window:mousemove", ["$event"]) updateMousePosition(e: MouseEvent) {
    this.mousePositionX = e.screenX;
    this.mousePositionY = e.screenY;
    this.offsetPositionX = e.offsetX;
    this.offsetPositionY = e.offsetY;
    this.srcTarget = (<HTMLElement>e.target).tagName;
    this.srcTargetClassname = (<HTMLElement>e.target).className;
  }

  constructor() { }

  ngOnInit(): void {
  }

  getMouseXPos() : string {
    return `x: ${this.mousePositionX}`;
  }

  getMouseYPos() : string {
    return `y: ${this.mousePositionY}`;
  }

  getMouseTarget(): string {
    return `target: ${this.srcTarget || '###'} - className: ${this.srcTargetClassname || 'n/a'} - offsetX: ${this.offsetPositionX}, offsetY: ${this.offsetPositionY}`;
  }

  getCurrentDateTime() : string {
    return new Date().toLocaleString();
  }

}
