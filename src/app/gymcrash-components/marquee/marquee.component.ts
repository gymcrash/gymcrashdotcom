import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gym-marquee',
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.scss']
})
export class MarqueeComponent implements OnInit {

  @Input() text : string = "";
  @Input() time : number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  getTextAnimationTimingStyle(delay?: boolean) : string {
    let animationDelay : string = delay && this.time !== undefined ? `animation-delay: ${this.time/2}s;` : '';
    return `animation-duration: ${this.time + 's' || '5s'}; ${animationDelay}`;
  };

}
