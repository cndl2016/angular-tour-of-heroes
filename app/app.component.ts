import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
     <a routerLink="/dashboard">仪表盘</a>
     <a routerLink="/heroes">英雄列表</a>
   	</nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'DOTA2 Heroes';
}