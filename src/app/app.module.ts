import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import {Location, LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AppRoutingModule } from './config/app-routing.module';
import { AppComponent } from './app.component';

//Pages
import { SideBarComponent }   from './components/side-bar/side-bar.component';
import { HomeComponent }   from './components/home/home.component';
import { WorkComponent }   from './components/work/work.component';
import { TechComponent }   from './components/tech/tech.component';

//Common
import { CardComponent }   from './components/common/card/card.component';
import { SlideButtonComponent }   from './components/common/slide-button/slide-button.component';


@NgModule({
  declarations: [
  AppComponent,//app

  HomeComponent,SideBarComponent,WorkComponent,TechComponent,//pages
  CardComponent,SlideButtonComponent//common
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
  AppRoutingModule,
  ],
  providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
