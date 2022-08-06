import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'gym-reticle',
  templateUrl: './reticle.component.html',
  styleUrls: ['./reticle.component.scss']
})
export class ReticleComponent implements OnInit {

  x:number = -100;
  y: number = -100;

  hasTarget: boolean = false;

  @HostListener("window:mousemove", ["$event"]) handleMouseMove(e: MouseEvent) {
    this.x = e.clientX;
    this.y = e.clientY;
    this.hasTarget = !!e.target;
  }

  constructor() { }

  ngOnInit(): void {
  }


  getPositionStyle(diameter: number): string {
    return `top: ${this.y-diameter/2}px; left: ${this.x-diameter/2}px;`;
  }

  getVerticalRulerStyle() :string {
    return `background-position: 0 ${this.y}px`;
  }

}
