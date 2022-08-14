import { Component, Input, OnInit } from '@angular/core';
import { ActivationStart, NavigationStart, Router } from '@angular/router';
import { take, timer } from 'rxjs';

@Component({
  selector: 'gym-router-panel',
  templateUrl: './router-panel.component.html',
  styleUrls: ['./router-panel.component.scss']
})
export class RouterPanelComponent implements OnInit {

  @Input() minimumLoadingTime: number = 1000;
  showLoading: boolean = false;
  title: string = "";

  constructor(private router: Router) {    
    this.initRouterPanelLoading();
  }

  ngOnInit(): void {

    
  }
  
  
  private initRouterPanelLoading() {
    this.router.events.subscribe({
      next: (e) => {
        if (e instanceof NavigationStart) {
          this.showLoadingScreen();
        }
        if (e instanceof ActivationStart) {
          this.extractRouteTitle(e);
        }
      }
    });
  }

  private extractRouteTitle(e: ActivationStart) {
    this.title = e.snapshot.data["title"] || "";
  }

  private showLoadingScreen() {
    this.showLoading = true;
    timer(this.minimumLoadingTime).pipe(take(1)).subscribe({
      next: () => {
        this.showLoading = false;
      }
    });
  }
}
