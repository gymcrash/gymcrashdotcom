import { Component, Input, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { take, timer } from 'rxjs';

@Component({
  selector: 'gym-router-panel',
  templateUrl: './router-panel.component.html',
  styleUrls: ['./router-panel.component.scss']
})
export class RouterPanelComponent implements OnInit {

  @Input() minimumLoadingTime: number = 1000;
  showLoading: boolean = false;

  constructor(private router: Router) { 
    this.router.events.subscribe({
      next: (e)=> {
        if(e instanceof NavigationStart) {
          this.showLoading = true;
          timer(this.minimumLoadingTime).pipe(take(1)).subscribe({
            next: ()=> {
              this.showLoading = false;
            }
          });
        }
      }
    });
  }

  ngOnInit(): void {
  }

}
