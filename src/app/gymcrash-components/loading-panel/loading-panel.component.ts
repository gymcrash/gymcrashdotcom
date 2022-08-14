import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gym-loading-panel',
  templateUrl: './loading-panel.component.html',
  styleUrls: ['./loading-panel.component.scss']
})
export class LoadingPanelComponent implements OnInit {

  @Input() message : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
