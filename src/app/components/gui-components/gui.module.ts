import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule} from './material.module';
import { ToolbarComponent } from './navegation-components/toolbar/toolbar.component';
import { SidenavComponent } from './navegation-components/sidenav/sidenav.component';
import { DynamicMenuComponent } from './navegation-components/dynamic-menu/dynamic-menu.component';

import { GUIComponent } from './gui-component/gui.component';
@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      BrowserAnimationsModule,
      MaterialModule,
  ],
  declarations: [
      GUIComponent,
      ToolbarComponent,
      SidenavComponent,
      DynamicMenuComponent,
    ],
  exports: [
      GUIComponent,
      ToolbarComponent,
      SidenavComponent,
      DynamicMenuComponent,
      MaterialModule,
      CommonModule,
      FormsModule,
      BrowserAnimationsModule,
    ]
})
export class GUIModule { }
