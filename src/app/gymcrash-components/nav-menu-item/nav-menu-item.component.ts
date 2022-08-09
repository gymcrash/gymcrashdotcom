import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gym-nav-menu-item',
  templateUrl: './nav-menu-item.component.html',
  styleUrls: ['./nav-menu-item.component.scss']
})
export class NavMenuItemComponent implements OnInit {

  @Input() routerLink : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
