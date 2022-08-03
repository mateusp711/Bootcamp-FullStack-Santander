import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@Angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Error404Component } from './erro404/error-404.component';
import { courseModule } from './courses/course.module';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    Error404Component
    

  
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    courseModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'courses', pathMatch: 'full'},
      {path: '**', component: Error404Component}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }  
