import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
	selector: 'my-hero-detail',
	template:`
	<div *ngIf="hero">
      <h2>{{hero.name}} 数据一览</h2>
      <div><label>编号: </label>{{hero.id}}</div>
      <div>
        <label>名称: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
        <div><label style="color:#F6378F">力量: </label>{{hero.strength}}</div>
        <div><label style="color:#8BC34A">敏捷: </label>{{hero.agility}}</div>
        <div><label style="color:#55B3F3">智力: </label>{{hero.intelligence}}</div>
      </div>
    </div>
	`,
})

export class HeroDetailComponent{
	@Input()
	hero : Hero;
}