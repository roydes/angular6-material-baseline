import { Component, OnInit,Input } from '@angular/core';
import {menuItem} from './menu-item'

@Component({
    selector: 'dynamic-menu',
    templateUrl: './dynamic-menu.component.html',
    styleUrls: ['./dynamic-menu.component.css']
})
export class DynamicMenuComponent implements OnInit {
    @Input() menuMap: menuItem[] = [];

    constructor() { }
    ngOnInit(): void { console.log(this.menuMap);}
}
