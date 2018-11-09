import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudExampleComponent } from './components/app-components/crud-example/crud-example.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/gui-components/layout-components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: DashboardComponent
  },
  { path: 'crud-example', component: CrudExampleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
