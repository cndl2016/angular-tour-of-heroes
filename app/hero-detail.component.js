"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_1 = require('./hero');
var HeroDetailComponent = (function () {
    function HeroDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hero_1.Hero)
    ], HeroDetailComponent.prototype, "hero", void 0);
    HeroDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-hero-detail',
            template: "\n\t<div *ngIf=\"hero\" class=\"hero-details\">\n      <h2>{{hero.name}} \u6570\u636E\u4E00\u89C8</h2>\n      <div><label>\u7F16\u53F7: </label>{{hero.id}}</div>\n      <div>\n        <label>\u540D\u79F0: </label>\n        <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n        <div><label style=\"color:#F6378F\">\u529B\u91CF : </label>{{hero.strength}}</div>\n        <div><label style=\"color:#8BC34A\">\u654F\u6377 : </label>{{hero.agility}}</div>\n        <div><label style=\"color:#006C9A\">\u667A\u529B : </label>{{hero.intelligence}}</div>\n      </div>\n    </div>\n\t",
            styles: ["\n    .hero-details {\n      width: 500px;\n      padding-top: 5px;\n      padding-left: 280px;\n    }\n  "],
        }), 
        __metadata('design:paramtypes', [])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map