import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProsperityButtonComponent } from './components/prosperity-button/prosperity-button.component';
import { LaunchPageComponent } from './launch-page/launch-page.component';
import { UserFormComponent } from './components/user-sign-up-form/user-sign-up-form.component';

const routes: Routes = [
  { path: 'home', component: ProsperityButtonComponent, title: 'Where Prosperity Takes Place'},
  { path: 'launchPage', component: LaunchPageComponent, title: 'Where Prosperity Takes Place'},
  { path: 'register', component: UserFormComponent, title: 'Where Prosperity Takes Place'},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
