import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GUIModule } from './components/gui-components/gui.module';
import { CrudExampleComponent } from './components/app-components/crud-example/crud-example.component';
import { DashboardComponent } from './components/gui-components/layout-components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CrudExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GUIModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
