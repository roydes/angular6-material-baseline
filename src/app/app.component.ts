import { Component } from '@angular/core';
import { MediaMatcher} from '@angular/cdk/layout';
import { ChangeDetectorRef} from '@angular/core';
import { GUIComponent } from './components/gui-components/gui-component/gui.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})

export class AppComponent extends GUIComponent {
  sidenavOpened = false;
  title = 'Angular 6 Material baseline ';
  menuMap = appMenuMap;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    super(changeDetectorRef, media);
  }
  sidenavOpenedChange(opened) {
    this.sidenavOpened = opened;
    console.log(this.sidenavOpened);

  }

}


export const appMenuMap = [
  {'title' : 'Form controls',
   'routerLink' : '.',
   'childs': [
               {'title': 'Radio button', 'routerLink': '.', 'childs': [], },
               {'title': 'Input', 'routerLink': '.', 'childs': [], }
              ],
   },
   {'title': 'Form controls',
    'routerLink': '.',
    'childs': [],
   },
  { 'title': 'CRUD example',
    'routerLink': '/crud-example',
    'childs': []
  }
  ];
