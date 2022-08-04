import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@Angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { courseModule } from './courses/course.module';
import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [
    AppComponent,
    

  
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    courseModule,
    CoreModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'courses', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }  
