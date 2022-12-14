import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesPageComponent } from './pages/games-page/games-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MediaPageComponent } from './pages/media-page/media-page.component';
import { WebdevPageComponent } from './pages/webdev-page/webdev-page.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "home"
      },
      {
        path: "home",
        component: HomePageComponent,
        data: {
          title: "Home"
        }
      },
      {
        path: "games",
        component: GamesPageComponent,
        data: {
          title: "Game dev"
        }
      },
      {
        path: "media",
        component: MediaPageComponent,
        data: {
          title: "Media"
        }
      },
      {
        path: "web",
        component: WebdevPageComponent,
        data: {
          title: "Web dev"
        }
      }

    ]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GymcrashsiteRoutingModule { }
