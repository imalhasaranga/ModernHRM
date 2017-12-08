import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule   } from '@angular/platform-browser/animations'  
import { NgModule } from '@angular/core';

import { MaterialAnimationModule } from './app.material.module';
import { AppComponent } from './app.component';

import { LoginModule } from './Login/login.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialAnimationModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
