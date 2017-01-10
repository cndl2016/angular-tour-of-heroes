import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
	selector: 'my-hero-detail',
	template:`
	<div *ngIf="hero" class="hero-details">
      <h2>{{hero.name}} 数据一览</h2>
      <div><label>编号: </label>{{hero.id}}</div>
      <div>
        <label>名称: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
        <div><label style="color:#F6378F">力量 : </label>{{hero.strength}}</div>
        <div><label style="color:#8BC34A">敏捷 : </label>{{hero.agility}}</div>
        <div><label style="color:#006C9A">智力 : </label>{{hero.intelligence}}</div>
      </div>
    </div>
	`,
	styles: [`
    .hero-details {
      width: 500px;
      padding-top: 5px;
      padding-left: 280px;
    }
  `],
})

export class HeroDetailComponent{
	@Input()
	hero : Hero;
}