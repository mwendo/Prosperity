import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProsperityButtonComponent } from './components/prosperity-button/prosperity-button.component';
import { LaunchPageComponent } from './components/launch-page/launch-page.component';
import { UserFormComponent } from './components/user-sign-up-form/user-sign-up-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProsperityButtonComponent,
    LaunchPageComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
